"use client";

import React from 'react';
import { Node } from '../shared/types';
import { nodeDetails } from '@/data/nodeDetails';

interface AdvancedSidebarProps {
  node: Node;
  onClose: () => void;
}

const AdvancedSidebar: React.FC<AdvancedSidebarProps> = ({ node, onClose }) => {
  // Mock data for demo purposes - in real app this would come from API
  const mockFundingData = {
    'Hevolution': {
      totalFunding: '$1B+',
      lastRound: 'Government Initiative',
      investors: ['Saudi Arabia Public Investment Fund'],
      founded: '2021',
      stage: 'Operating'
    },
    'Altos Labs': {
      totalFunding: '$3B+',
      lastRound: 'Series A',
      investors: ['Jeff Bezos', 'Yuri Milner', 'Greylock Partners'],
      founded: '2021',
      stage: 'Research'
    },
    'VitaDAO': {
      totalFunding: '$4.1M',
      lastRound: 'Token Sale',
      investors: ['Community', 'Pfizer Ventures', 'Shine Capital'],
      founded: '2021',
      stage: 'DAO'
    },
    'Longevity Biotech Fellowship': {
      totalFunding: 'Community Funded',
      lastRound: 'Donations',
      investors: ['Aubrey de Grey', 'Community'],
      founded: '2022',
      stage: 'Fellowship'
    }
  };

  const mockConnectionData = {
    totalConnections: Math.floor(Math.random() * 20) + 5,
    strongConnections: Math.floor(Math.random() * 8) + 2,
    recentActivity: '2 new partnerships this month',
    influence: Math.floor(Math.random() * 100) + 50
  };

  const fundingInfo = mockFundingData[node.id as keyof typeof mockFundingData];

  return (
    <div className="sidebar-container absolute top-0 right-0 w-96 h-full bg-white shadow-2xl border-l border-gray-200 z-50 overflow-y-auto">
      <div className="p-6">
        {/* Pro Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            PRO
          </span>
        </div>
        
        {/* Node info */}
        <div className="mt-12 relative">
          {/* Close button - positioned relative to the title */}
          <button
            onClick={onClose}
            className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 text-xl font-bold z-10"
          >
            ×
          </button>
          
          <h2 className="text-xl font-bold text-gray-800 mb-3 pr-8">
            {nodeDetails[node.id]?.fullName || node.id}
          </h2>
          
          {/* Type tag */}
          <span 
            className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white mb-4"
            style={{ backgroundColor: node.color }}
          >
            {nodeDetails[node.id]?.type || node.group}
          </span>
          
          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {nodeDetails[node.id]?.description || 'No description available yet.'}
          </p>
          
          {/* Funding Information */}
          {fundingInfo && (
            <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <h3 className="text-sm font-semibold text-green-800 mb-3 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                Funding Details
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Funding:</span>
                  <span className="font-semibold text-green-700">{fundingInfo.totalFunding}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Round:</span>
                  <span className="font-medium">{fundingInfo.lastRound}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Founded:</span>
                  <span className="font-medium">{fundingInfo.founded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Stage:</span>
                  <span className="font-medium">{fundingInfo.stage}</span>
                </div>
                <div className="mt-3">
                  <span className="text-gray-600 text-xs">Key Investors:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {fundingInfo.investors.map((investor, idx) => (
                      <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        {investor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Connection Analytics */}
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
            <h3 className="text-sm font-semibold text-blue-800 mb-3 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Network Analytics
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="text-center p-2 bg-white rounded border">
                <div className="text-lg font-bold text-blue-600">{mockConnectionData.totalConnections}</div>
                <div className="text-xs text-gray-600">Total Connections</div>
              </div>
              <div className="text-center p-2 bg-white rounded border">
                <div className="text-lg font-bold text-indigo-600">{mockConnectionData.strongConnections}</div>
                <div className="text-xs text-gray-600">Strong Partners</div>
              </div>
              <div className="text-center p-2 bg-white rounded border">
                <div className="text-lg font-bold text-purple-600">{mockConnectionData.influence}%</div>
                <div className="text-xs text-gray-600">Influence Score</div>
              </div>
              <div className="text-center p-2 bg-white rounded border">
                <div className="text-xs font-medium text-green-600">Active</div>
                <div className="text-xs text-gray-600">Status</div>
              </div>
            </div>
            <div className="mt-3 p-2 bg-white rounded border">
              <div className="text-xs text-gray-600">Recent Activity:</div>
              <div className="text-sm font-medium">{mockConnectionData.recentActivity}</div>
            </div>
          </div>
          
          {/* Website */}
          {nodeDetails[node.id]?.website && (
            <a
              href={nodeDetails[node.id].website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-4"
            >
              Visit Website
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          
          {/* Export Options */}
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Export Data</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded border">
                Download PNG
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded border">
                Export JSON
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSidebar;
