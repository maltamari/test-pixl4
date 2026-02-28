import { useEffect, RefObject } from 'react';

/**
 * Attempts to autoplay a video element on mount.
 * Uses an empty deps array since refs are stable — re-running on every
 * render would cause unnecessary play() calls.
 */
export const useVideoAutoplay = (videoRef: RefObject<HTMLVideoElement | null>): void => {
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error: unknown) => {
        console.warn('Video autoplay failed:', error);
      });
    }
    // Intentionally run once on mount only.
    // Refs are stable objects — including videoRef in deps would cause
    // repeated play() calls without any benefit.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};