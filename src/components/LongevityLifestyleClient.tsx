"use client";

import React from 'react';
import Link from 'next/link';
import FadeInUp from '@/components/FadeInUp'; // Assuming you want animations
import { siteConfig } from '@/config/site';

const sharedLinkClasses = "text-[#64BC6E] underline hover:text-[#82c98a] transition-colors font-semibold";

export default function LongevityLifestyleClient() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section - Dark */}
      <FadeInUp as="section" className="py-24 sm:py-32 md:py-40 bg-[#1E2A38] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Lifestyle | Join Longevity
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            While much of longevity focuses on biotech and advanced interventions, how we live still matters. This section brings together science-backed, practical tools to help you live longer and better.
          </p>
        </div>
      </FadeInUp>

      {/* Section 1: Who to Follow - Light */}
      <FadeInUp as="section" className="py-16 sm:py-24 bg-white text-gray-900">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center sm:text-left">
            Who to Follow
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Everyone has an opinion. But who&apos;s actually worth listening to? Here are some of the most trusted voices in health & lifestyle longevity:
          </p>
          <ul className="space-y-6 text-lg text-gray-700 mb-10">
            <li><strong>Peter Attia</strong> – Medical insight, self-experimentation, performance optimization</li>
            <li><strong>David Sinclair</strong> – Aging research meets supplements and interventions</li>
            <li><strong>Andrew Steele</strong> – Science communicator, evidence-focused</li>
            <li><strong>Matt Kaeberlein</strong> – Researcher focused on geroscience and lifestyle</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed">
            Want to filter who can you trust by field? Explore our <Link href="/whos-who" className={sharedLinkClasses}>Who&apos;s Who</Link> page to.
          </p>
        </div>
      </FadeInUp>

      {/* Section 2: Myth-Busting - Dark */}
      <FadeInUp as="section" className="py-16 sm:py-24 bg-[#1E2A38] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center sm:text-left">
            Myth-Busting
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Cold plunges, red light therapy, resveratrol, grounding, breathwork... Are they backed by science, or just the latest hype?
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            This section will help you separate trends from truth, like a <Link href="/whos-who" className={sharedLinkClasses}>Who&apos;s Who</Link> just for lifestyle claims.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed font-semibold mb-2">
            Coming soon.
          </p>
          <p className="text-sm text-gray-400">
            Last updated: {siteConfig.lastUpdated}
          </p>
        </div>
      </FadeInUp>

      {/* Section 3: Nutrition Facts - Light */}
      <FadeInUp as="section" className="py-16 sm:py-24 bg-white text-gray-900">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center sm:text-left">
            Nutrition Facts
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Join Longevity&apos;s purpose is to simplify and open up the field, not to reinvent what already exists. For evidence-based, accessible, and constantly updated nutrition facts we recommend you to check: <Link href="https://www.nutritionfacts.org" target="_blank" rel="noopener noreferrer" className={sharedLinkClasses}>NutritionFacts.org</Link>.
          </p>
        </div>
      </FadeInUp>
    </div>
  );
} 