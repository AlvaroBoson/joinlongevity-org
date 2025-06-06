import React, { useState } from 'react';

export interface Filters {
  categories: string[];
  focusAreas: string[];
  types: string[];
  trustScores: string[];
}

interface FilterBarProps {
  selectedFilters: Filters;
  onFilterChange: (filterType: keyof Filters, value: string) => void;
  onClearFilters: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  selectedFilters,
  onFilterChange,
  onClearFilters,
}) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    categories: false,
    focusAreas: false,
    types: false,
    trustScores: false,
  });

  const filterOptions = {
    categories: ['Researchers', 'Biohackers', 'Creators', 'Advocates', 'Startups', 'Communities', 'Investors', 'Influencers'],
    focusAreas: ['Healthspan', 'Life Extension', 'Immortality', 'Supplements', 'AI-biotech', 'Regeneration'],
    types: ['Person', 'Org', 'Platform'],
    trustScores: ['High', 'Medium', 'Low', 'Unrated'],
  };

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const getSelectedCount = (filterType: keyof Filters) => {
    return selectedFilters[filterType].length;
  };

  const hasSelectedFilters = Object.values(selectedFilters).some(arr => arr.length > 0);

  return (
    <div className="w-full bg-[#1E2A38]/50 backdrop-blur-sm border border-[#64BC6E]/10 rounded-xl p-6">
      <div className="flex flex-col space-y-6">
        {/* Filter Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Category Filter */}
          <div className="border border-[#64BC6E]/10 rounded-lg overflow-hidden" style={{ alignSelf: 'start' }}>
            <button
              onClick={() => toggleSection('categories')}
              className="w-full flex items-center justify-between p-3 bg-[#1E2A38]/80 hover:bg-[#1E2A38] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-300">Category</span>
                {getSelectedCount('categories') > 0 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[#64BC6E]/20 text-[#64BC6E]">
                    {getSelectedCount('categories')}
                  </span>
                )}
              </div>
              <svg
                className={`w-5 h-5 text-gray-400 transform transition-transform ${openSections.categories ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`transition-all duration-200 ${openSections.categories ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
              <div className="flex flex-wrap gap-2 p-3">
                {filterOptions.categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => onFilterChange('categories', category)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-all duration-200 
                      ${selectedFilters.categories.includes(category)
                        ? 'bg-[#64BC6E] text-white'
                        : 'bg-[#64BC6E]/10 text-[#64BC6E] hover:bg-[#64BC6E]/20'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Focus Area Filter */}
          <div className="border border-[#64BC6E]/10 rounded-lg overflow-hidden" style={{ alignSelf: 'start' }}>
            <button
              onClick={() => toggleSection('focusAreas')}
              className="w-full flex items-center justify-between p-3 bg-[#1E2A38]/80 hover:bg-[#1E2A38] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-300">Focus Area</span>
                {getSelectedCount('focusAreas') > 0 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[#64BC6E]/20 text-[#64BC6E]">
                    {getSelectedCount('focusAreas')}
                  </span>
                )}
              </div>
              <svg
                className={`w-5 h-5 text-gray-400 transform transition-transform ${openSections.focusAreas ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`transition-all duration-200 ${openSections.focusAreas ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
              <div className="flex flex-wrap gap-2 p-3">
                {filterOptions.focusAreas.map((area) => (
                  <button
                    key={area}
                    onClick={() => onFilterChange('focusAreas', area)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-all duration-200 
                      ${selectedFilters.focusAreas.includes(area)
                        ? 'bg-[#64BC6E] text-white'
                        : 'bg-[#64BC6E]/10 text-[#64BC6E] hover:bg-[#64BC6E]/20'
                      }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Type Filter */}
          <div className="border border-[#64BC6E]/10 rounded-lg overflow-hidden" style={{ alignSelf: 'start' }}>
            <button
              onClick={() => toggleSection('types')}
              className="w-full flex items-center justify-between p-3 bg-[#1E2A38]/80 hover:bg-[#1E2A38] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-300">Type</span>
                {getSelectedCount('types') > 0 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[#64BC6E]/20 text-[#64BC6E]">
                    {getSelectedCount('types')}
                  </span>
                )}
              </div>
              <svg
                className={`w-5 h-5 text-gray-400 transform transition-transform ${openSections.types ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`transition-all duration-200 ${openSections.types ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
              <div className="flex flex-wrap gap-2 p-3">
                {filterOptions.types.map((type) => (
                  <button
                    key={type}
                    onClick={() => onFilterChange('types', type)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-all duration-200 
                      ${selectedFilters.types.includes(type)
                        ? 'bg-[#64BC6E] text-white'
                        : 'bg-[#64BC6E]/10 text-[#64BC6E] hover:bg-[#64BC6E]/20'
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Score Filter */}
          <div className="border border-[#64BC6E]/10 rounded-lg overflow-hidden" style={{ alignSelf: 'start' }}>
            <button
              onClick={() => toggleSection('trustScores')}
              className="w-full flex items-center justify-between p-3 bg-[#1E2A38]/80 hover:bg-[#1E2A38] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-300">Trust Score</span>
                {getSelectedCount('trustScores') > 0 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[#64BC6E]/20 text-[#64BC6E]">
                    {getSelectedCount('trustScores')}
                  </span>
                )}
              </div>
              <svg
                className={`w-5 h-5 text-gray-400 transform transition-transform ${openSections.trustScores ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`transition-all duration-200 ${openSections.trustScores ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
              <div className="flex flex-wrap gap-2 p-3">
                {filterOptions.trustScores.map((score) => (
                  <button
                    key={score}
                    onClick={() => onFilterChange('trustScores', score)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-all duration-200 
                      ${selectedFilters.trustScores.includes(score)
                        ? 'bg-[#64BC6E] text-white'
                        : 'bg-[#64BC6E]/10 text-[#64BC6E] hover:bg-[#64BC6E]/20'
                      }`}
                  >
                    {score}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Selected Filters Display - Fixed Height */}
        <div className="min-h-[40px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Selected filters:</span>
            <div className="flex flex-wrap gap-2">
              {Object.entries(selectedFilters).map(([key, values]) =>
                values.map((value: string) => (
                  <span
                    key={`${key}-${value}`}
                    className="inline-flex items-center px-2 py-1 text-xs rounded-full 
                      bg-[#64BC6E]/10 text-[#64BC6E] border border-[#64BC6E]/20"
                  >
                    {value}
                    <button
                      onClick={() => onFilterChange(key as keyof Filters, value)}
                      className="ml-1 hover:text-white"
                    >
                      ×
                    </button>
                  </span>
                ))
              )}
            </div>
          </div>
          
          {/* Clear Filters Button */}
          {hasSelectedFilters && (
            <button
              onClick={onClearFilters}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Clear all filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar; 