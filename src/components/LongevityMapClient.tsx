"use client";

import NetworkVisualization from './shared/NetworkVisualization';

export default function LongevityMapClient() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <NetworkVisualization isPro={false} />
    </div>
  );
} 