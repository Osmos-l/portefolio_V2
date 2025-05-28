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
      ctx.fillRect(x, y, 1, 1);
    }
  };

  // Récupère les données du canvas (0-1 par pixel)
  const getImageData = (): number[] => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return [];
    const imageData = ctx.getImageData(0, 0, GRID_SIZE, GRID_SIZE);
    const data: number[] = [];
    for (let i = 0; i < imageData.data.length; i += 4) {
      // Normalise le canal rouge (le dessin est blanc sur noir)
      data.push(imageData.data[i] / 255);
    }
    return data;
  };

  const handlePredict = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const input = getImageData();
    const res = await fetch(`${API_URL}/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input }),
    });
    const data = await res.json();
    setPrediction(data.prediction ?? null);
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
            touchAction: 'none', // important pour éviter le scroll sur mobile
          }}
        />
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
          <p className="text-lg font-semibold">🧠 Prédiction : {prediction}</p>
        )}
      </div>
    </div>
  );
}