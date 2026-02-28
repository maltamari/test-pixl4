'use client';

import { useScrollWordReveal } from '@/components/hooks/useScrollWord';
import { useCounterAnimations } from '@/lib/constants/useCounterAnimations';
import { STATS_DATA, WHY_CHOOSE_US_HEADING_ITEMS, WHY_CHOOSE_US_ROTATING_TEXTS, WHY_CHOOSE_US_TOTAL_WORDS } from '@/lib/constants/whyChooseUs.constants';
import { useRef } from 'react';
import { ContentSection } from './ContentSection';
import { SectionHeader } from '../global/Serviceheader';


export default function WhyChooseUs() {
  const headingRef = useRef<HTMLDivElement>(null);

  const visibleWords = useScrollWordReveal({
    elementRef: headingRef,
    totalWords: WHY_CHOOSE_US_TOTAL_WORDS,
  });

  const { statRefs } = useCounterAnimations({
    stats: STATS_DATA,
  });

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          ref={headingRef}
          headingItems={WHY_CHOOSE_US_HEADING_ITEMS}
          rotatingTexts={WHY_CHOOSE_US_ROTATING_TEXTS}
          visibleWords={visibleWords}
          scrollTextColor="#e8e8e8"
          textSizeClass="text-6xl md:text-7xl lg:text-[150px]"
        />

        {/* Content: Video + Stats */}
        <ContentSection stats={STATS_DATA} statRefs={statRefs} />
      </div>
    </section>
  );
}
