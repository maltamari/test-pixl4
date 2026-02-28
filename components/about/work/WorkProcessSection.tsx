'use client';

import { useScrollWordReveal } from '@/components/hooks/useScrollWord';
import { useRef } from 'react';
import { PROCESS_COUNT, PROCESS_STEPS, WORK_PROCESS_HEADING_ITEMS, WORK_PROCESS_ROTATING_TEXTS, WORK_PROCESS_TOTAL_WORDS } from './workProcess.constants';
import { SectionHeader } from '@/components/global/Serviceheader';
import { ProcessCounter } from './ProcessCounter';
import { ProcessCard } from './ProcessCard';
import { useProcessCardsAnimation } from './useProcessCardsAnimation';

export default function WorkProcessSection() {
  // Refs
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  // Scroll word reveal
  const visibleWords = useScrollWordReveal({
    elementRef: headingRef,
    totalWords: WORK_PROCESS_TOTAL_WORDS,
  });

  // Cards animation
  useProcessCardsAnimation({
    sectionRef ,
    headerRef,
    card1Ref,
    card2Ref,
    card3Ref,
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black py-20 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          {/* Title */}
          <div ref={headerRef} className="flex-1">
            <SectionHeader
              ref={headingRef}
              headingItems={WORK_PROCESS_HEADING_ITEMS}
              rotatingTexts={WORK_PROCESS_ROTATING_TEXTS}
              visibleWords={visibleWords}
              scrollTextColor="#000000"
              starColor="white"
              showCta={false}
              textSizeClass="text-7xl lg:text-9xl"
              containerClassName="mb-16 lg:mb-20"
              displayMode="block"
            />
          </div>

          {/* Counter */}
          <ProcessCounter count={PROCESS_COUNT} />
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <ProcessCard ref={card1Ref} card={PROCESS_STEPS[0]} />
          <ProcessCard ref={card2Ref} card={PROCESS_STEPS[1]} />
          <ProcessCard ref={card3Ref} card={PROCESS_STEPS[2]} />
        </div>
      </div>
    </section>
  );
}
