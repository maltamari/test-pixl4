// constants/blog.constants.ts

import { BlogPost } from './blog.types';

export const BLOG_HEADING_ITEMS = [
  { text: 'OUR', className: 'text-black' },
  { text: 'BLOG', className: 'text-gray-400' },
];

export const BLOG_ROTATING_TEXTS = [
  'OUR BLOG — OUR BLOG',
  'OUR BLOG — OUR BLOG',
  'OUR BLOG — OUR BLOG',
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    category: 'Strategy',
    title: 'How Storytelling Shapes the Future of Branding',
    readingTime: '7 min',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop',
    slug: 'how-storytelling-shapes-branding',
  },
  {
    id: '2',
    category: 'Branding',
    title: 'Building Emotional Brands That Inspire Connection',
    readingTime: '8 min',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
    slug: 'building-emotional-brands',
  },
  {
    id: '3',
    category: 'Design',
    title: 'Creating Cohesive Visual Systems for Digital Brands',
    readingTime: '5 min',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=600&fit=crop',
    slug: 'creating-visual-systems',
  },
  {
    id: '4',
    category: 'Design',
    title: 'Crafting Brand Strategies That Drive Real Growth',
    readingTime: '8 min',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=600&fit=crop',
    slug: 'brand-strategies-growth',
  },
  {
    id: '5',
    category: 'Design',
    title: 'The Minimalist Design Approach That Drives Clarity',
    readingTime: '7 min',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop',
    slug: 'minimalist-design-clarity',
  },
];

export const BLOG_TOTAL_WORDS = 2;