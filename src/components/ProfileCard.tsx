import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProfileCardProps {
  name: string;
  description: string;
  imageUrl: string;
  tags: string[];
  trustScore: number; // 0-100
  profileUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  description,
  imageUrl,
  tags,
  trustScore,
  profileUrl,
}) => {
  // Function to determine trust score color
  const getTrustScoreColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    if (score >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-[#1E2A38]/50 backdrop-blur-sm border border-[#64BC6E]/10 rounded-xl p-6 
      hover:border-[#64BC6E]/30 transition-all duration-300 group">
      <div className="flex items-start space-x-4">
        {/* Profile Image */}
        <div className="relative w-20 h-20 flex-shrink-0">
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
            
            {/* Trust Score Bar */}
            <div className="flex items-center space-x-2">
              <div className="h-2 w-24 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${getTrustScoreColor(trustScore)} transition-all duration-300`}
                  style={{ width: `${trustScore}%` }}
                />
              </div>
              <span className="text-sm text-gray-400">{trustScore}%</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm mt-2 line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-[#64BC6E]/10 text-[#64BC6E] 
                  border border-[#64BC6E]/20"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* More Info Link */}
          <Link
            href={profileUrl}
            className="inline-block mt-4 text-sm font-medium text-[#64BC6E] 
              hover:text-[#64BC6E]/80 transition-colors"
          >
            More info →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard; 