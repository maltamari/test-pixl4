'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { BlogPost } from './blog.types';

interface AllPostsSectionProps {
  posts: BlogPost[];
  backgroundColor?: string;
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-200 flex-shrink-0 h-[220px] lg:h-[280px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 lg:p-8">
        <h3 className="font-black text-black leading-tight mb-6 group-hover:text-gray-700 transition-colors flex-1 text-xl lg:text-2xl uppercase">
          {post.title}
        </h3>

        <div className="flex items-center justify-between mt-auto">
          <p className="text-gray-500 text-sm">
            Reading Time:{' '}
            <span className="font-semibold text-black">{post.readingTime}</span>
          </p>

          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 text-white" strokeWidth={2} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function AllPostsSection({
  posts,
  backgroundColor,
}: AllPostsSectionProps) {
  return (
    <section
      className="w-full py-20 md:py-32"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-6xl md:text-7xl lg:text-[120px] font-black leading-none mb-16 uppercase">
          <span className="text-black">ALL </span>
          <span className="text-gray-400">POSTS</span>
        </h2>

        {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}