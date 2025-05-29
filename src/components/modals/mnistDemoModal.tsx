'use client';

import React, { useRef, useState } from 'react';

const GRID_SIZE = 28;
const DISPLAY_SIZE = 280; // affichage visuel (CSS)

export default function MnistDemoModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prediction, setPrediction] = useState<number | null>(null);
  const [top3, setTop3] = useState<{ class: number; probability: number }[] | null>(null);

  const [isDrawing, setIsDrawing] = useState(false);

  // Efface le canvas
  const clearCanvas = () => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, GRID_SIZE, GRID_SIZE);
      setPrediction(null);
    }
  };

  // Fonction utilitaire pour obtenir la position (souris ou tactile)
  const getCanvasPos = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(((clientX - rect.left) / rect.width) * GRID_SIZE);
    const y = Math.floor(((clientY - rect.top) / rect.height) * GRID_SIZE);
    return { x, y };
  };

  // Souris
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const { x, y } = getCanvasPos(e.clientX, e.clientY);
    drawPixel(x, y);
  };
  const handleMouseUp = () => setIsDrawing(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const { x, y } = getCanvasPos(e.clientX, e.clientY);
    drawPixel(x, y);
  };

  // Tactile
  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const touch = e.touches[0];
    const { x, y } = getCanvasPos(touch.clientX, touch.clientY);
    drawPixel(x, y);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const touch = e.touches[0];
    const { x, y } = getCanvasPos(touch.clientX, touch.clientY);
    drawPixel(x, y);
  };
  const handleTouchEnd = () => setIsDrawing(false);

  // Fonction pour dessiner un pixel
  const drawPixel = (x: number, y: number) => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'white';
      ctx.fillRect(x - 1, y - 1, 2, 2); // trait plus épais
    }
  };

  // Récupère les données du canvas (0-1 par pixel) avec centrage automatique
  const getCenteredImageData = (): number[] => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return [];
    const imageData = ctx.getImageData(0, 0, GRID_SIZE, GRID_SIZE);
    const pixels = imageData.data;

    // Trouver la bounding box du chiffre
    let minX = GRID_SIZE,
      minY = GRID_SIZE,
      maxX = 0,
      maxY = 0;
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        const i = (y * GRID_SIZE + x) * 4;
        if (pixels[i] > 20) {
          // seuil pour détecter le blanc
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    // Si rien n'est dessiné, retourne l'image telle quelle
    if (minX > maxX || minY > maxY) {
      return Array.from(
        { length: GRID_SIZE * GRID_SIZE },
        (_, i) => pixels[i * 4] / 255
      );
    }

    const boxW = maxX - minX + 1;
    const boxH = maxY - minY + 1;
    const size = Math.max(boxW, boxH);

    // Créer une image temporaire pour la box centrée
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = tempCanvas.height = GRID_SIZE;
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return [];

    // Remplir de noir
    tempCtx.fillStyle = 'black';
    tempCtx.fillRect(0, 0, GRID_SIZE, GRID_SIZE);

    // Calculer le décalage pour centrer
    const dx = Math.floor((GRID_SIZE - size) / 2);
    const dy = Math.floor((GRID_SIZE - size) / 2);

    // Extraire la box et la dessiner centrée et redimensionnée
    const boxImage = ctx.getImageData(minX, minY, boxW, boxH);
    // Redimensionner la box pour qu'elle tienne dans un carré size x size
    const resizeCanvas = document.createElement('canvas');
    resizeCanvas.width = boxW;
    resizeCanvas.height = boxH;
    const resizeCtx = resizeCanvas.getContext('2d');
    if (!resizeCtx) return [];
    resizeCtx.putImageData(boxImage, 0, 0);

    tempCtx.drawImage(
      resizeCanvas,
      0,
      0,
      boxW,
      boxH,
      dx,
      dy,
      size,
      size
    );

    // Récupérer les données centrées
    const centeredData = tempCtx.getImageData(0, 0, GRID_SIZE, GRID_SIZE)
      .data;
    const data: number[] = [];
    for (let i = 0; i < centeredData.length; i += 4) {
      data.push(centeredData[i] / 255);
    }
    return data;
  };

  const handlePredict = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const input = getCenteredImageData();
    const res = await fetch(`${API_URL}/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input }),
    });
    const data = await res.json();
    setPrediction(data.prediction ?? null);
    setTop3(data.top3 ?? null);
  };

  React.useEffect(() => {
    if (isOpen) clearCanvas();
    // eslint-disable-next-line
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray rounded-lg p-6 max-w-md w-full shadow-lg"
      >
        <h2 className="text-xl font-bold mb-4">🎨 Dessine un chiffre (0-9)</h2>
        <p className="text-sm text-gray-400 mb-2">
          ℹ️ Le serveur peut prendre quelques secondes à se lancer s&apos;il était en veille.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <canvas
            ref={canvasRef}
            width={GRID_SIZE}
            height={GRID_SIZE}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              width: DISPLAY_SIZE,
              height: DISPLAY_SIZE,
              imageRendering: 'pixelated',
              background: 'black',
              border: '1px solid #ccc',
              marginBottom: '1rem',
              cursor: 'crosshair',
              display: 'block',
              touchAction: 'none',
            }}
          />
          <div className="flex-1 w-full">
            <div className="flex gap-2 mb-4">
              <button
                onClick={clearCanvas}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Effacer
              </button>
              <button
                onClick={handlePredict}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Prédire
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-auto"
              >
                Fermer
              </button>
            </div>
            {prediction !== null && (
              <div className="mt-2">
                {top3 && (
                  <p className="text-lg font-semibold mb-2">
                    🧠 Prédiction : {prediction}
                    <span className="ml-2 text-gray-400">
                      ({(top3[0]?.probability * 100).toFixed(1)}%)
                    </span>
                  </p>
                )}
                {top3 && (
                  <div>
                    <p className="text-base font-medium mb-1">Top 3 :</p>
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
          </div>
        </div>
        <ul className="w-100 text-xs text-gray-400 mb-4 list-disc list-inside">
          <li>✏️ Écris ton chiffre le plus gros possible dans la zone noire.</li>
          <li>📱 Sur mobile, utilise ton doigt pour un style manuscrit proche de MNIST.</li>
          <li>🖱️ Sur ordinateur, dessine lentement pour épaissir le trait.</li>
          <li>🟩 Évite de coller le chiffre aux bords, centre-le bien.</li>
          <li>🔄 Si le résultat est mauvais, efface et réessaie : le centrage et l’épaisseur du trait sont importants !</li>
        </ul>
      </div>
    </div>
  );
}