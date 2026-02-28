import { useRef, useState, useEffect } from 'react';
import { Stat, COUNTER_ANIMATION_CONFIG } from '../constants/whyChooseUs.constants';
import { animateCounterNumber } from './counterAnimation';

interface UseCounterAnimationsOptions {
  stats: Stat[];
}

interface UseCounterAnimationsReturn {
  statRefs: React.RefObject<HTMLDivElement | null>[];
}

/**
 * Custom hook to handle counter animations with Intersection Observer
 * Animates numbers when they come into view
 */
export function useCounterAnimations({
  stats,
}: UseCounterAnimationsOptions): UseCounterAnimationsReturn {
  // Create refs for each stat card
  const statRefs = stats.map(() => useRef<HTMLDivElement>(null));
  const [animated, setAnimated] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const statId = target.getAttribute('data-stat-id');

            if (statId && !animated[statId]) {
              const stat = stats.find((s) => s.id === statId);
              if (stat) {
                animateCounterNumber(target, {
                  targetNumber: stat.number,
                  showPlusSign: stat.number === 15,
                });

                setAnimated((prev) => ({ ...prev, [statId]: true }));
              }
            }
          }
        });
      },
      {
        threshold: COUNTER_ANIMATION_CONFIG.INTERSECTION_THRESHOLD,
        rootMargin: '0px',
      }
    );

    // Observe all stat cards
    statRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup
    return () => {
      statRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stats, animated]);

  return { statRefs };
}