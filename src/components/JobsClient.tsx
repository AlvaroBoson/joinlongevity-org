"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import FadeInUp from "@/components/FadeInUp";
import RisingDotsBackground from '@/components/RisingDotsBackground';
import { jobs, Job } from '@/data/jobs';

const jobTypes = ['Full-time', 'Part-time', 'Freelance / Contract', 'Internship', 'Volunteer'] as const;
const jobCategories = ['Scientific', 'Engineering & Tech', 'Marketing & Communications', 'Business & Operations', 'Clinical & Medical', 'Gigs & Micro-tasks'] as const;

function JobCard({ job }: { job: Job }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-[#64BC6E]/30">
    
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
              {job.companyUrl ? (
                <Link 
                  href={job.companyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium text-[#64BC6E] hover:text-[#52a35b] transition-colors"
                >
                  {job.company}
                </Link>
              ) : (
                <span className="font-medium">{job.company}</span>
              )}
              <span className="hidden sm:inline">•</span>
              <span>{job.location}</span>
              {job.remote && <span className="text-[#64BC6E] font-medium">• Remote</span>}
            </div>
          </div>
          <div className="flex flex-col sm:items-end gap-2">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#64BC6E]/10 text-[#64BC6E] rounded-full text-xs font-medium">
                {job.type}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                {job.category}
              </span>
            </div>
            <span className="text-xs text-gray-500">{formatDate(job.postedDate)}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4 flex-1">{job.description}</p>

        {/* Salary */}
        {job.salary && (
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-900">{job.salary}</span>
          </div>
        )}

        {/* Requirements Preview */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Requirements:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {job.requirements.slice(0, 3).map((req, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#64BC6E] mr-2 text-xs leading-none mt-1">•</span>
                <span>{req}</span>
              </li>
            ))}
            {job.requirements.length > 3 && (
              <li className="text-gray-400 text-xs">
                +{job.requirements.length - 3} more requirements
              </li>
            )}
          </ul>
        </div>

        {/* Apply Button */}
        <div className="mt-auto">
          <Link
            href={job.applicationUrl}
            target={job.applicationUrl.startsWith('http') ? "_blank" : "_self"}
            rel={job.applicationUrl.startsWith('http') ? "noopener noreferrer" : ""}
            className="inline-block w-full text-center px-6 py-3 bg-[#64BC6E] text-white font-semibold rounded-lg hover:bg-[#52a35b] transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}

function FilterSection({ 
  selectedTypes, 
  selectedCategories, 
  onTypeChange, 
  onCategoryChange,
  setSelectedTypes,
  setSelectedCategories
}: {
  selectedTypes: string[];
  selectedCategories: string[];
  onTypeChange: (type: string) => void;
  onCategoryChange: (category: string) => void;
  setSelectedTypes: (types: string[]) => void;
  setSelectedCategories: (categories: string[]) => void;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Jobs</h3>
      
      {/* Job Type Filters */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Job Type</h4>
        <div className="flex flex-wrap gap-2">
          {jobTypes.map((type) => (
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

      {/* Job Category Filters */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Job Category</h4>
        <div className="flex flex-wrap gap-2">
          {jobCategories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategories.includes(category)
                  ? 'bg-[#64BC6E] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {(selectedTypes.length > 0 || selectedCategories.length > 0) && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={() => {
              setSelectedTypes([]);
              setSelectedCategories([]);
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

export default function JobsClient() {
  const pathname = usePathname();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);

  const handleTypeChange = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Apply filters whenever filter state changes
  useEffect(() => {
    let filtered = jobs;
    
    // Apply type filters
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(job => selectedTypes.includes(job.type));
    }
    
    // Apply category filters
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(job => selectedCategories.includes(job.category));
    }
    
    setFilteredJobs(filtered);
  }, [selectedTypes, selectedCategories]);

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
                Longevity Jobs & Opportunities
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Discover career opportunities in the longevity field. From research positions 
                to marketing roles, find your place in the movement to extend healthy human lifespan.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="relative pt-8 pb-20 bg-[#f7fafc]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              
              {/* Filters */}
              <FilterSection
                selectedTypes={selectedTypes}
                selectedCategories={selectedCategories}
                onTypeChange={handleTypeChange}
                onCategoryChange={handleCategoryChange}
                setSelectedTypes={setSelectedTypes}
                setSelectedCategories={setSelectedCategories}
              />

              {/* Results Count and Post Job Button */}
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-gray-600">
                  Showing {filteredJobs.length} of {jobs.length} jobs
                </p>
                <Link
                  href="mailto:jobs@joinlongevity.org?subject=Post%20a%20Job%20-%20Longevity%20Job%20Board&body=Hello%2C%0A%0AI%20would%20like%20to%20post%20a%20job%20on%20the%20Longevity%20Job%20Board.%0A%0AJob%20Title%3A%0ACompany%3A%0ALocation%3A%0AJob%20Type%3A%0AJob%20Category%3A%0ADescription%3A%0A%0APlease%20let%20me%20know%20the%20next%20steps.%0A%0AThank%20you!"
                  className="inline-flex items-center px-4 py-2 bg-[#64BC6E] text-white font-semibold rounded-lg hover:bg-[#52a35b] transition-colors text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Post a Job
                </Link>
              </div>

              {/* Jobs Grid - Simplified without animations */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>

              {/* No Results */}
              {filteredJobs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">
                    No jobs match your current filters. Try adjusting your search criteria.
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
                Don&apos;t See the Right Opportunity?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                The longevity field is rapidly growing. New opportunities emerge regularly, 
                and many companies are open to creating positions for the right candidates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://longevitylist.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-[#64BC6E] text-white font-semibold rounded-lg hover:bg-[#52a35b] transition-colors"
                >
                  Browse More Jobs
                </Link>
                <Link
                  href="/get-involved"
                  className="inline-block px-8 py-3 border-2 border-[#64BC6E] text-[#64BC6E] font-semibold rounded-lg hover:bg-[#64BC6E] hover:text-white transition-colors"
                >
                  Explore Other Ways to Get Involved
                </Link>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
