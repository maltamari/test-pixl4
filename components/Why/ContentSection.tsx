'use client';

import { Stat } from '@/lib/constants/whyChooseUs.constants';
import { BrandVideo } from './BrandVideo';
import { StatCard } from './StatCard';

interface ContentSectionProps {
  stats: Stat[];
  statRefs: React.RefObject<HTMLDivElement | null>[];
}

export function ContentSection({ stats, statRefs }: ContentSectionProps) {
  return (
    <div className="space-y-16 md:space-y-24">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left: Portrait Video */}
        <div className="mt-12">
          <BrandVideo />
        </div>

        {/* Right: Stats Content */}
        <div>
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} statRef={statRefs[index]} />
          ))}
        </div>
      </div>
    </div>
  );
}