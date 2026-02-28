export interface Feature {
  text: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export const PACKAGE_HEADING_ITEMS = [
  { text: 'All-In', className: 'text-white' },
  { text: ' Package', className: 'text-gray-400' },
];

export const PACKAGE_ROTATING_TEXTS: string[] = [
  'Brand Suite',
  'Brand Suite',
  'Brand Suite',
];

export const PACKAGE_FEATURES: string[] = [
  'Custom Web Design',
  'Identity Development',
  'SEO Optimization',
  'Social Media Strategy',
  'Content Creation',
  'Ongoing Support',
];

export const PACKAGE_BENEFITS: Benefit[] = [
  { title: 'Time Savings', description: 'Focus on business' },
  { title: 'Expert Access', description: 'Skilled team support' },
  { title: 'Scalable Solutions', description: 'Growth-ready services' },
];

export const CLIENT_AVATARS: string[] = [
  '/avatars/client1.jpg',
  '/avatars/client2.jpg',
  '/avatars/client3.jpg',
  '/avatars/client4.jpg',
];

export const PACKAGE_PRICING = {
  AMOUNT: '$4999',
  PERIOD: '/ Project',
  TIMELINE: '1-2 weeks',
  RATING: '4.9/5',
  COMPANIES_HELPED: '+1k companies',
  GUARANTEE_DAYS: '7-day guarantee',
} as const;

export const PACKAGE_TOTAL_WORDS = 3;
