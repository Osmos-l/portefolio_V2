import React, { useState, useEffect, useRef } from "react";

const CIFAR_IMAGE_COUNT = 20; // number of images in public/demo/cifar

export default function CifarDemoModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState<number>(() =>
    Math.floor(Math.random() * CIFAR_IMAGE_COUNT)
  );
  const [prediction, setPrediction] = useState<string>("");
  const [top3, setTop3] = useState<{ class: string; probability: number }[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [serverStarting, setServerStarting] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // On open, pick a random image
  useEffect(() => {
    if (isOpen) {
      setPrediction("");
      setTop3(null);
      setCurrentIndex(Math.floor(Math.random() * CIFAR_IMAGE_COUNT));
    }
  }, [isOpen]);

  const handleNext = () => {
    setPrediction("");
    setTop3(null);
    setCurrentIndex(Math.floor(Math.random() * CIFAR_IMAGE_COUNT));
  };

  // Load image pixels as array for API
  const getImagePixels = async (): Promise<number[]> => {
    return new Promise((resolve, reject) => {
      const img = new window.Image();
      img.crossOrigin = "Anonymous";
      img.src = `/demo/cifar10/${currentIndex}.png`;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject("No context");
        ctx.drawImage(img, 0, 0, 32, 32);
        const imageData = ctx.getImageData(0, 0, 32, 32).data;
        const pixels: number[] = [];
        for (let i = 0; i < imageData.length; i += 4) {
          // R, G, B normalisés entre 0 et 1
          pixels.push(imageData[i] / 255);
          pixels.push(imageData[i + 1] / 255);
          pixels.push(imageData[i + 2] / 255);
        }
        resolve(pixels);
      };
      img.onerror = reject;
    });
  };

  const handlePredict = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    setLoading(true);
    setServerStarting(false);
    setPrediction("Predicting...");
    setTop3(null);

    // Timer to detect server cold start (>5s)
    timerRef.current = setTimeout(() => {
      setServerStarting(true);
    }, 5000);

    try {
      const input = await getImagePixels();
      const res = await fetch(`${API_URL}/cifar10/cnn/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      setPrediction(data.prediction ?? "No prediction");
      setTop3(data.top3 ?? null);
    } catch (error) {
      setPrediction("Prediction error.");
      setTop3(null);
      console.error(error);
    } finally {
      setLoading(false);
      setServerStarting(false);
      if (timerRef.current) clearTimeout(timerRef.current);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black rounded-lg shadow-lg p-6 w-full max-w-md flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">CNN Test on CIFAR-10</h2>
        <p className="text-sm text-gray-500 mb-2">
          Images may look blurry or pixelated because CIFAR-10 images are only 32x32 pixels.<br />
          This is normal and representative of the real dataset used for training.
        </p>
        <img
          src={`/demo/cifar10/${currentIndex}.png`}
          alt={`CIFAR image #${currentIndex}`}
          width={128}
          height={128}
          className="mb-4 border border-gray-300"
          style={{ imageRendering: "pixelated" }}
        />
        <div className="flex gap-2 mb-4">
          <button
            onClick={handlePredict}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            disabled={loading}
          >
            Predict
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
            disabled={loading}
          >
            Next image
          </button>
        </div>
        {loading && (
          <div className="flex flex-col items-center gap-2 my-2">
            <div className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-blue-600" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
              </svg>
              <span className="text-blue-600 text-sm">Predicting...</span>
            </div>
            {serverStarting && (
              <span className="text-orange-400 text-xs mt-2 text-center">
                The server was asleep and is starting up. This may take a few more seconds...
              </span>
            )}
          </div>
        )}
        {prediction && !loading && (
          <div className="mt-2 text-center">
            <strong>Result:</strong> {prediction}
            {top3 && (
              <div className="mt-2">
                <p className="text-base font-medium mb-1">Top 3:</p>
                <ul className="text-sm">
                  {top3.map((item, idx) => (
                    <li key={idx}>
                      <span className="font-mono">• {item.class}</span>
                      <span className="ml-2 text-gray-400">
                        ({(item.probability * 100).toFixed(1)}%)
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        <button
          onClick={() => {
            setPrediction("");
            setTop3(null);
            onClose();
          }}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}