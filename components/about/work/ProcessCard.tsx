'use client';

import { forwardRef } from 'react';
import { ProcessCard as ProcessCardType } from './workProcess.constants';

interface ProcessCardProps {
  card: ProcessCardType;
}

export const ProcessCard = forwardRef<HTMLDivElement, ProcessCardProps>(
  ({ card }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-[#1a1a1a] rounded-3xl p-8 lg:p-10 border border-gray-800 hover:border-gray-600 transition-colors duration-500 group"
      >
        <div className="space-y-6">
          {/* Number */}
          <span className="text-6xl lg:text-7xl font-black text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
            {card.number}
          </span>

          {/* Title & Subtitle */}
          <div className="space-y-2">
            <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight">
              {card.title}
            </h3>
            <h4 className="text-3xl lg:text-4xl font-black text-gray-500 leading-tight">
              {card.subtitle}
            </h4>
          </div>

          {/* Description */}
          <p className="text-base lg:text-lg text-gray-400 leading-relaxed pt-4">
            {card.description}
          </p>
        </div>
      </div>
    );
  }
);

ProcessCard.displayName = 'ProcessCard';
