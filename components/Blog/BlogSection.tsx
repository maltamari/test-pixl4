'use client';

import { useRef } from 'react';
import { useScrollWordReveal } from '../hooks/useScrollWord';
import { BlogGrid } from './BlogGrid';
import { BlogSectionProps } from './blog.types';
import {
  BLOG_HEADING_ITEMS,
  BLOG_ROTATING_TEXTS,
  BLOG_TOTAL_WORDS,
} from './blog.constants';
import { SectionHeader } from '../global/Serviceheader';

export default function BlogSection({
  headingItems = BLOG_HEADING_ITEMS,
  rotatingTexts = BLOG_ROTATING_TEXTS,
  posts,
  showFeatured = true,
  maxPosts,
  backgroundColor,
  scrollTextColor = '#e8e8e8',
}: BlogSectionProps) {
  const headingRef = useRef<HTMLDivElement>(null);

  const visibleWords = useScrollWordReveal({
    elementRef: headingRef,
    totalWords: BLOG_TOTAL_WORDS,
  });

  // Limit posts if maxPosts is specified
  const displayPosts = maxPosts ? posts.slice(0, maxPosts) : posts;

  return (
    <section
      className="w-full py-20 md:py-32"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          ref={headingRef}
          headingItems={headingItems}
          rotatingTexts={rotatingTexts}
          visibleWords={visibleWords}
          scrollTextColor={scrollTextColor}
          showCta={false}
          displayMode="inline"
          textSizeClass="text-6xl md:text-7xl lg:text-[150px]"
        />

        {/* Blog Grid */}
        <BlogGrid posts={displayPosts} showFeatured={showFeatured} layout='featured'/>
      </div>
    </section>
  );
}
