"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProfileCard from '@/components/ProfileCard';
import FilterBar, { Filters } from '@/components/FilterBar';
import { profiles } from '@/data/profiles';
import FadeInUp from '@/components/FadeInUp';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function WhosWhoClient() {
  const [selectedFilters, setSelectedFilters] = useState<Filters>({
    categories: [],
    focusAreas: [],
    types: [],
    trustScores: [],
  });

  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev };
      if (newFilters[filterType].includes(value)) {
        newFilters[filterType] = newFilters[filterType].filter(v => v !== value);
      } else {
        newFilters[filterType] = [...newFilters[filterType], value];
      }
      return newFilters;
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      categories: [],
      focusAreas: [],
      types: [],
      trustScores: [],
    });
  };

  const filteredProfiles = profiles.filter(profile => {
    // For each filter category, check if ALL selected filters are present in the profile's corresponding array
    const categoryMatch = selectedFilters.categories.length === 0 || 
      selectedFilters.categories.every(category => profile.categories.includes(category));
    const focusAreaMatch = selectedFilters.focusAreas.length === 0 || 
      selectedFilters.focusAreas.every(area => profile.focusAreas.includes(area));
    const typeMatch = selectedFilters.types.length === 0 || 
      selectedFilters.types.every(type => profile.type === type);
    const trustMatch = selectedFilters.trustScores.length === 0 || 
      selectedFilters.trustScores.every(score => profile.trustLevel === score);

    return categoryMatch && focusAreaMatch && typeMatch && trustMatch;
  });

  return (
    <div className="relative min-h-screen w-full">
      {/* Main content */}
      <div className="relative">
        {/* Hero Section */}
        <FadeInUp as="section" className="relative pt-32 pb-24 bg-[#1E2A38]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              {/* Hero Images */}
              <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
                {/* Left Image */}
                <motion.div variants={fadeInUp} className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-2xl border-2 sm:border-4 border-gray-700">
                  <Image
                    src="/image/whoswho/bryan-johnson.webp"
                    alt="Bryan Johnson"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 144px"
                  />
                </motion.div>
                {/* Middle Image */}
                <motion.div variants={fadeInUp} className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl border-2 sm:border-4 border-gray-700">
                  <Image
                    src="/image/whoswho/aubrey-de-grey.webp"
                    alt="Aubrey de Grey"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                  />
                </motion.div>
                {/* Right Image */}
                <motion.div variants={fadeInUp} className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-2xl border-2 sm:border-4 border-gray-700">
                  <Image
                    src="/image/whoswho/david-sinclair.webp"
                    alt="David Sinclair"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 144px"
                  />
                </motion.div>
              </div>
              
              <h1 className="text-4xl font-bold mb-8 tracking-tight">
                <span className="text-[#64BC6E]">Who&apos;s Who</span>
                <span className="text-white"> in Longevity</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-12">
                Who can you trust and follow in longevity? Everyone&apos;s saying something different. 
                We help you find the people, projects, and communities that align with your goals—curated 
                by the Join Longevity team and the broader community.
              </p>
              
              {/* Featured Picks Section */}
              <div className="mt-16 mb-12">
                <p className="text-xl text-gray-200 mb-6">
                  Not sure where to start? Check out our top picks this month.
                </p>
                <Link 
                  href="/featured-picks"
                  className="inline-block px-8 py-4 text-lg font-semibold text-white bg-[#64BC6E] rounded-xl 
                    hover:bg-[#64BC6E]/90 transform hover:scale-105 transition-all duration-300 
                    shadow-lg hover:shadow-[#64BC6E]/20"
                >
                  See Featured Picks
                </Link>
              </div>

              {/* Minimal Scroll Indicator */}
              <motion.div
                className="flex flex-col items-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <motion.div
                  className="w-1 h-12 bg-gradient-to-b from-[#64BC6E] to-transparent rounded-full"
                  animate={{ 
                    scaleY: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </div>
        </FadeInUp>

        {/* Filter Section */}
        <section className="py-8 bg-[#1E2A38]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FilterBar
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
            />
          </div>
        </section>

        {/* Profiles Grid Section */}
        <section className="py-16 bg-[#1E2A38]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProfiles.map((profile) => (
                <ProfileCard
                  key={profile.id}
                  {...profile}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Last Updated Text */}
        <div className="py-16 text-center">
          <p className="text-sm text-gray-400">
            Last updated: {siteConfig.lastUpdated}
          </p>
        </div>
      </div>
    </div>
  );
} 