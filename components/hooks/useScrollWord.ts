import { useEffect, useState, RefObject } from 'react';

interface UseScrollWordRevealOptions {
  /**
   * Reference to the element to track
   */
  elementRef: RefObject<HTMLElement | HTMLDivElement | HTMLHeadingElement | null>;
  
  /**
   * Total number of words to reveal
   */
  totalWords: number;
  
  /**
   * Starting point (0-1) - when element enters viewport
   * @default 0.9
   */
  startThreshold?: number;
  
  /**
   * Distance to complete animation (0-1) 
   * @default 0.3
   */
  animationRange?: number;
}

/**
 * Custom hook for scroll-triggered word reveal animation
 * Returns the number of visible words based on scroll position
 */
export function useScrollWordReveal({
  elementRef,
  totalWords,
  startThreshold = 0.9,
  animationRange = 0.3,
}: UseScrollWordRevealOptions): number {
  const [visibleWords, setVisibleWords] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress based on element position
        const scrollProgress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight * startThreshold - rect.top) / (windowHeight * animationRange)
          )
        );
        
        const wordIndex = Math.floor(scrollProgress * totalWords);
        setVisibleWords(Math.min(wordIndex, totalWords));
      }
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementRef, totalWords, startThreshold, animationRange]);

  return visibleWords;
}