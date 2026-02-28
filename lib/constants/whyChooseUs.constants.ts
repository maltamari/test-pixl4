import { MEDIA_CONFIG } from './common.constants';

export interface Stat {
  id: string;
  number: number;
  suffix?: string;
  title: string;
  description: string;
  highlightedText?: string;
}

export const STATS_DATA: Stat[] = [
  {
    id: '1',
    number: 15,
    title: 'Successful Projects\nCompleted',
    description:
      "For over a decade, we've been shaping digital experiences and building strong brands.",
    highlightedText:
      'Our years of knowledge ensure every project is backed by skill, strategy, and creativity.',
  },
  {
    id: '2',
    number: 99,
    suffix: '%',
    title: 'Customer\nSatisfaction Rate',
    description:
      'We measure success by the impact we create. With a near-perfect satisfaction rate,',
    highlightedText:
      'our clients trust us to deliver solutions that exceed expectations every time.',
  },
];

export const WHY_CHOOSE_US_HEADING_ITEMS = [
  { text: 'Choose', className: 'text-black' },
  { text: 'Excellence', className: 'text-gray-400' },
];

export const WHY_CHOOSE_US_ROTATING_TEXTS: string[] = [
  'Why choose us',
  'Why choose us',
  'Why choose us',
];

export const WHY_CHOOSE_US_TOTAL_WORDS = 3;

export const BRAND_INFO = {
  NAME: 'PiXL4',
  ACCENT_COLOR: 'text-blue-500',
  COPYRIGHT: '(2010-25©)',
  /** @deprecated Use MEDIA_CONFIG.HERO_VIDEO_URL from common.constants.ts */
  VIDEO_URL: MEDIA_CONFIG.HERO_VIDEO_URL,
} as const;

export const COUNTER_ANIMATION_CONFIG = {
  DURATION: 2000,
  EASING: 'cubic-bezier(0.65, 0, 0.35, 1)',
  STAGGER_DELAY: 100,
  INITIAL_DELAY: 50,
  INTERSECTION_THRESHOLD: 0.2,
} as const;
