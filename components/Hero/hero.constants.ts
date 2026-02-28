import { GithubIcon, Globe, InstagramIcon, LinkedinIcon } from 'lucide-react';
import { SocialLink } from '.';

export const SERVICES = [
  'INTELLIGENT WORKFLOW AUTOMATION',
  'WEB & APP DEVELOPMENT',
  'BRAND STRATEGY & DESIGN',
  'DIGITAL MARKETING SOLUTIONS',
  'CLOUD INFRASTRUCTURE & SUPPORT',
  'DIGITAL PRESENCE & OPTIMIZATION',
] as const;

export const SOCIAL_LINKS: {
  left: SocialLink[];
  right: SocialLink[];
} = {
  left: [
    { href: 'https://instagram.com', icon: InstagramIcon },
    { href: 'https://linkedin.com', icon: LinkedinIcon },
  ],
  right: [
    { href: 'https://github.com', icon: GithubIcon },
    { href: 'https://yourwebsite.com', icon: Globe },
  ],
};

export const VIDEO_CONFIG = {
  src: 'https://videos.pexels.com/video-files/3141210/3141210-uhd_2560_1440_25fps.mp4',
  brightness: 0.4,
} as const;

export const HERO_CONTENT_HOME = {
  title: 'DIGITAL. FORWARD.',
  subtitle: 'Digital transformation that actually works.',
} as const;

export const HERO_CONTENT_ABOUT = {
  title: ' BRANDING',
  /** Fixed typo: was "STUDIOc" */
  subtitle: 'STUDIO',
} as const;