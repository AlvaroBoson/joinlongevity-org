"use client";

import React, { useRef, useEffect } from 'react';

const PARTICLE_COLOR = '#C4D7E2';
const PARTICLE_COUNT = 500;
const PARTICLE_SPEED = 0.05;
const FADE_DURATION = 1;
const MOUSE_RADIUS = 150; // Radius for mouse repulsion effect

class Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  targetX: number;
  targetY: number;
  speed: number;
  angle: number;
  color: string;
  size: number;
  alpha: number;
  
  constructor(x: number, y: number, targetX: number, targetY: number, color: string) {
    this.x = x;
    this.y = y;
    this.originX = x;
    this.originY = y;
    this.targetX = targetX;
    this.targetY = targetY;
    this.speed = Math.random() * PARTICLE_SPEED + 0.1;
    this.angle = Math.random() * 360;
    this.color = color;
    this.size = Math.random() * 2 + 1;
    this.alpha = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  update(state: 'intro' | 'form' | 'hold' | 'disperse', timer: number, mouse: { x: number | null, y: number | null }) {
    if (this.alpha < 1) {
      this.alpha += 1 / (FADE_DURATION * 60);
    }

    // Add mouse repulsion effect
    if (mouse.x !== null && mouse.y !== null) {
      const dxMouse = this.x - mouse.x;
      const dyMouse = this.y - mouse.y;
      const distance = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
      if (distance < MOUSE_RADIUS) {
        const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
        const angle = Math.atan2(dyMouse, dxMouse);
        this.x += Math.cos(angle) * force * 5;
        this.y += Math.sin(angle) * force * 5;
      }
    }

    if (state === 'form' || state === 'disperse') {
        const dx = (state === 'form' ? this.targetX : this.originX) - this.x;
        const dy = (state === 'form' ? this.targetY : this.originY) - this.y;
        const speedMultiplier = state === 'disperse' ? 0.4 : 0.1;
        this.x += dx * this.speed * speedMultiplier;
        this.y += dy * this.speed * speedMultiplier;
    } else if (state === 'hold') {
      // Continue easing toward the target for a seamless transition
      const dx = this.targetX - this.x;
      this.x += dx * this.speed * 0.05; // Gentle ease

      // Add breathing effect on top
      const breathAmplitude = 1.5;
      const breathSpeed = 0.02;
      const offsetX = Math.sin(timer * breathSpeed + this.angle) * breathAmplitude;
      const offsetY = Math.cos(timer * breathSpeed + this.angle) * breathAmplitude;
      this.x += offsetX;
      this.y += offsetY;
    } else { // 'intro' state
      this.x += Math.cos(this.angle) * this.speed * 1.6;
      this.y += Math.sin(this.angle) * this.speed * 1.6;
    }
  }
}

function createParticles(canvas: HTMLCanvasElement) {
  const particles: Particle[] = [];
  const clusterRadius = Math.min(canvas.width, canvas.height) * 0.15;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * clusterRadius;
    const targetX = canvas.width / 2 + Math.cos(angle) * radius;
    const targetY = canvas.height / 2 + Math.sin(angle) * radius;
    
    particles.push(new Particle(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      targetX,
      targetY,
      PARTICLE_COLOR
    ));
  }
  return particles;
}

export default function AnimatedDotsBackground({ isAnimating }: { isAnimating: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef<{ x: number | null, y: number | null }>({ x: null, y: null });
  const animationFrameId = useRef<number | null>(null);
  const particles = useRef<Particle[]>([]);
  const state = useRef({
    currentState: 'intro' as 'intro' | 'form' | 'hold' | 'disperse',
    stateTimer: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const container = canvas.parentElement;
    if (!container) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      state.current.stateTimer++;

      switch(state.current.currentState) {
        case 'intro':
          if(state.current.stateTimer > 120) {
            state.current.currentState = 'form';
            state.current.stateTimer = 0;
          }
          break;
        case 'form':
          if(state.current.stateTimer > 300) {
            state.current.currentState = 'hold';
            state.current.stateTimer = 0;
          }
          break;
        case 'hold':
          if(state.current.stateTimer > 240) {
            state.current.currentState = 'disperse';
            state.current.stateTimer = 0;
          }
          break;
        case 'disperse':
          if(state.current.stateTimer > 150) {
            state.current.currentState = 'intro';
            state.current.stateTimer = 0;
          }
          break;
      }
      
      particles.current.forEach(p => {
        p.update(state.current.currentState, state.current.stateTimer, mouse.current);
        p.draw(ctx);
      });

      if (isAnimating) {
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };

    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        canvas.width = entry.contentRect.width;
        canvas.height = entry.contentRect.height;
        particles.current = createParticles(canvas);
        state.current = { currentState: 'intro', stateTimer: 0 };
      }
    });

    resizeObserver.observe(container);

    if (isAnimating && !animationFrameId.current) {
      animationFrameId.current = requestAnimationFrame(animate);
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = event.clientX - rect.left;
      mouse.current.y = event.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      resizeObserver.unobserve(container);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    };
  }, [isAnimating]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full -z-10"
      style={{ backgroundColor: '#E3EDFA' }}
    />
  );
} 