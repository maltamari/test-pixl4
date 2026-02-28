'use client';

import { useRef } from 'react';
import { useScrollWordReveal } from '../hooks/useScrollWord';
import { PackageGrid } from './PackageGrid';
import { CLIENT_AVATARS, PACKAGE_BENEFITS, PACKAGE_FEATURES,
   PACKAGE_HEADING_ITEMS, PACKAGE_PRICING, PACKAGE_ROTATING_TEXTS,
   PACKAGE_TOTAL_WORDS } from './package.constants';
import { SectionHeader } from '../global/Serviceheader';


export default function Package() {
  const headingRef = useRef<HTMLDivElement>(null);

  const visibleWords = useScrollWordReveal({
    elementRef: headingRef,
    totalWords: PACKAGE_TOTAL_WORDS,
  });

  return (
    <section className="w-full py-20 bg-black rounded-4xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          ref={headingRef}
          headingItems={PACKAGE_HEADING_ITEMS}
          rotatingTexts={PACKAGE_ROTATING_TEXTS}
          visibleWords={visibleWords}
          scrollTextColor="#000000"
          ctaClassName='hidden'
          displayMode="inline"
          textSizeClass="text-6xl md:text-7xl lg:text-[150px] "
        />

        {/* Package Grid */}
        <PackageGrid
          features={PACKAGE_FEATURES}
          timeline={PACKAGE_PRICING.TIMELINE}
          avatars={CLIENT_AVATARS}
          rating={PACKAGE_PRICING.RATING}
          companiesHelped={PACKAGE_PRICING.COMPANIES_HELPED}
          guarantee={PACKAGE_PRICING.GUARANTEE_DAYS}
          amount={PACKAGE_PRICING.AMOUNT}
          period={PACKAGE_PRICING.PERIOD}
          benefits={PACKAGE_BENEFITS}
        />
      </div>
    </section>
  );
}
