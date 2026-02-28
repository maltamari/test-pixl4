'use client';

import { useState } from 'react';
import { Award } from './awards.constants';
import { AwardRow } from './AwardRow';

interface AwardsListProps {
  awards: Award[];
}

export function AwardsList({ awards }: AwardsListProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="space-y-0">
      {awards.map((award) => (
        <AwardRow
          key={award.id}
          award={award}
          isHovered={hoveredId === award.id}
          onMouseEnter={() => setHoveredId(award.id)}
          onMouseLeave={() => setHoveredId(null)}
        />
      ))}
    </div>
  );
}
