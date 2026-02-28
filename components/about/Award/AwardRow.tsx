'use client';

import { Award } from "./awards.constants";
import { StarIcon } from "./StarIcon";



interface AwardRowProps {
  award: Award;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function AwardRow({
  award,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: AwardRowProps) {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden border-b border-gray-200"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Background slide animation - from bottom to top */}
      <div
        className={`absolute inset-0 origin-bottom bg-black transition-transform duration-700 ease-out ${
          isHovered ? 'scale-y-100' : 'scale-y-0'
        }`}
      />

      {/* Content */}
      <div className="relative z-10 grid grid-cols-12 gap-4 py-8 transition-colors duration-500 md:py-10">
        {/* Project Name */}
        <div
          className={`col-span-5 flex items-center gap-3 text-xl font-medium transition-colors duration-500 md:text-xl ${
            isHovered ? 'text-white' : 'text-black'
          }`}
        >
          <StarIcon isHovered={isHovered} />
          <span>- {award.project}</span>
        </div>

        {/* Year */}
        <div
          className={`col-span-3 flex items-center justify-center text-lg transition-colors duration-500 md:text-xl ${
            isHovered ? 'text-white' : 'text-gray-500'
          }`}
        >
          {award.year}
        </div>

        {/* Award Name */}
        <div
          className={`col-span-4 flex items-center justify-end text-base transition-colors duration-500 md:text-lg lg:text-xl ${
            isHovered ? 'text-white' : 'text-gray-400'
          }`}
        >
          {award.award}
        </div>
      </div>
    </div>
  );
}
