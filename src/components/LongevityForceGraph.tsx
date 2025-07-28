"use client";

import React, { useCallback, useRef, useEffect, useState } from 'react';
import { graphData } from '@/data/longevityMapData';
import dynamic from 'next/dynamic';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
  ssr: false,
});

interface NodeObject {
  id: string;
  group: string;
  val: number;
  color: string;
  x?: number;
  y?: number;
}

interface LinkObject {
  source: string | object;
  target: string | object;
  type: string;
}

const LongevityForceGraph = () => {
  const fgRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      const entry = entries[0];
      if (entry) {
        setWidth(entry.contentRect.width);
        setHeight(entry.contentRect.height);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const currentContainer = containerRef.current;

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fg = fgRef.current as any;
    if (fg) {
      fg.zoomToFit(400, 20); // Zoom to fit with padding
      fg.d3Force('charge').strength(-300);
      fg.d3Force('link').distance(100);
    }
  }, []);
  
  const nodeCanvasObject = useCallback((node: object, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const n = node as NodeObject;
    const label = n.id;
    const fontSize = 12 / globalScale; // Adjust font size based on zoom
    ctx.font = `${fontSize}px Sans-Serif`;
    
    // Draw node circle
    ctx.fillStyle = n.color;
    ctx.beginPath();
    ctx.arc(n.x ?? 0, n.y ?? 0, n.val, 0, 2 * Math.PI, false);
    ctx.fill();

    // Draw text
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#1A202C'; // Dark text for light background
    ctx.fillText(label, n.x ?? 0, (n.y ?? 0) + n.val + 8); // Position text below the node
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <ForceGraph2D
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={fgRef as any}
        graphData={graphData}
        nodeVal="val"
        nodeCanvasObject={nodeCanvasObject}
        linkColor={(link: object) => {
          const l = link as LinkObject;
          switch (l.type) {
            case 'formal': return '#2B6CB0'; // Dark Blue
            case 'indirect': return '#4A5568'; // Dark Gray
            default: return 'rgba(0,0,0,0.2)';
          }
        }}
        linkLineDash={() => []} // All lines are solid
        linkWidth={1}
        width={width}
        height={height}
        backgroundColor="rgba(26, 31, 46, 0)" // transparent
      />
    </div>
  );
};

export default LongevityForceGraph; 