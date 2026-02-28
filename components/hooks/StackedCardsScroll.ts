import { RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface UseStackedCardsScrollOptions {
  /** Reference to the scroll section container */
  containerRef: RefObject<HTMLDivElement | null>;

  /**
   * CSS selector for card rows
   * @default '.project-row'
   */
  cardSelector?: string;

  /**
   * Scale factor for cards when scrolling
   * @default 0.95
   */
  scaleAmount?: number;

  /**
   * Scroll distance multiplier
   * @default 200
   */
  scrollMultiplier?: number;

  /**
   * Minimum screen width to enable animation (in pixels)
   * @default 768
   */
  minWidth?: number;

  /**
   * Pin the section during scroll
   * @default true
   */
  pin?: boolean;

  /**
   * Scrub amount (smooth scrolling)
   * @default 1
   */
  scrub?: number;
}

/**
 * Custom hook for GSAP scroll-triggered stacked cards animation.
 * Cards stack on top of each other with a scale effect on desktop only.
 */
export function useStackedCardsScroll({
  containerRef,
  cardSelector = '.project-row',
  scaleAmount = 0.95,
  scrollMultiplier = 100,
  minWidth = 768,
  pin = true,
  scrub = 1,
}: UseStackedCardsScrollOptions) {
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const items = gsap.utils.toArray<HTMLElement>(cardSelector, containerRef.current);

      if (items.length === 0) return;

      const mm = gsap.matchMedia();

      // Desktop: enable stacked scroll animation
      mm.add(`(min-width: ${minWidth}px)`, () => {
        // Set initial position for all items except the first
        items.forEach((item, index) => {
          if (index !== 0) {
            gsap.set(item, { yPercent: 100 });
          }
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin,
            start: 'top 140px',
            end: () => `+=${items.length * scrollMultiplier}%`,
            scrub,
            invalidateOnRefresh: true,
          },
          defaults: { ease: 'none' },
        });

        items.forEach((item, index) => {
          const nextItem = items[index + 1];

          // Scale current item down as the next slides into view
          timeline.to(item, { scale: scaleAmount });

          if (nextItem) {
            timeline.to(nextItem, { yPercent: 0 }, '<');
          }
        });
      });

      // Mobile: clear all animation values so layout is unaffected
      mm.add(`(max-width: ${minWidth - 1}px)`, () => {
        items.forEach((item) => {
          gsap.set(item, {
            yPercent: 0,
            scale: 1,
            clearProps: 'all',
          });
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );
}