"use client";

import { useMotionValueEvent, MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 192; // Number of images fetched from list_dir

export default function ScrollyCanvas({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    let loadCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Format number to 3 digits (e.g. 000, 001, ..., 191)
      const num = i.toString().padStart(3, '0');
      img.src = `/sequence/frame_${num}_delay-0.041s.png`;
      
      img.onload = () => {
        loadCount++;
        if (loadCount === FRAME_COUNT) {
          setLoaded(true);
        }
      };
      
      img.onerror = () => {
        // Fallback for missing frames so it doesn't break
        loadCount++;
        if (loadCount === FRAME_COUNT) {
          setLoaded(true);
        }
      };

      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = (frameIndex: number) => {
    if (!loaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[frameIndex];
    // If the image failed to load or isn't ready, skip drawing
    if (!img || !img.complete || img.naturalHeight === 0) return;

    // object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    // Use image smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    // Resize handler
    const handleResize = () => {
      if (canvasRef.current) {
        // Using window inner width and height to cover exactly the screen
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Redraw current frame
        const p = scrollProgress.get();
        const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(p * FRAME_COUNT));
        drawFrame(frameIndex);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  useMotionValueEvent(scrollProgress, "change", (latest) => {
    const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(latest * FRAME_COUNT));
    if (frameIndex >= 0) {
      drawFrame(frameIndex);
    }
  });

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block z-0"
      />
      {!loaded && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#121212]">
          <div className="text-white text-sm tracking-widest uppercase animate-pulse">Loading Experience...</div>
        </div>
      )}
    </>
  );
}
