import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseProcessCardsAnimationOptions {
  sectionRef: RefObject<HTMLElement | null>;
  headerRef: RefObject<HTMLDivElement | null>;
  card1Ref: RefObject<HTMLDivElement | null>;
  card2Ref: RefObject<HTMLDivElement | null>;
  card3Ref: RefObject<HTMLDivElement | null>;
}

/**
 * Custom hook for Work Process cards animation
 * 
 * Features:
 * - Header fade-in animation
 * - Sequential card reveal (desktop only)
 * - Cards slide up from bottom
 * - Cards exit upward when scrolling
 * - Responsive (no animation on mobile)
 */
export function useProcessCardsAnimation({
  sectionRef,
  headerRef,
  card1Ref,
  card2Ref,
  card3Ref,
}: UseProcessCardsAnimationOptions) {
  useEffect(() => {
    if (
      !sectionRef.current ||
      !headerRef.current ||
      !card1Ref.current ||
      !card2Ref.current ||
      !card3Ref.current
    )
      return;

    const ctx = gsap.context(() => {
      // ═══════════════════════════════════════════════════════════════════
      // Header Animation
      // ═══════════════════════════════════════════════════════════════════
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            end: 'top 55%',
            scrub: 1.5,
          },
        }
      );

      // ═══════════════════════════════════════════════════════════════════
      // Cards Animation (Desktop only)
      // ═══════════════════════════════════════════════════════════════════
      ScrollTrigger.matchMedia({
        // ─── Desktop: Animated cards ─────────────────────────────────────
        '(min-width: 1024px)': function () {
          // Card 1 is always fixed at top
          gsap.set(card1Ref.current, { y: 0, opacity: 1 });

          // Cards 2 & 3 start below viewport
          gsap.set(card2Ref.current, { y: 350 });
          gsap.set(card3Ref.current, { y: 450 });

          // Single timeline for all card movements
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 2,
            },
          });

          // ─── PHASE 1: Cards Enter (rise from bottom) ─────────────────
          // Card 2 rises first
          timeline.to(
            card2Ref.current,
            {
              y: 0,
              ease: 'none',
            },
            0 // Start at timeline position 0
          );

          // Card 3 rises with slight delay (stagger effect)
          timeline.to(
            card3Ref.current,
            {
              y: 0,
              ease: 'none',
            },
            0.1 // Starts slightly after Card 2
          );

          // ─── PHASE 2: Cards Exit (move up and out) ───────────────────
          // Card 3 exits first
          timeline.to(
            card3Ref.current,
            {
              y: -450,
              ease: 'none',
            },
            0.7 // Later in timeline
          );

          // Card 2 exits with same timing
          timeline.to(
            card2Ref.current,
            {
              y: -350,
              ease: 'none',
            },
            0.7 // Same timing as Card 3
          );
        },

        // ─── Mobile: No animation (natural flow) ─────────────────────────
        '(max-width: 1023px)': function () {
          gsap.set(card1Ref.current, { y: 0, opacity: 1 });
          gsap.set(card2Ref.current, { y: 0, opacity: 1 });
          gsap.set(card3Ref.current, { y: 0, opacity: 1 });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, headerRef, card1Ref, card2Ref, card3Ref]);
}
