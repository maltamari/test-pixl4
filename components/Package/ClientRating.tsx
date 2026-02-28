'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';

interface ClientRatingProps {
  avatars: string[];
  rating: string;
  companiesHelped: string;
}

export function ClientRating({ avatars, rating, companiesHelped }: ClientRatingProps) {
  return (
    <div className="flex items-center max-sm:flex-col gap-4">
      {/* Avatars */}
      <div className="flex -space-x-3">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="w-12 h-12 rounded-full border-2 border-[#1C1C1C] overflow-hidden bg-gray-700"
          >
            <Image
              src={avatar}
              alt={`Client ${index + 1}`}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Rating */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
          ))}
          <span className="text-white font-semibold ml-2">{rating}</span>
        </div>
        <p className="text-gray-400 text-sm">We've helped {companiesHelped}</p>
      </div>
    </div>
  );
}
