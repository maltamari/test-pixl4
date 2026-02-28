'use client';

import { useRef } from 'react';
import { AwardsTableHeader } from './AwardsTableHeader';
import { AwardsList } from './AwardsList';
import { useScrollWordReveal } from '@/components/hooks/useScrollWord';
import { AWARDS_DATA, AWARDS_HEADING_ITEMS, AWARDS_ROTATING_TEXTS, AWARDS_TABLE_HEADERS, AWARDS_TOTAL_WORDS } from './awards.constants';
import { SectionHeader } from '@/components/global/Serviceheader';


export default function AwardsSection() {
  const headingRef = useRef<HTMLDivElement>(null);

  const visibleWords = useScrollWordReveal({
    elementRef: headingRef,
    totalWords: AWARDS_TOTAL_WORDS,
  });

  return (
    <section className="w-full px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <SectionHeader
          ref={headingRef}
          headingItems={AWARDS_HEADING_ITEMS}
          rotatingTexts={AWARDS_ROTATING_TEXTS}
          visibleWords={visibleWords}
          textSizeClass='text-4xl md:text-6xl lg:text-7xl'
          scrollTextColor="#e8e8e8"
          showCta={false}
        />

        {/* Table Header */}
        <AwardsTableHeader headers={AWARDS_TABLE_HEADERS} />

        {/* Awards List */}
        <AwardsList awards={AWARDS_DATA} />
      </div>
    </section>
  );
}
