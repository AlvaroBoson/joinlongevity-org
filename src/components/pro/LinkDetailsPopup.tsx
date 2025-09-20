"use client";

import React from 'react';
import { LinkDetail } from '@/data/linkDetails';

interface LinkDetailsPopupProps {
  linkDetail: LinkDetail;
  position: { x: number; y: number };
  onClose: () => void;
}

const LinkDetailsPopup: React.FC<LinkDetailsPopupProps> = ({ linkDetail, position, onClose }) => {
  // Determine icon based on relationship type
  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'investment':
      case 'donation':
        return (
          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        );
      case 'founder':
      case 'co-founder':
      case 'leader':
        return (
          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'partnership':
      case 'collaboration':
        return (
          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'sponsorship':
        return (
          <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        );
    }
  };

  // Get color based on type
  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'investment':
      case 'donation':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'founder':
      case 'co-founder':
      case 'leader':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'partnership':
      case 'collaboration':
        return 'bg-purple-50 border-purple-200 text-purple-800';
      case 'sponsorship':
        return 'bg-orange-50 border-orange-200 text-orange-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  // Calculate popup position to avoid going off-screen
  const popupWidth = 320;
  const popupHeight = 250; // Increased to account for actual content height
  const margin = 20;
  
  let adjustedX = position.x;
  let adjustedY = position.y;
  
  // Only adjust if window is available (client-side)
  if (typeof window !== 'undefined') {
    // Adjust horizontal position
    if (position.x + popupWidth + margin > window.innerWidth) {
      adjustedX = Math.max(margin, position.x - popupWidth - margin);
    }
    
    // Ensure popup doesn't go off left edge
    if (adjustedX < margin) {
      adjustedX = margin;
    }
    
    // Adjust vertical position
    if (position.y + popupHeight + margin > window.innerHeight) {
      adjustedY = Math.max(margin, position.y - popupHeight - margin);
    }
    
    // Ensure popup doesn't go off top edge
    if (adjustedY < margin) {
      adjustedY = margin;
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
      />
      
      {/* Popup */}
      <div
        className="fixed z-50 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 max-w-sm"
        style={{
          left: adjustedX,
          top: adjustedY,
          width: popupWidth
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-3">
          <div className="flex items-center space-x-2 mb-2">
            {getTypeIcon(linkDetail.type)}
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(linkDetail.type)}`}>
              {linkDetail.type}
            </span>
          </div>
          
          {/* Connection path */}
          <div className="text-sm font-medium text-gray-800">
            <span className="text-blue-600">{linkDetail.source}</span>
            {linkDetail.direction === 'bidirectional' ? (
              <span className="mx-2 text-gray-400">↔</span>
            ) : linkDetail.direction === 'source-to-target' ? (
              <span className="mx-2 text-gray-400">→</span>
            ) : (
              <span className="mx-2 text-gray-400">←</span>
            )}
            <span className="text-blue-600">{linkDetail.target}</span>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2">
          {/* Date and Amount */}
          <div className="flex justify-between text-sm">
            {linkDetail.date && (
              <span className="text-gray-500">
                <svg className="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {linkDetail.date}
              </span>
            )}
            {linkDetail.amount && (
              <span className="text-green-600 font-medium">
                {linkDetail.amount}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700 leading-relaxed">
            {linkDetail.description}
          </p>
        </div>

        {/* Pro badge */}
        <div className="mt-3 pt-2 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">Connection Details</span>
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs px-2 py-1 rounded-full">
              PRO
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkDetailsPopup;
