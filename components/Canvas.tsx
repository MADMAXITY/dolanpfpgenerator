'use client';

import { useEffect, useRef } from 'react';
import { useGeneratorStore } from '@/lib/store';
import { HATS, BODIES, ACCESSORIES, BACKGROUNDS, CANVAS_SIZE } from '@/lib/constants';

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { selectedHat, selectedBody, selectedAccessory, selectedBackground } = useGeneratorStore();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const background = BACKGROUNDS.find((bg) => bg.id === selectedBackground);
    const body = BODIES.find((b) => b.id === selectedBody);
    const accessory = selectedAccessory ? ACCESSORIES.find((a) => a.id === selectedAccessory) : null;
    const hat = selectedHat ? HATS.find((h) => h.id === selectedHat) : null;

    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    if (background) {
      if (background.type === 'solid') {
        ctx.fillStyle = background.value;
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      } else {
        const gradient = ctx.createLinearGradient(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        const colors = background.value.match(/#[0-9A-Fa-f]{6}/g) || [];
        const percents = background.value.match(/\d+%/g) || [];
        
        colors.forEach((color, i) => {
          const percent = percents[i] ? parseFloat(percents[i]) / 100 : i / (colors.length - 1);
          gradient.addColorStop(percent, color);
        });
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      }
    }

    const loadImage = (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    };

    const drawImages = async () => {
      try {
        if (body) {
          const bodyImg = await loadImage(body.path);
          ctx.drawImage(bodyImg, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
        }

        if (accessory) {
          const accessoryImg = await loadImage(accessory.path);
          ctx.drawImage(accessoryImg, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
        }

        if (hat) {
          const hatImg = await loadImage(hat.path);
          ctx.drawImage(hatImg, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
        }
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    drawImages();
  }, [selectedHat, selectedBody, selectedAccessory, selectedBackground]);

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_SIZE}
      height={CANVAS_SIZE}
      className="w-full h-full"
      id="dolan-canvas"
    />
  );
}
