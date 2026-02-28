'use client';

import { useRef } from 'react';
import { useScrollWordReveal } from '../hooks/useScrollWord';
import { SectionHeader } from '../global/Serviceheader';
import { BlogGrid } from './BlogGrid';
import { BlogPost } from './blog.types';

const NEWSLETTER_HEADING_ITEMS = [
  { text: 'ALL', className: 'text-black' },
  { text: 'POSTS', className: 'text-gray-400' },
];

const NEWSLETTER_ROTATING_TEXTS = [
  'STAY INSPIRED — STAY INSPIRED',
  'STAY INSPIRED — STAY INSPIRED',
];

const ALL_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'how-storytelling-shapes-the-future-of-branding',
    title: 'How Storytelling Shapes the Future of Branding',
    category: 'Strategy',
    readingTime: '7 min',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop',
  },
  {
    id: '2',
    slug: 'building-emotional-brands-that-inspire-connection',
    title: 'Building Emotional Brands That Inspire Connection',
    category: 'Branding',
    readingTime: '8 min',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop',
  },
  {
    id: '3',
    slug: 'creating-cohesive-visual-systems-for-digital-brands',
    title: 'Creating Cohesive Visual Systems for Digital Brands',
    category: 'Design',
    readingTime: '5 min',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop',
  },
  {
    id: '4',
    slug: 'crafting-brand-strategies-that-drive-real-growth',
    title: 'Crafting Brand Strategies That Drive Real Growth',
    category: 'Design',
    readingTime: '8 min',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop',
  },
  {
    id: '5',
    slug: 'the-minimalist-design-approach-that-drives-clarity',
    title: 'The Minimalist Design Approach That Drives Clarity',
    category: 'Design',
    readingTime: '7 min',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop',
  },
  {
    id: '6',
    slug: 'the-power-of-visual-identity-in-modern-brands',
    title: 'The Power of Visual Identity in Modern Brands',
    category: 'Branding',
    readingTime: '5 min',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop',
  },
];

export default function NewsletterSection() {
  const headingRef = useRef<HTMLDivElement>(null);

  const visibleWords = useScrollWordReveal({
    elementRef: headingRef,
    totalWords: 2,
  });

  return (
    <section className="relative w-full rounded-4xl  py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <SectionHeader
          ref={headingRef}
          headingItems={NEWSLETTER_HEADING_ITEMS}
          rotatingTexts={NEWSLETTER_ROTATING_TEXTS}
          visibleWords={visibleWords}
          scrollTextColor="#e8e8e8"
          showCta={false}
          displayMode="inline"
          textSizeClass="text-6xl md:text-7xl lg:text-[150px]"
        />

        {/* Blog Grid — 3 equal columns */}
        <BlogGrid posts={ALL_POSTS} showFeatured={false} layout="grid" />
      </div>
    </section>
  );
}