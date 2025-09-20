"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { graphData, legendData } from '@/data/longevityMapData';
import { nodeDetails } from '@/data/nodeDetails';
import { Node } from './types';
import AdvancedSidebar from '../pro/AdvancedSidebar';
import LinkDetailsPopup from '../pro/LinkDetailsPopup';
import { LinkDetail, getLinkDetail } from '@/data/linkDetails';

interface NetworkVisualizationProps {
  isPro?: boolean;
}

const NetworkVisualization: React.FC<NetworkVisualizationProps> = ({ isPro = false }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 2000, height: 1600 });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [positionedNodes, setPositionedNodes] = useState<Node[]>([]);
  const [lastPinchDistance, setLastPinchDistance] = useState(0);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [isLegendExpanded, setIsLegendExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Node[]>([]);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [selectedSearchIndex, setSelectedSearchIndex] = useState(-1);
  const [connectedNodes, setConnectedNodes] = useState<Set<string>>(new Set());
  
  // Mobile-specific state
  const [mobileSelectedNode, setMobileSelectedNode] = useState<Node | null>(null);
  const [showMobileInfoCircle, setShowMobileInfoCircle] = useState(false);
  const [shouldShowSidebar, setShouldShowSidebar] = useState(false);
  
  // Pro-specific state
  const [selectedLink, setSelectedLink] = useState<LinkDetail | null>(null);
  const [linkPopupPosition, setLinkPopupPosition] = useState({ x: 0, y: 0 });

  // Define which nodes should always show their labels (big names)
  const alwaysShowLabels = new Set([
    // Conferences
    'ARDD 2025',
    'Longevity Summit Dublin',
    'RAAD Festival',
    'TransVision',
    
    // Key Organizations
    'VitaDAO',
    'XPRIZE Healthspan',
    'Hevolution',
    'LEV Foundation',
    
    // Communities
    'Longevity Biotech Fellowship',
    'Vitalism',
    
    // Key People
    'Aubrey de Grey',
    'David Sinclair',
    'Peter Diamandis'
  ]);

  // Assign nodes to clusters based on major hubs
  const assignClusters = (): Node[] => {
    const nodes = [...graphData.nodes] as Node[];
    const links = graphData.links;

    // Define cluster centers (hubs) based on connection strength
    const clusterCenters = {
      'ARDD 2025': { id: 'ARDD 2025', priority: 1, size: 'large' },
      'Longevity Biotech Fellowship': { id: 'Longevity Biotech Fellowship', priority: 2, size: 'medium' },
      'Longevity Summit Dublin': { id: 'Longevity Summit Dublin', priority: 3, size: 'medium' },
      'TransVision': { id: 'TransVision', priority: 4, size: 'medium' },
      'Vitalism': { id: 'Vitalism', priority: 5, size: 'medium' },
      'RAAD Festival': { id: 'RAAD Festival', priority: 6, size: 'small' }
    };

    // Assign cluster membership to each node
    nodes.forEach(node => {
      // First, check if it's a cluster center
      if (clusterCenters[node.id as keyof typeof clusterCenters]) {
        node.cluster = node.id;
        node.isClusterCenter = true;
        return;
      }

      // Find which cluster this node belongs to based on connections
      let bestCluster = null;
      let bestPriority = 999;
      let connectionCount = 0;

      Object.keys(clusterCenters).forEach(centerName => {
        const connections = links.filter(link => {
          const sourceId = link.source;
          const targetId = link.target;
          return (sourceId === node.id && targetId === centerName) || 
                 (targetId === node.id && sourceId === centerName);
        });

        if (connections.length > 0) {
          const center = clusterCenters[centerName as keyof typeof clusterCenters];
          if (center.priority < bestPriority || 
              (center.priority === bestPriority && connections.length > connectionCount)) {
            bestCluster = centerName;
            bestPriority = center.priority;
            connectionCount = connections.length;
          }
        }
      });

      // Special handling for major independent nodes
      if (node.id === 'Hevolution' || node.id === 'Aubrey de Grey' || node.id === 'LEV Foundation') {
        node.cluster = 'Independent';
        node.isIndependent = true;
      } else {
        // Assign to best cluster, or to ARDD as default for unconnected nodes
        node.cluster = bestCluster || 'ARDD 2025';
      }
    });

    return nodes;
  };

  // Calculate positions in cluster-based layout - ONCE only
  const calculatePositions = useCallback((centerX: number, centerY: number): Node[] => {
    const clusteredNodes = assignClusters();
    
    // Define cluster center positions with increased spacing
    const clusterPositions = {
      'ARDD 2025': { x: centerX, y: centerY }, // Main hub at center
      'Longevity Biotech Fellowship': { x: centerX - 400, y: centerY - 300 }, // Increased distance from ARDD
      'Longevity Summit Dublin': { x: centerX - 200, y: centerY - 500 }, // Increased distance, positioned above
      'TransVision': { x: centerX + 600, y: centerY + 600 }, // Much further distance
      'Vitalism': { x: centerX - 600, y: centerY - 100 }, // Closer to LBF, similar distance as Dublin
      'RAAD Festival': { x: centerX + 800, y: centerY - 800 } // Very far from main cluster
    };
    
    return clusteredNodes.map((node: Node) => {
      // Handle independent major nodes with increased spacing
      if (node.isIndependent) {
        const positions = {
          'Hevolution': { x: centerX + 500, y: centerY - 200 },
          'Aubrey de Grey': { x: centerX - 500, y: centerY + 200 },
          'LEV Foundation': { x: centerX - 350, y: centerY + 300 } // Close to Aubrey de Grey
        };
        const pos = positions[node.id as keyof typeof positions];
        return { ...node, x: pos.x, y: pos.y };
      }
      
      const clusterCenter = clusterPositions[node.cluster as keyof typeof clusterPositions];
      
      if (node.isClusterCenter) {
        // Cluster centers at their designated positions
        return { 
          ...node, 
          x: clusterCenter.x, 
          y: clusterCenter.y,
          val: node.cluster === 'ARDD 2025' ? 12 : 8 // Larger for ARDD
        };
      } else {
        // Check if node has multiple connections to different cluster centers
        const nodeConnections = graphData.links.filter(link => {
          const sourceId = link.source;
          const targetId = link.target;
          return sourceId === node.id || targetId === node.id;
        });
        
        // Find connected cluster centers
        const connectedCenters = nodeConnections
          .map(link => {
            const sourceId = link.source;
            const targetId = link.target;
            const otherId = sourceId === node.id ? targetId : sourceId;
            return Object.keys(clusterPositions).includes(otherId) ? otherId : null;
          })
          .filter(Boolean);
        
        // If connected to multiple cluster centers, position between them
        if (connectedCenters.length > 1) {
          const centerPositions = connectedCenters.map(centerId => 
            clusterPositions[centerId as keyof typeof clusterPositions]
          );
          
          // Calculate weighted average position
          const avgX = centerPositions.reduce((sum, pos) => sum + pos.x, 0) / centerPositions.length;
          const avgY = centerPositions.reduce((sum, pos) => sum + pos.y, 0) / centerPositions.length;
          
          // Multi-connected nodes positioned closer to cluster centers
          const offsetX = (Math.random() - 0.5) * 80;
          const offsetY = (Math.random() - 0.5) * 80;
          
          return {
            ...node,
            x: avgX + offsetX,
            y: avgY + offsetY
          };
        }
        
        // Default: arrange in circle around cluster center
        const clusterNodes = clusteredNodes.filter((n: Node) => n.cluster === node.cluster && !n.isClusterCenter && !n.isIndependent);
        const nodeIndex = clusterNodes.indexOf(node);
        const totalInCluster = clusterNodes.length;
        
        if (totalInCluster === 0) return { ...node, x: clusterCenter.x, y: clusterCenter.y };
        
        // Special handling for people nodes - place them further away from ARDD 2025
        const isPerson = node.group === 'Person';
        const isArddCluster = node.cluster === 'ARDD 2025';
        
        // Arrange in circle around cluster center - increased radius for people nodes in ARDD cluster
        let radius = 60 + (nodeIndex % 3) * 50; // Base radius
        if (isPerson && isArddCluster) {
          radius = 150 + (nodeIndex % 3) * 70; // Much larger radius for people in ARDD cluster
        } else if (isPerson) {
          radius = 80 + (nodeIndex % 3) * 60; // Slightly larger radius for people in other clusters
        }
        
        const angle = (nodeIndex / totalInCluster) * 2 * Math.PI;
        
        return {
          ...node,
          x: clusterCenter.x + Math.cos(angle) * radius,
          y: clusterCenter.y + Math.sin(angle) * radius
        };
      }
    });
  }, []);

  // Initialize positions only once when dimensions change
  useEffect(() => {
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    setPositionedNodes(calculatePositions(centerX, centerY));
  }, [dimensions.width, dimensions.height, calculatePositions]);

  // Find node by ID
  const findNode = (id: string) => positionedNodes.find(n => n.id === id);

  // Find all nodes connected to a given node
  const findConnectedNodes = (nodeId: string): Set<string> => {
    const connected = new Set<string>();
    
    graphData.links.forEach(link => {
      const sourceId = link.source;
      const targetId = link.target;
      
      if (sourceId === nodeId) {
        connected.add(targetId);
      } else if (targetId === nodeId) {
        connected.add(sourceId);
      }
    });
    
    return connected;
  };

  // Update connected nodes when a node is selected
  const updateSelectedNode = useCallback((node: Node | null, showSidebar: boolean = true) => {
    setSelectedNode(node);
    setShouldShowSidebar(showSidebar);
    if (node) {
      const connected = findConnectedNodes(node.id);
      setConnectedNodes(connected);
    } else {
      setConnectedNodes(new Set());
    }
  }, []);

  // Search functionality
  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const results = positionedNodes.filter(node => 
      node.id.toLowerCase().includes(lowercaseQuery)
    ).slice(0, 8); // Limit to 8 results for better UX

    setSearchResults(results);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSelectedSearchIndex(-1);
    performSearch(query);
  };

  // Handle search result selection
  const handleSearchSelect = (node: Node) => {
    // Focus and zoom to the selected node
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    
    setTransform({
      x: centerX - (node.x || 0) * 1.5,
      y: centerY - (node.y || 0) * 1.5,
      scale: 1.5
    });
    
    // Highlight the node temporarily
    setHoveredNode(node.id);
    setTimeout(() => setHoveredNode(null), 3000);
    
    if (isMobile()) {
      // Mobile: Set up for mobile interaction flow (highlight + show arrow)
      setMobileSelectedNode(node);
      updateSelectedNode(node, false); // Highlight network but don't show sidebar
      setShowMobileInfoCircle(true); // Show arrow button
    } else {
      // Desktop: Open the sidebar for this node and highlight connections
      updateSelectedNode(node);
    }
    
    // Clear search
    setSearchQuery('');
    setSearchResults([]);
    setIsSearchExpanded(false);
  };

  // Pro feature: Handle link click
  const handleLinkClick = (source: string, target: string, event: React.MouseEvent) => {
    if (!isPro) return;
    
    event.stopPropagation();
    const linkDetail = getLinkDetail(source, target);
    if (linkDetail) {
      setSelectedLink(linkDetail);
      setLinkPopupPosition({ x: event.clientX, y: event.clientY });
    }
  };

  // Handle keyboard navigation in search
  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (searchResults.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedSearchIndex(prev => 
          prev < searchResults.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedSearchIndex(prev => 
          prev > 0 ? prev - 1 : searchResults.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedSearchIndex >= 0) {
          handleSearchSelect(searchResults[selectedSearchIndex]);
        } else if (searchResults.length > 0) {
          handleSearchSelect(searchResults[0]);
        }
        break;
      case 'Escape':
        setSearchQuery('');
        setSearchResults([]);
        setIsSearchExpanded(false);
        break;
    }
  };

  // Detect if user is on mobile
  const isMobile = () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768 && 'ontouchstart' in window;
  };

  // Handle node click with improved mobile interaction
  const handleNodeClick = (node: Node, event: React.MouseEvent | React.TouchEvent) => {
    // Prevent default behavior on touch devices
    if ('touches' in event || event.type === 'touchend') {
      event.preventDefault();
    }
    
    if (isMobile()) {
      if (!mobileSelectedNode) {
        // First tap - show name only
        setMobileSelectedNode(node);
        setHoveredNode(node.id);
        setShowMobileInfoCircle(false);
       } else if (mobileSelectedNode.id === node.id) {
         // Second tap on same node - highlight connections and show arrow button
         updateSelectedNode(node, false); // Highlight network but don't show sidebar
         setShowMobileInfoCircle(true);
      } else {
        // Tap on different node - reset to first tap behavior
        setMobileSelectedNode(node);
        setHoveredNode(node.id);
        setShowMobileInfoCircle(false); // First tap on new node shows only name
        // Clear previous selection
        updateSelectedNode(null);
        setConnectedNodes(new Set());
      }
    } else {
      // Desktop - single click opens sidebar
      updateSelectedNode(node);
    }
  };

  // Handle mobile info circle click
  const handleMobileInfoCircleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (mobileSelectedNode) {
      updateSelectedNode(mobileSelectedNode, true); // Show sidebar
      setShowMobileInfoCircle(false);
    }
  };

  // Handle click outside to clear selection
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Check if click is outside sidebar and info circle
      const sidebar = document.querySelector('.sidebar-container');
      const infoCircle = document.querySelector('.mobile-info-circle');
      
      const isOutsideSidebar = !sidebar || !sidebar.contains(target);
      const isOutsideInfoCircle = !infoCircle || !infoCircle.contains(target);
      
      if (isOutsideSidebar && isOutsideInfoCircle) {
        // Clear all selections on outside click
        if (selectedNode || mobileSelectedNode) {
          updateSelectedNode(null);
          setMobileSelectedNode(null);
          setHoveredNode(null);
          setShowMobileInfoCircle(false);
          setShouldShowSidebar(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedNode, mobileSelectedNode, updateSelectedNode]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (svgRef.current?.parentElement) {
        const rect = svgRef.current.parentElement.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse and touch event handlers for pan and zoom
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - transform.x, y: e.clientY - transform.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setTransform(prev => ({
      ...prev,
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 1) {
      setIsDragging(true);
      const touch = e.touches[0];
      setDragStart({ x: touch.clientX - transform.x, y: touch.clientY - transform.y });
    } else if (e.touches.length === 2) {
      // Start pinch
      setIsDragging(false);
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) + 
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      
      setLastPinchDistance(distance);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 1 && isDragging) {
      const touch = e.touches[0];
      setTransform(prev => ({
        ...prev,
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      }));
    } else if (e.touches.length === 2) {
      // Handle pinch zoom toward current touch center
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) + 
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      
      if (lastPinchDistance > 0 && svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        
        // Get current pinch center (between the two fingers)
        const currentCenterX = (touch1.clientX + touch2.clientX) / 2 - rect.left;
        const currentCenterY = (touch1.clientY + touch2.clientY) / 2 - rect.top;
        
        const delta = distance / lastPinchDistance;
        const newScale = Math.min(Math.max(transform.scale * delta, 0.1), 3);
        
        // Calculate the point in the transformed coordinate system
        const pointX = (currentCenterX - transform.x) / transform.scale;
        const pointY = (currentCenterY - transform.y) / transform.scale;
        
        // Calculate new transform to keep the point under the pinch center
        const newX = currentCenterX - pointX * newScale;
        const newY = currentCenterY - pointY * newScale;
        
        setTransform({
          x: newX,
          y: newY,
          scale: newScale
        });
      }
      setLastPinchDistance(distance);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setDragStart({ x: 0, y: 0 });
    setLastPinchDistance(0);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    
    if (!svgRef.current) return;
    
    const rect = svgRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.min(Math.max(transform.scale * delta, 0.1), 3);
    
    // Calculate the point in the transformed coordinate system
    const pointX = (mouseX - transform.x) / transform.scale;
    const pointY = (mouseY - transform.y) / transform.scale;
    
    // Calculate new transform to keep the point under the cursor
    const newX = mouseX - pointX * newScale;
    const newY = mouseY - pointY * newScale;
    
    setTransform({
      x: newX,
      y: newY,
      scale: newScale
    });
  };

  return (
    <div className="w-full h-full bg-white overflow-hidden relative">
      {/* Search Bar */}
      <div className={`absolute left-4 z-40 ${isPro ? 'top-20' : 'top-4'}`}>
        {/* Mobile: Collapsible Search */}
        <div className="md:hidden">
          {!isSearchExpanded ? (
            // Collapsed state - just a search icon
            <button
              onClick={() => setIsSearchExpanded(true)}
              className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 p-3 hover:bg-white transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          ) : (
            // Expanded state - full search bar
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-3 w-80 max-w-[calc(100vw-2rem)]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search organizations, people, events..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onKeyDown={handleSearchKeyDown}
                  className="w-full pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  autoFocus
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSearchResults([]);
                    setIsSearchExpanded(false);
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Search Results Dropdown */}
              {searchResults.length > 0 && (
                <div className="mt-2 bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-y-auto">
                  {searchResults.map((node, index) => (
                    <button
                      key={node.id}
                      onClick={() => handleSearchSelect(node)}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2 ${
                        index === selectedSearchIndex ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: node.color }}
                      />
                      <span className="truncate">{node.id}</span>
                      <span className="text-xs text-gray-500 ml-auto">{node.group}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Desktop: Always visible search */}
        <div className="hidden md:block bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-3 w-80">
          <div className="relative">
            <input
              type="text"
              placeholder="Search organizations, people, events..."
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSearchResults([]);
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          
          {/* Search Results Dropdown */}
          {searchResults.length > 0 && (
            <div className="mt-2 bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-y-auto">
              {searchResults.map((node, index) => (
                <button
                  key={node.id}
                  onClick={() => handleSearchSelect(node)}
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2 ${
                    index === selectedSearchIndex ? 'bg-blue-50' : ''
                  }`}
                >
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: node.color }}
                  />
                  <span className="truncate">{node.id}</span>
                  <span className="text-xs text-gray-500 ml-auto">{node.group}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Sidebar - Conditional rendering for Pro vs Free */}
      {selectedNode && shouldShowSidebar && (
        isPro ? (
          <AdvancedSidebar 
            node={selectedNode}
            onClose={() => updateSelectedNode(null)}
          />
        ) : (
          <div className="sidebar-container absolute top-0 right-0 w-80 h-full bg-white shadow-2xl border-l border-gray-200 z-50 overflow-y-auto">
          <div className="p-6">
            {/* Close button */}
            <button
              onClick={() => updateSelectedNode(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>
            
            {/* Node info */}
            <div className="mt-12">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {nodeDetails[selectedNode.id]?.fullName || selectedNode.id}
              </h2>
              
              {/* Type tag */}
              <span 
                className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white mb-4"
                style={{ backgroundColor: selectedNode.color }}
              >
                {nodeDetails[selectedNode.id]?.type || selectedNode.group}
              </span>
              
              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {nodeDetails[selectedNode.id]?.description || 'No description available yet.'}
              </p>
              
              {/* Website */}
              {nodeDetails[selectedNode.id]?.website && (
                <a
                  href={nodeDetails[selectedNode.id].website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Visit Website
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              
              {/* Pro features placeholder */}
              {isPro && (
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
                  <h3 className="text-sm font-semibold text-purple-800 mb-2">Pro Features</h3>
                  <p className="text-sm text-purple-600">
                    Enhanced details, funding information, and connection analytics coming soon...
                  </p>
                </div>
              )}
            </div>
          </div>
          </div>
        )
      )}
      
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full h-full cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ 
          cursor: isDragging ? 'grabbing' : 'grab',
          touchAction: 'none' // Prevents default mobile scrolling
        }}
      >
        {/* Background */}
        <rect width="100%" height="100%" fill="#FAFAFA" />
        
        {/* Main group with transform */}
        <g transform={`translate(${transform.x}, ${transform.y}) scale(${transform.scale})`}>
          {/* Links */}
          <g className="links">
          {graphData.links.map((link, index) => {
            const sourceNode = findNode(link.source);
            const targetNode = findNode(link.target);
            
            if (!sourceNode || !targetNode) return null;
            
            const sourceId = link.source;
            const targetId = link.target;
            
            // Check if this link is connected to the selected node
            const isConnected = selectedNode && (
              sourceId === selectedNode.id || targetId === selectedNode.id
            );
            
            // Color links by type
            const linkColor = link.type.includes('Leader') ? '#3B82F6' :
                            link.type.includes('Invests') ? '#10B981' :
                            link.type.includes('Partner') ? '#8B5CF6' : '#D1D5DB';
            
            // Determine opacity and stroke width based on connection status
            const opacity = selectedNode ? (isConnected ? '0.9' : '0.15') : '0.6';
            const strokeWidth = selectedNode ? (isConnected ? '2.5' : '1') : '1.5';
            
            // Pro feature: Check if link has details
            const hasDetails = isPro && getLinkDetail(sourceId, targetId);
            
            return (
              <g key={index}>
                {/* Invisible wider line for easier clicking (Pro only) */}
                {hasDetails && sourceNode.x !== undefined && sourceNode.y !== undefined && 
                 targetNode.x !== undefined && targetNode.y !== undefined && (
                  <line
                    x1={sourceNode.x}
                    y1={sourceNode.y}
                    x2={targetNode.x}
                    y2={targetNode.y}
                    stroke="transparent"
                    strokeWidth="8"
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => handleLinkClick(sourceId, targetId, e)}
                  />
                )}
                
                {/* Visible line */}
                {sourceNode.x !== undefined && sourceNode.y !== undefined && 
                 targetNode.x !== undefined && targetNode.y !== undefined && (
                <line
                  x1={sourceNode.x}
                  y1={sourceNode.y}
                  x2={targetNode.x}
                  y2={targetNode.y}
                  stroke={linkColor}
                  strokeWidth={strokeWidth}
                  opacity={opacity}
                  className="transition-all duration-300"
                  style={hasDetails ? { cursor: 'pointer' } : {}}
                  onClick={hasDetails ? (e) => handleLinkClick(sourceId, targetId, e) : undefined}
                />
                )}
                
                {/* Clickable indicator dot for links with details (Pro only) */}
                {hasDetails && sourceNode.x !== undefined && sourceNode.y !== undefined && 
                 targetNode.x !== undefined && targetNode.y !== undefined && (
                  <circle
                    cx={(sourceNode.x + targetNode.x) / 2}
                    cy={(sourceNode.y + targetNode.y) / 2}
                    r="3"
                    fill={linkColor}
                    stroke="white"
                    strokeWidth="1"
                    style={{ cursor: 'pointer' }}
                    className="transition-all duration-300 hover:r-4"
                    onClick={(e) => handleLinkClick(sourceId, targetId, e)}
                  />
                )}
              </g>
            );
          })}
        </g>
        
        {/* Nodes */}
        <g className="nodes">
          {positionedNodes.map((node) => {
            // Determine if this node is connected to the selected node
            const isSelected = selectedNode?.id === node.id;
            const isConnected = selectedNode && connectedNodes.has(node.id);
            const isHighlighted = isSelected || isConnected;
            
            // Calculate opacity and scale based on selection status
            const nodeOpacity = selectedNode ? (isHighlighted ? 1 : 0.3) : 1;
            
            // Smart label visibility logic
            let shouldShowLabel = false;
            if (selectedNode) {
              // When a node is selected, show labels more selectively
              if (isSelected) {
                shouldShowLabel = true; // Always show selected node label
              } else if (isConnected) {
                // For connected nodes, only show if they're important or hovered
                shouldShowLabel = alwaysShowLabels.has(node.id) || hoveredNode === node.id;
              } else {
                // For unconnected nodes, only show if explicitly hovered
                shouldShowLabel = hoveredNode === node.id;
              }
            } else {
              // Default behavior when no node is selected
              shouldShowLabel = alwaysShowLabels.has(node.id) || hoveredNode === node.id;
            }
            
            const labelOpacity = shouldShowLabel ? 1 : 0;
            
            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={(e) => handleNodeClick(node, e)}
                onTouchEnd={(e) => handleNodeClick(node, e)}
                style={{ opacity: nodeOpacity }}
              >
                {/* Node shadow */}
                <circle
                  cx="1"
                  cy="1"
                  r={node.val * 1.2 + 2}
                  fill="rgba(0,0,0,0.1)"
                />
                
                {/* Node circle */}
                <circle
                  cx="0"
                  cy="0"
                  r={node.val * 1.2}
                  fill={node.color}
                  stroke={isSelected ? "#FFD700" : "white"}
                  strokeWidth={isSelected ? "3" : "2"}
                  className={`transition-all duration-300 ${
                    hoveredNode === node.id ? 'scale-110' : ''
                  } ${isSelected ? 'drop-shadow-lg' : ''}`}
                />
                
                {/* Node label - enhanced visibility for connected nodes */}
                <text
                  x="0"
                  y={node.val * 1.2 + 15}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight={isHighlighted ? "600" : "500"}
                  fill="#374151"
                  className={`pointer-events-none select-none transition-all duration-300`}
                  style={{ opacity: labelOpacity }}
                >
                  {node.id}
                </text>
              </g>
            );
          })}
          </g>
        </g>
      </svg>
      
      {/* PRO Button - Only show on free version */}
      {!isPro && (
        <div className="absolute top-4 right-4 z-40">
          <button
            onClick={() => window.location.href = '/longevity-map-pro'}
            className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 text-white font-bold w-12 h-12 rounded-full shadow-lg hover:from-purple-700 hover:via-purple-800 hover:to-indigo-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center border border-purple-500/30"
          >
            <span className="text-xs font-bold">PRO</span>
          </button>
        </div>
      )}

      {/* Mobile-Friendly Legend */}
      <div className="absolute bottom-20 left-4 md:bottom-4">
        {/* Mobile: Collapsible Legend */}
        <div className="md:hidden">
          {!isLegendExpanded ? (
            // Collapsed state - just an info button
            <button
              onClick={() => setIsLegendExpanded(true)}
              className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 p-3 hover:bg-white transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          ) : (
            // Expanded state - full legend
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-3 max-w-xs">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold text-gray-800">Guide</h3>
                <button
                  onClick={() => setIsLegendExpanded(false)}
                  className="text-gray-400 hover:text-gray-600 p-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Compact Node Colors */}
              <div className="mb-3">
                <h4 className="text-xs font-medium text-gray-600 mb-2">Nodes</h4>
                <div className="flex flex-wrap gap-2">
                  {legendData.map(({ group, color }) => (
                    <div key={group} className="flex items-center space-x-1">
                      <div 
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-xs text-gray-700">{group}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Compact Connection Colors */}
              <div className="mb-3">
                <h4 className="text-xs font-medium text-gray-600 mb-2">Links</h4>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-0.5 bg-blue-600 rounded"></div>
                    <span className="text-xs text-gray-700">Lead</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-0.5 bg-emerald-500 rounded"></div>
                    <span className="text-xs text-gray-700">Fund</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-0.5 bg-purple-500 rounded"></div>
                    <span className="text-xs text-gray-700">Partner</span>
                  </div>
                </div>
              </div>
              
              {/* Mobile Instructions */}
              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Tap once → name, tap again → details
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Desktop: Always visible legend */}
        <div className="hidden md:block bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm">
          {/* Node Colors */}
          <div className="mb-4">
            <h4 className="text-xs font-medium text-gray-600 mb-2">Node Types</h4>
            <div className="grid grid-cols-2 gap-2">
              {legendData.map(({ group, color }) => (
                <div key={group} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full border border-white shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-xs text-gray-700">{group}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Connection Colors */}
          <div>
            <h4 className="text-xs font-medium text-gray-600 mb-2">Connections</h4>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-0.5 bg-blue-600 rounded"></div>
                <span className="text-xs text-gray-700">Leadership</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-0.5 bg-emerald-500 rounded"></div>
                <span className="text-xs text-gray-700">Investment</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-0.5 bg-purple-500 rounded"></div>
                <span className="text-xs text-gray-700">Partnership</span>
              </div>
              {isPro && (
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <p className="text-xs text-purple-600 font-medium">
                    💡 Pro: Click links for details
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Info Circle - Bottom Right */}
      {isMobile() && showMobileInfoCircle && mobileSelectedNode && (
        <div className={`absolute right-6 z-50 ${isPro ? 'bottom-6' : 'bottom-24'}`}>
          <button
            onClick={handleMobileInfoCircleClick}
            className="mobile-info-circle bg-[#64BC6E] hover:bg-[#52a35b] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 border-2 border-white"
          >
            <span className="text-sm font-bold">‹‹</span>
          </button>
        </div>
      )}

      {/* Pro Feature: Link Details Popup */}
      {isPro && selectedLink && (
        <LinkDetailsPopup
          linkDetail={selectedLink}
          position={linkPopupPosition}
          onClose={() => setSelectedLink(null)}
        />
      )}
    </div>
  );
};

export default NetworkVisualization;
