import { useRef } from 'react';
import { useScrollWordReveal } from '../hooks/useScrollWord';
import { useStackedCardsScroll } from '../hooks/StackedCardsScroll';
import { WORK_TOTAL_WORDS } from '@/lib/constants/Projects.constants';
import { STACKED_CARDS_CONFIG } from '@/lib/constants/common.constants';


interface UseWorkAnimationsReturn {
  headingRef: React.RefObject<HTMLDivElement | null>;
  cardsRef: React.RefObject<HTMLDivElement | null>;
  visibleWords: number;
}

export function useWorkAnimations(): UseWorkAnimationsReturn {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const visibleWords = useScrollWordReveal({
    elementRef: headingRef,
    totalWords: WORK_TOTAL_WORDS,
  });

  useStackedCardsScroll({
    containerRef: cardsRef,
    cardSelector: '.project-row',
    scaleAmount: STACKED_CARDS_CONFIG.SCALE_AMOUNT,
    scrollMultiplier: STACKED_CARDS_CONFIG.SCROLL_MULTIPLIER,
    minWidth: STACKED_CARDS_CONFIG.MIN_WIDTH,
  });

  return {
    headingRef,
    cardsRef,
    visibleWords,
  };
}