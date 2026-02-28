import { useState, useEffect } from 'react';
import { FLIP_ANIMATION_CONFIG } from './trustedBy.constants';

interface UseLogoFlipAnimationOptions {
  logosCount: number;
}

interface UseLogoFlipAnimationReturn {
  activeCardIndex: number | null;
  cardStates: boolean[];
}

/**
 * Custom hook to handle sequential logo flip animation
 * 
 * Flips cards one by one in sequence, then reverses the animation
 * Creates an infinite loop effect
 * 
 * @param logosCount - Number of logo cards to animate
 */
export function useLogoFlipAnimation({
  logosCount,
}: UseLogoFlipAnimationOptions): UseLogoFlipAnimationReturn {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [cardStates, setCardStates] = useState<boolean[]>(Array(logosCount).fill(false));

  useEffect(() => {
    const { FLIP_DURATION, PAUSE_BETWEEN_FLIPS, PAUSE_BETWEEN_CYCLES } =
      FLIP_ANIMATION_CONFIG;

    let cycleCount = 0;
    let timeoutId: NodeJS.Timeout;

    /**
     * Recursively flip cards one by one
     * @param index - Current card index
     * @param shouldFlipToBack - Whether to flip to back (true) or front (false)
     */
    const flipNext = (index: number, shouldFlipToBack: boolean) => {
      // If we've reached the end of the array
      if (index >= logosCount) {
        cycleCount++;

        // After every 2 cycles (once forward, once backward), restart
        setTimeout(() => {
          flipNext(0, cycleCount % 2 === 0);
        }, PAUSE_BETWEEN_CYCLES);
        return;
      }

      // Activate animation for current card
      setActiveCardIndex(index);

      // After flip animation completes
      timeoutId = setTimeout(() => {
        // Update card state
        setCardStates((prev) => {
          const newStates = [...prev];
          newStates[index] = shouldFlipToBack;
          return newStates;
        });

        setActiveCardIndex(null);

        // Move to next card
        setTimeout(() => {
          flipNext(index + 1, shouldFlipToBack);
        }, PAUSE_BETWEEN_FLIPS);
      }, FLIP_DURATION);
    };

    // Start from index 0, flip to back (true)
    flipNext(0, true);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [logosCount]);

  return {
    activeCardIndex,
    cardStates,
  };
}
