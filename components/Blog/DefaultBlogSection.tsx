'use client';

import BlogSection from './BlogSection';
import { BLOG_POSTS } from './blog.constants';

/**
 * DefaultBlogSection - Blog section with default posts
 * 
 * @example
 * ```tsx
 * import DefaultBlogSection from '@/components/blog/DefaultBlogSection';
 * 
 * export default function HomePage() {
 *   return <DefaultBlogSection />;
 * }
 * ```
 */
export default function DefaultBlogSection() {
  return <BlogSection posts={BLOG_POSTS} />;
}
