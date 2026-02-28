'use client';

import { BlogPost } from './blog.types';
import { BlogCard } from './BlogCard';

interface BlogGridProps {
  posts: BlogPost[];
  showFeatured?: boolean;
  layout?: 'featured' | 'grid';
}

export function BlogGrid({ posts, showFeatured = true, layout = 'featured' }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">No blog posts available.</p>
      </div>
    );
  }

  // ─── Layout: grid (3 equal columns) ───────────────────────────────────────
  if (layout === 'grid') {
    return (
      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  }

  // ─── Layout: featured (big left + 2x2 right) ──────────────────────────────
  const featuredPost = showFeatured ? posts[0] : null;
  const gridPosts = showFeatured ? posts.slice(1, 5) : posts.slice(0, 4);

  return (
    <div className="mt-16">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
        {/* Featured Post */}
        {featuredPost && (
          <div className="w-full lg:w-[55%] lg:flex-shrink-0">
            <BlogCard post={featuredPost} featured />
          </div>
        )}

        {/* Right: 2x2 Grid on desktop, stacked on mobile */}
        {gridPosts.length > 0 && (
          <div className="flex-1 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
            {gridPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}