"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import FadeInUp from "@/components/FadeInUp";
import RisingDotsBackground from '@/components/RisingDotsBackground';
import { conferences, Conference } from '@/data/conferences';

const conferenceTypes = ['Research', 'Industry', 'Community', 'Investment', 'Mixed'] as const;
const conferenceFocus = ['Scientific', 'Business & Investment', 'Community & Advocacy', 'Clinical & Medical', 'Technology & Innovation'] as const;

function ConferenceCard({ conference }: { conference: Conference }) {
  const formatDate = (dateString: string, endDateString?: string) => {
    const startDate = new Date(dateString);
    const endDate = endDateString ? new Date(endDateString) : null;
    
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    };
    
    if (endDate && endDate.getTime() !== startDate.getTime()) {
      return `${startDate.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}`;
    }
    
    return startDate.toLocaleDateString('en-US', options);
  };

  const isUpcoming = (dateString: string) => {
    return new Date(dateString) > new Date();
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-[#64BC6E]/30">
    
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <h3 className="text-xl font-semibold text-gray-900 flex-1">{conference.name}</h3>
            <div className="flex flex-wrap gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                isUpcoming(conference.date) 
                  ? 'bg-[#64BC6E]/10 text-[#64BC6E]' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {isUpcoming(conference.date) ? 'Upcoming' : 'Past'}
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                {conference.type}
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                {conference.focus}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
            <span className="font-medium">{conference.location}</span>
            <span className="hidden sm:inline">•</span>
            <span>{formatDate(conference.date, conference.endDate)}</span>
            {conference.virtual && (
              <>
                <span className="hidden sm:inline">•</span>
                <span className="text-[#64BC6E] font-medium">
                  {conference.hybrid ? 'Hybrid' : 'Virtual'}
                </span>
              </>
            )}
          </div>
          
          <div className="text-sm text-gray-600">
            <span className="font-medium">Organized by:</span> {conference.organizer}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4 flex-1">{conference.description}</p>

        {/* Price */}
        {conference.ticketPrice && (
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-900">Ticket Price: {conference.ticketPrice}</span>
          </div>
        )}

        {/* Target Audience */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Target Audience:</h4>
          <div className="flex flex-wrap gap-1">
            {conference.targetAudience.slice(0, 4).map((audience, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                {audience}
              </span>
            ))}
            {conference.targetAudience.length > 4 && (
              <span className="text-gray-400 text-xs px-2 py-1">
                +{conference.targetAudience.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Key Topics */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Topics:</h4>
          <div className="flex flex-wrap gap-1">
            {conference.keyTopics.slice(0, 3).map((topic, index) => (
              <span key={index} className="px-2 py-1 bg-[#64BC6E]/10 text-[#64BC6E] rounded text-xs">
                {topic}
              </span>
            ))}
            {conference.keyTopics.length > 3 && (
              <span className="text-gray-400 text-xs px-2 py-1">
                +{conference.keyTopics.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Notable Features */}
        {conference.notableFeatures.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Notable Features:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {conference.notableFeatures.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#64BC6E] mr-2 text-xs leading-none mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Website Button */}
        <div className="mt-auto">
          <Link
            href={conference.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-6 py-3 bg-[#64BC6E] text-white font-semibold rounded-lg hover:bg-[#52a35b] transition-colors"
          >
            Visit Website
          </Link>
        </div>
      </div>
    </div>
  );
}

function FilterSection({ 
  selectedTypes, 
  selectedFocus, 
  onTypeChange, 
  onFocusChange,
  setSelectedTypes,
  setSelectedFocus
}: {
  selectedTypes: string[];
  selectedFocus: string[];
  onTypeChange: (type: string) => void;
  onFocusChange: (focus: string) => void;
  setSelectedTypes: (types: string[]) => void;
  setSelectedFocus: (focus: string[]) => void;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Conferences</h3>
      
      {/* Conference Type Filters */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Conference Type</h4>
        <div className="flex flex-wrap gap-2">
          {conferenceTypes.map((type) => (
            <button
              key={type}
              onClick={() => onTypeChange(type)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedTypes.includes(type)
                  ? 'bg-[#64BC6E] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Conference Focus Filters */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Focus Area</h4>
        <div className="flex flex-wrap gap-2">
          {conferenceFocus.map((focus) => (
            <button
              key={focus}
              onClick={() => onFocusChange(focus)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedFocus.includes(focus)
                  ? 'bg-[#64BC6E] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {focus}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {(selectedTypes.length > 0 || selectedFocus.length > 0) && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={() => {
              setSelectedTypes([]);
              setSelectedFocus([]);
            }}
            className="text-sm text-gray-600 hover:text-[#64BC6E] transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function ConferencesClient() {
  const pathname = usePathname();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedFocus, setSelectedFocus] = useState<string[]>([]);
  const [filteredConferences, setFilteredConferences] = useState<Conference[]>(conferences);
  const [sortedConferences, setSortedConferences] = useState<Conference[]>(conferences);

  const handleTypeChange = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleFocusChange = (focus: string) => {
    setSelectedFocus(prev => 
      prev.includes(focus) 
        ? prev.filter(f => f !== focus)
        : [...prev, focus]
    );
  };

  // Apply filters whenever filter state changes
  useEffect(() => {
    let filtered = conferences;
    
    // Apply type filters
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(conference => selectedTypes.includes(conference.type));
    }
    
    // Apply focus filters
    if (selectedFocus.length > 0) {
      filtered = filtered.filter(conference => selectedFocus.includes(conference.focus));
    }
    
    setFilteredConferences(filtered);
  }, [selectedTypes, selectedFocus]);

  // Sort conferences whenever filtered conferences change
  useEffect(() => {
    const sorted = [...filteredConferences].sort((a, b) => {
      const now = new Date();
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      
      const isUpcomingA = dateA > now;
      const isUpcomingB = dateB > now;
      
      if (isUpcomingA && !isUpcomingB) return -1;
      if (!isUpcomingA && isUpcomingB) return 1;
      
      if (isUpcomingA && isUpcomingB) {
        return dateA.getTime() - dateB.getTime(); // Upcoming: earliest first
      } else {
        return dateB.getTime() - dateA.getTime(); // Past: latest first
      }
    });
    setSortedConferences(sorted);
  }, [filteredConferences]);

  return (
    <div className="relative min-h-screen w-full bg-[#1E2A38]">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#1E2A38] to-[#1a2330] w-full h-full" style={{ zIndex: -1 }} />
      
      {/* Main content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16">
          <RisingDotsBackground />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">
                Longevity Conferences & Events
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Discover the best conferences and events in the longevity field. Connect with 
                researchers, entrepreneurs, and advocates working to extend healthy human lifespan.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Conferences Section */}
        <section className="relative pt-8 pb-20 bg-[#f7fafc]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              
              {/* Filters */}
              <FilterSection
                selectedTypes={selectedTypes}
                selectedFocus={selectedFocus}
                onTypeChange={handleTypeChange}
                onFocusChange={handleFocusChange}
                setSelectedTypes={setSelectedTypes}
                setSelectedFocus={setSelectedFocus}
              />

              {/* Results Count */}
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing {sortedConferences.length} of {conferences.length} conferences
                </p>
              </div>

              {/* Conferences Grid - Simplified without animations */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {sortedConferences.map((conference) => (
                  <ConferenceCard key={conference.id} conference={conference} />
                ))}
              </div>

              {/* No Results */}
              {sortedConferences.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">
                    No conferences match your current filters. Try adjusting your search criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <FadeInUp as="section" className="py-16 bg-[#1E2A38] text-center" key={pathname + "-cta-section"}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Want to Stay Updated on Events?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                The longevity conference landscape is constantly evolving. New events are 
                announced regularly, and existing ones update their programs and speakers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/longevity-explorer"
                  className="inline-block px-8 py-3 bg-[#64BC6E] text-white font-semibold rounded-lg hover:bg-[#52a35b] transition-colors"
                >
                  Explore Longevity Community
                </Link>
                <Link
                  href="/get-involved"
                  className="inline-block px-8 py-3 border-2 border-[#64BC6E] text-[#64BC6E] font-semibold rounded-lg hover:bg-[#64BC6E] hover:text-white transition-colors"
                >
                  Get Involved in Longevity
                </Link>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
