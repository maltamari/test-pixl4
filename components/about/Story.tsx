'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CTAButton } from '../ui/cta-button';
import { TextSlideUp } from '../global/TextSlideUp';
import { IconSlideUp } from '../global/IconSlideUp';
import { SectionHeader } from '../global/Serviceheader';
import { STORY_HEADING_ITEMS, STORY_ROTATING_TEXTS } from '@/lib/constants/Projects.constants';
import { useWorkAnimations } from '../effects/useWorkAnimations';

const StorySection: React.FC = () => {
  const { headingRef, visibleWords } = useWorkAnimations();

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="flex items-center flex-col mx-auto px-6 lg:px-12 py-20 lg:py-32">

        {/* ✅ SectionHeader بدل الـ heading القديم */}
        <SectionHeader
          ref={headingRef}
          headingItems={STORY_HEADING_ITEMS}
          rotatingTexts={STORY_ROTATING_TEXTS}
          visibleWords={visibleWords}
          scrollTextColor="#e8e8e8"
          textSizeClass="text-3xl md:text-5xl lg:text-7xl lg:w-full  text-center"
          showCta={false}
          containerClassName="lg:w-full  lg:items-center"
          centerClass="flex w-full flex-col items-center"
          displayMode="block"
        />

        {/* Description */}
        <div className="max-w-5xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-lg lg:text-xl text-gray-900 leading-relaxed">
            Born from a passion for design and innovation, we set out to redefine how 
            brands communicate in the digital era. What started as a small creative 
            studio evolved into a full-service branding agency — blending strategy, art, and 
            technology to craft experiences that inspire and endure.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <CTAButton className="py-8 px-14" />

          <Link href="#portfolio">
            <p className="group border-b w-50 gap-3 flex items-center border-black md:text-base font-bold">
              <TextSlideUp
                text="OUR PORTFOLIO"
                variant="smooth"
                stagger={50}
                className="w-40!"
                textClassName="text-black text-xl"
              />
              <IconSlideUp
                icon={<ArrowUpRight className="inline-block text-black" size={16} />}
                hoverIcon={<ArrowUpRight className="inline-block text-black" size={16} />}
                className="text-white"
                triggerOn="parent-hover"
                variant="smooth"
              />
            </p>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default StorySection;