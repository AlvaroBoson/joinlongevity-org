import React, { useState } from 'react';

export interface Filters {
  category: string[];
  approach: string[];
  evidenceLevel: string[];
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
    category: false,
    approach: false,
    evidenceLevel: false,
  });

  const filterOptions = {
    category: [
      'Researcher', 'Clinician (MD)', 'Startup / Company', 'Investor / VC', 
      'Influencer / Creator', 'Community / Platform', 'Conference'
    ],
    approach: [
      'Senolytics', 'Cellular Reprogramming', 'Metabolic Health', 
      'Diagnostics & Biomarkers', 'Gene Therapies', 'Damage Repair (SENS)'
    ],
    evidenceLevel: [
      'Human Data', 'Published Research', 'Early Stage / Theoretical', 
      'Community', 'Anecdotal'
    ],
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
    <div className="w-full bg-[#1a2330]/50 backdrop-blur-sm border border-[#64BC6E]/10 rounded-xl p-6">
      <div className="flex flex-col space-y-6">
        {/* Filter Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Category Filter */}
          <div className="border border-[#64BC6E]/10 rounded-lg overflow-hidden" style={{ alignSelf: 'start' }}>
            <button
              onClick={() => toggleSection('category')}
              className="w-full flex items-center justify-between p-3 bg-[#1E2A38]/80 hover:bg-[#1E2A38] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-300">Category</span>
                {getSelectedCount('category') > 0 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[#64BC6E]/20 text-[#64BC6E]">
                    {getSelectedCount('category')}
                  </span>
                )}
              </div>
              <svg
                className={`w-5 h-5 text-gray-400 transform transition-transform ${openSections.category ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`transition-all duration-200 ${openSections.category ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
              <div className="flex flex-wrap gap-2 p-3">
                {filterOptions.category.map((category) => (
                  <button
                    key={category}
                    onClick={() => onFilterChange('category', category)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-all duration-200 
                      ${selectedFilters.category.includes(category)
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

          {/* Approach Filter */}
          <div className="border border-[#64BC6E]/10 rounded-lg overflow-hidden" style={{ alignSelf: 'start' }}>
            <button
              onClick={() => toggleSection('approach')}
              className="w-full flex items-center justify-between p-3 bg-[#1E2A38]/80 hover:bg-[#1E2A38] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-300">Approach</span>
                {getSelectedCount('approach') > 0 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[#64BC6E]/20 text-[#64BC6E]">
                    {getSelectedCount('approach')}
                  </span>
                )}
              </div>
              <svg
                className={`w-5 h-5 text-gray-400 transform transition-transform ${openSections.approach ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`transition-all duration-200 ${openSections.approach ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
              <div className="flex flex-wrap gap-2 p-3">
                {filterOptions.approach.map((area) => (
                  <button
                    key={area}
                    onClick={() => onFilterChange('approach', area)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-all duration-200 
                      ${selectedFilters.approach.includes(area)
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

          {/* Evidence Level Filter */}
          <div className="border border-[#64BC6E]/10 rounded-lg overflow-hidden" style={{ alignSelf: 'start' }}>
            <button
              onClick={() => toggleSection('evidenceLevel')}
              className="w-full flex items-center justify-between p-3 bg-[#1E2A38]/80 hover:bg-[#1E2A38] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-300">Evidence Level</span>
                {getSelectedCount('evidenceLevel') > 0 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[#64BC6E]/20 text-[#64BC6E]">
                    {getSelectedCount('evidenceLevel')}
                  </span>
                )}
              </div>
              <svg
                className={`w-5 h-5 text-gray-400 transform transition-transform ${openSections.evidenceLevel ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`transition-all duration-200 ${openSections.evidenceLevel ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
              <div className="flex flex-wrap gap-2 p-3">
                {filterOptions.evidenceLevel.map((score) => (
                  <button
                    key={score}
                    onClick={() => onFilterChange('evidenceLevel', score)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-all duration-200 
                      ${selectedFilters.evidenceLevel.includes(score)
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