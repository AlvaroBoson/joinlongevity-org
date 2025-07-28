"use client";

import LongevityForceGraph from './LongevityForceGraph';
import { legendData } from '@/data/longevityMapData';

export default function LongevityMapClient() {
  return (
    <div 
      className="absolute inset-0 w-full h-full"
      style={{
        backgroundColor: '#EBF8FF', // Light blue background
        backgroundImage: 'radial-gradient(#C4D7E2 1px, transparent 1px)',
        backgroundSize: '16px 16px',
      }}
    >
      <LongevityForceGraph />

      {/* Overlay for Legend and Links */}
      <div className="absolute bottom-4 left-4 bg-white/70 p-3 md:p-4 rounded-lg backdrop-blur-sm w-auto max-w-xs shadow-md">
        <div className="flex flex-col items-start space-y-2 md:space-y-3">
          {/* Node Legend */}
          <div>
            <h4 className="text-sm md:text-base font-semibold text-gray-800 mb-1 md:mb-2">Nodes</h4>
            <div className="flex flex-col items-start gap-y-1">
              {legendData.map(({ group, color }) => (
                <div key={group} className="flex items-center space-x-2">
                  <span className="h-2 w-2 md:h-3 md:w-3 rounded-full" style={{ backgroundColor: color }}></span>
                  <span className="text-xs text-gray-600">{group}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Link Legend */}
          <div>
            <h4 className="text-sm md:text-base font-semibold text-gray-800 mb-1 md:mb-2">Connections</h4>
            <div className="flex flex-col items-start gap-y-1">
              <div className="flex items-center space-x-2">
                <svg width="24" height="12" viewBox="0 0 24 12"><line x1="0" y1="6" x2="24" y2="6" stroke="#2B6CB0" strokeWidth="2"/></svg>
                <span className="text-xs text-gray-600">Direct Partnership</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg width="24" height="12" viewBox="0 0 24 12"><line x1="0" y1="6" x2="24" y2="6" stroke="#4A5568" strokeWidth="2"/></svg>
                <span className="text-xs text-gray-600">In Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 