'use client';

import { SectionHeader } from '@/components/global/Serviceheader';
import { useScrollWordReveal } from '@/components/hooks/useScrollWord';
import { useRef } from 'react';
import { TEAM_HEADING_ITEMS, TEAM_MEMBERS, TEAM_ROTATING_TEXTS } from './team.constants';
import { TeamGrid } from './TeamGrid';


const TEAM_TOTAL_WORDS = 2;

export default function TeamSection() {
  const headingRef = useRef<HTMLDivElement>(null);

  const visibleWords = useScrollWordReveal({
    elementRef: headingRef,
    totalWords: TEAM_TOTAL_WORDS,
  });

  return (
    <section className="w-full px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <SectionHeader
          ref={headingRef}
          headingItems={TEAM_HEADING_ITEMS}
          rotatingTexts={TEAM_ROTATING_TEXTS}
          visibleWords={visibleWords}
          scrollTextColor="#e8e8e8"
          textSizeClass='text-4xl md:text-6xl lg:text-7xl'
          showCta={false}
          displayMode="inline"
        />

        {/* Team Grid */}
        <TeamGrid members={TEAM_MEMBERS} />
      </div>
    </section>
  );
}
