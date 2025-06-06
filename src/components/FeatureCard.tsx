"use client"; // Ensure this is at the top

import React, { useRef } from 'react';
// Link component might not be directly used here if we use router.push, but keep for context if FeatureCard itself could be a Link target elsewhere
import Image from "next/image";
import { useRouter } from 'next/navigation'; // Import useRouter

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  href?: string;
  isClickable?: boolean;
}

export default function FeatureCard({ 
  title, 
  description, 
  icon, 
  href = '#',
  isClickable = true 
}: FeatureCardProps) {
  const router = useRouter(); // Get router instance
  const linkRef = useRef<HTMLAnchorElement>(null);
  // Touch tracking for tap vs scroll
  const touchStartY = useRef<number | null>(null);
  const touchStartTime = useRef<number | null>(null);

  const navigate = () => {
    if (href && href !== '#') {
      router.push(href);
    }
  };

  // Handler to delay navigation for tap/click feedback
  const handleClick = (e: React.MouseEvent) => {
    if (e.button === 0) {
      e.preventDefault();
      const el = linkRef.current;
      if (el) {
        el.classList.add('force-hover');
        requestAnimationFrame(() => { // Ensure class is painted
          setTimeout(() => {
            el.classList.remove('force-hover');
            navigate(); 
          }, 100); // Slightly reduced timeout for snappier feel if preferred
        });
      } else {
        navigate(); 
      }
    }
  };

  // Touch handlers for tap vs scroll
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartY.current = e.touches[0].clientY;
      touchStartTime.current = Date.now();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null || touchStartTime.current === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const touchEndTime = Date.now();
    const deltaY = Math.abs(touchEndY - touchStartY.current);
    const deltaTime = touchEndTime - touchStartTime.current;

    if (deltaY < 10 && deltaTime < 500) { // Tap
      e.preventDefault();
      const el = linkRef.current;
      if (el) {
        el.classList.add('force-hover');
        requestAnimationFrame(() => { // Ensure class is painted
          setTimeout(() => {
            el.classList.remove('force-hover');
            navigate();
          }, 100); // Slightly reduced timeout for snappier feel if preferred
        });
      } else {
        navigate(); 
      }
    }
    touchStartY.current = null;
    touchStartTime.current = null;
  };

  const CardContent = () => (
    <div className="h-full flex flex-col items-center text-center p-8 rounded-xl bg-[#1E2A38]/50 backdrop-blur-sm border border-[#64BC6E]/10 transition-all duration-300
      group-hover:bg-[#64BC6E]/10 group-hover:border-[#64BC6E]/30 group-hover:shadow-xl
      force-hover:bg-[#64BC6E]/10 force-hover:border-[#64BC6E]/30 force-hover:shadow-xl
      active:bg-[#64BC6E]/10 active:border-[#64BC6E]/30 active:shadow-xl">
      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 force-hover:scale-110 active:scale-110">
        <div className="w-16 h-16 rounded-full bg-[#64BC6E]/10 flex items-center justify-center">
          <Image src={icon} alt={title} width={40} height={40} className="w-10 h-10" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white transition-colors duration-300
        group-hover:text-[#64BC6E] force-hover:text-[#64BC6E] active:text-[#64BC6E]">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed transition-colors duration-300">
        {description}
      </p>
    </div>
  );

  if (!isClickable || !href || href === '#') {
    return (
      <div className="group">
        <CardContent />
      </div>
    );
  }

  return (
    <a
      href={href}
      ref={linkRef}
      className="group focus:outline-none focus:ring-2 focus:ring-[#64BC6E] focus:ring-offset-2 focus:ring-offset-[#1E2A38] rounded-xl cursor-pointer"
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <CardContent />
    </a>
  );
} 