import { useState, useEffect } from 'react';

interface UseMobileDetectionOptions {
  breakpoint?: number;
}

/**
 * Returns true when the viewport width is below the given breakpoint.
 * Uses a lazy initializer to avoid an SSR/hydration mismatch — the initial
 * state reads from window immediately on the client during first render
 * instead of always starting as `false`.
 */
export function useMobileDetection(options?: UseMobileDetectionOptions): boolean {
  const { breakpoint = 1024 } = options ?? {};

  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
}