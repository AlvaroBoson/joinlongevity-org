import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Profile } from '@/types/profile';

type ProfileCardProps = Profile;

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  description,
  imageUrl,
  profileUrl,
  category,
  approach,
  evidenceLevel,
}) => {
  const getEvidenceLevelStyle = (level: string) => {
    switch (level) {
      case 'Human Data':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Published Research':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Early Stage / Theoretical':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'Community':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Anecdotal':
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
      default:
        return 'bg-gray-700/20 text-gray-400 border-gray-700/30';
    }
  };

  return (
    <div className="bg-[#1a2330] border border-[#64BC6E]/10 rounded-xl p-6 
      hover:border-[#64BC6E]/30 transition-all duration-300 group h-full flex flex-col">
      <div className="flex items-start space-x-4">
        {/* Profile Image */}
        <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-full">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-white group-hover:text-[#64BC6E] transition-colors">
              {name}
            </h3>
            
            <span className={`px-2 py-1 text-xs rounded-full border ${getEvidenceLevelStyle(evidenceLevel)}`}>
              {evidenceLevel}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm mt-2 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
      
      <div className="flex-grow mt-4 flex flex-col justify-between">
        <div>
           {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {category.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-[#64BC6E]/10 text-[#64BC6E] 
                  border border-[#64BC6E]/20"
              >
                {tag}
              </span>
            ))}
             {approach.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-sky-500/10 text-sky-400
                  border border-sky-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* More Info Link */}
        <Link
          href={profileUrl}
          className="inline-block mt-4 text-sm font-medium text-[#64BC6E] 
            hover:text-[#64BC6E]/80 transition-colors self-start"
        >
          More info →
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard; 