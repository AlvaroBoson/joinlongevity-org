"use client";

import React, { useState } from 'react';
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

export default function LongevityExplorerClient() {
  const [selectedFilters, setSelectedFilters] = useState<Filters>({
    category: [],
    approach: [],
    evidenceLevel: [],
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
      category: [],
      approach: [],
      evidenceLevel: [],
    });
  };

  const filteredProfiles = profiles.filter(profile => {
    const categoryMatch = selectedFilters.category.length === 0 || 
      selectedFilters.category.some(category => profile.category.includes(category));
    const approachMatch = selectedFilters.approach.length === 0 || 
      selectedFilters.approach.some(area => profile.approach.includes(area));
    const evidenceLevelMatch = selectedFilters.evidenceLevel.length === 0 || 
      selectedFilters.evidenceLevel.includes(profile.evidenceLevel);

    return categoryMatch && approachMatch && evidenceLevelMatch;
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
              
              <h1 className="text-4xl font-bold mb-8 tracking-tight text-white">
                <span className="text-[#64BC6E]">Longevity</span> Explorer
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                From university labs to Silicon Valley startups, the field is moving fast. We&apos;ve organized the entire ecosystem in one place to help you understand not just who is doing what, but how their work is validated.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-12">
                Use the filters to navigate the landscape. Search by Category (like Researchers or Startups), filter by scientific Approach (like Cellular Reprogramming), and sort by Evidence Level to see the difference between established science and early-stage theories.
              </p>
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