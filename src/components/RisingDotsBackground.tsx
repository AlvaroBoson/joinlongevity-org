"use client";

import { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export default function RisingDotsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Create dots
    const dots: Dot[] = [];
    const dotCount = 50;
    // const dotColor = '#64BC6E'; // Commented out as it is unused

    // Initialize dots
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 20, // Start slightly below the canvas
        size: Math.random() * 2 + 0.5, // Changed from 3+1 to 2+0.5 (now 0.5-2.5px instead of 1-4px)
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.4 + 0.3 // Changed from 0.5+0.5 to 0.4+0.3 (now 0.3-0.7 instead of 0.5-1.0)
      });
    }

    // Animation loop
    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw dots
      dots.forEach(dot => {
        // Move dot upward
        dot.y -= dot.speed;

        // Calculate opacity based on vertical position
        // The higher the dot goes, the more transparent it becomes
        // Added a multiplier of 1.5 to make them fade out faster
        const heightRatio = (1 - (canvas.height - dot.y) / canvas.height) * 1.5;
        const currentOpacity = Math.max(0, heightRatio * dot.opacity);

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 188, 110, ${currentOpacity})`;
        ctx.fill();

        // Reset dot if it goes off screen
        if (dot.y < -10) {
          dot.y = canvas.height + 10;
          dot.x = Math.random() * canvas.width;
          dot.opacity = Math.random() * 0.4 + 0.3; // Match the initial opacity range
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ opacity: 0.5 }}
    />
  );
} 