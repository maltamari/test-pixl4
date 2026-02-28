'use client';

import { useState, useRef } from 'react';

import { FAQImage } from './FAQImage';
import { FAQList } from './FAQList';
import { FAQSectionProps } from './faq.types';
import { useScrollWordReveal } from '@/components/hooks/useScrollWord';
import { SectionHeader } from '../Serviceheader';

export default function FAQSection({
  headingItems,
  rotatingTexts,
  faqs,
  imageSrc,  
  imageAlt = 'FAQ',
  ctaText = 'ASK A QUESTION',
  onCtaClick,
  backgroundColor,
  scrollTextColor = '#e8e8e8',
  totalWords = 2,
}: FAQSectionProps) {
  const headingRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<number | null>(null);

  const visibleWords = useScrollWordReveal({
    elementRef: headingRef,
    totalWords,
  });

  // حساب الزوم بناءً على ID السؤال المفتوح
  const getZoomScale = () => {
    if (openId === null) return 1;
    // كل سؤال له zoom level حسب ID
    return 1 + openId * 0.08; // 8% لكل سؤال
  };

  const zoomScale = getZoomScale();

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      className="w-full py-20"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          ref={headingRef}
          headingItems={headingItems}
          rotatingTexts={rotatingTexts}
          visibleWords={visibleWords}
          scrollTextColor={scrollTextColor}
          showCta={false}
          displayMode='inline'
          textSizeClass="text-6xl  md:text-7xl lg:text-[150px]"
        />

        {/* Content Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image with Zoom Effect */}
          <FAQImage src={imageSrc} alt={imageAlt} zoomScale={zoomScale} />

          {/* Right: FAQ List */}
          <FAQList
            faqs={faqs}
            openId={openId}
            onToggle={toggleFAQ}
            ctaText={ctaText}
            onCtaClick={onCtaClick}
          />
        </div>
      </div>
    </section>
  );
}
