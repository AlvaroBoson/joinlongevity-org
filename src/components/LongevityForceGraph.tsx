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
  const [width, setWidth] = useState(800);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fg = fgRef.current as any;
    if (fg) {
      fg.zoomToFit(400, 20); // Zoom to fit with padding
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
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(label, n.x ?? 0, (n.y ?? 0) + n.val + 8); // Position text below the node
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <ForceGraph2D
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={fgRef as any}
        graphData={graphData}
        nodeVal="val"
        nodeCanvasObject={nodeCanvasObject}
        linkColor={(link: object) => {
          const l = link as LinkObject;
          switch (l.type) {
            case 'formal': return 'white';
            case 'social': return '#3B82F6'; // Blue
            case 'ecosystem': return '#64BC6E'; // Green
            default: return 'rgba(255,255,255,0.2)';
          }
        }}
        linkLineDash={(link: object) => {
          const l = link as LinkObject;
          switch (l.type) {
            case 'formal': return []; // Solid
            case 'social': return [5, 5]; // Dashed
            case 'ecosystem': return [2, 3]; // Dotted
            default: return [];
          }
        }}
        linkWidth={1}
        width={width}
        height={600}
        backgroundColor="rgba(26, 31, 46, 0)" // transparent
      />
    </div>
  );
};

export default LongevityForceGraph; 