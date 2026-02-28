import { BREAKPOINTS } from './common.constants';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  overlayColor: string;
}

export const SERVICES_DATA: Service[] = [
  {
    id: '01',
    title: 'AUTOMATION',
    description:
      'We design intelligent automation systems that replace manual workflows, reduce operational friction, and help teams operate faster with fewer resources.',
    image: '/floral.jpeg',
    overlayColor: '#30527d',
  },
  {
    id: '02',
    title: 'PLATFORMS',
    description:
      'We build modern, high-performance websites and digital platforms using AI-assisted technologies to ensure speed, scalability, and long-term flexibility.',
    image: '/GOLDEN.jpeg',
    overlayColor: '#60a5fa',
  },
  {
    id: '03',
    title: 'VISIBILITY',
    description:
      'We optimize digital content and platforms so search engines and AI systems can clearly understand, rank, and reference your business.',
    image: '/floral.jpeg',
    overlayColor: '#9ca3af',
  },
  {
    id: '04',
    title: 'INFRASTRUCTURE',
    description:
      'We provide the technical foundation – hosting, performance, and support – that keeps digital platforms secure, reliable, and scalable.',
    image: '/GOLDEN.jpeg',
    overlayColor: '#60a5fa',
  },
];

export const HEADING_ITEMS = [
  { text: 'Creative', className: 'text-white' },
  { text: 'Solutions', className: 'text-gray-400' },
];

export const ROTATING_TEXTS: string[] = [
  'Our Services',
  'Our Services',
  'Our Services',
];

export const IMAGE_SIZE = 264;
export const IMAGE_HALF_SIZE = IMAGE_SIZE / 2;
export const MAX_ROTATION_DEGREES = 5;

// Use shared breakpoint constant
export const MOBILE_BREAKPOINT = BREAKPOINTS.TABLET;