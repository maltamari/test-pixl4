'use client';

import { forwardRef } from 'react';
import { AnimatedSectionHeading } from '../animations/AnimatedSectionHeading';
import { HorizontalScrollText } from '../animations/Horizontalscrolltext';
import { CTAButton } from '../ui/cta-button';

interface SectionHeaderProps {
  headingItems: Array<{ text: string; className: string }>;
  rotatingTexts: string[];
  visibleWords: number;
  scrollTextColor?: string;
  starColor?: string;
  ctaText?: string;
  ctaClassName?: string;
  textSizeClass?: string;
  showCta?: boolean;
  onCtaClick?: () => void;
  scrollTextWidth?: string;
  containerClassName?: string;
  centerClass?:string;
  displayMode?: 'inline' | 'block';
}

/**
 * Universal section header component
 * 
 * Used by all sections: Services, Work, WhyChooseUs, and more
 * 
 * Features:
 * - Animated section heading
 * - Horizontal scrolling text
 * - Optional CTA button
 * - Fully customizable styling
 * 
 * @example
 * <SectionHeader
 *   ref={headingRef}
 *   headingItems={HEADING_ITEMS}
 *   rotatingTexts={ROTATING_TEXTS}
 *   visibleWords={visibleWords}
 *   ctaText="Get Started"
 * />
 */
export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
      headingItems,
      rotatingTexts,
      visibleWords,
      scrollTextColor = '#000000',
      starColor = 'gray-400',
      ctaText = 'Get In Touch',
      ctaClassName = '',
      textSizeClass = 'text-8xl xl:text-[150px]',
      showCta = true,
      onCtaClick,
      scrollTextWidth = 'w-60',
      containerClassName = '',
      displayMode = 'block',
      centerClass=""
    },
    ref
  ) => {
    return (
      <div className={`flex flex-col px-4 md:px-6 lg:px-8  lg:flex-row items-start lg:items-end justify-between gap-4 mb-12 text-sm md:text-base w-full ${containerClassName}`}>
        <div className={`relative ${centerClass}`}>
          <div className={scrollTextWidth}>
            <HorizontalScrollText
              texts={rotatingTexts}
              backgroundColor={scrollTextColor}
              StarColor={starColor}
            />
          </div>
              <AnimatedSectionHeading
                ref={ref}
                items={headingItems}
                visibleItems={visibleWords}
                textSizeClass={`${textSizeClass} transition-colors duration-500`}
                layout="vertical"
                displayMode={displayMode}
              />
        </div>
        {showCta && (
          <CTAButton
            text={ctaText}
            className={`px-10 max-sm:mt-5 font-sans py-4 lg:py-5.5 text-base lg:text-xl ${ctaClassName}`}
            onClick={onCtaClick}
          />
        )}
      </div>
    );
  }
);

SectionHeader.displayName = 'SectionHeader';