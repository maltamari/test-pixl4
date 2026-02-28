/**
 * Shared constants used across multiple components
 */

export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280,
} as const;

export const ANIMATION_DURATIONS = {
  FAST: 300,
  NORMAL: 500,
  SLOW: 700,
} as const;

export const STACKED_CARDS_CONFIG = {
  SCALE_AMOUNT: 0.95,
  SCROLL_MULTIPLIER: 100,
  MIN_WIDTH: 768,
} as const;

/**
 * Shared media assets referenced by multiple components.
 * Centralised here to prevent duplicate URL strings drifting out of sync.
 */
export const MEDIA_CONFIG = {
  HERO_VIDEO_URL:
    'https://videos.pexels.com/video-files/3141210/3141210-uhd_2560_1440_25fps.mp4',
} as const;