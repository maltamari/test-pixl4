'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { BlogPost } from './blog.types';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const arrowRef = useRef<SVGSVGElement>(null);

  const handleMouseEnter = () => {
    if (arrowRef.current) {
      const tl = gsap.timeline();
      // طلع أعلى يمين (نفس اتجاه السهم)
      tl.to(arrowRef.current, {
        x: 12,
        y: -12,
        opacity: 0,
        duration: 0.35,
        ease: 'power2.in',
      })
        // ارجع من أسفل يسار
        .set(arrowRef.current, { x: -12, y: 12 })
        .to(arrowRef.current, {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.35,
          ease: 'power2.out',
        });
    }
  };

  return (
    <Link
      href={`/blog/${post.slug}`}
      onMouseEnter={handleMouseEnter}
      className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col h-full"
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden bg-gray-200 flex-shrink-0 h-[200px] ${
          featured ? 'lg:h-[500px]' : 'lg:h-[180px]'
        }`}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={featured ? '(max-width: 768px) 100vw, 55vw' : '(max-width: 768px) 100vw, 25vw'}
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-black text-white px-4 py-1.5 rounded-full text-xs font-medium">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-1 p-4 ${featured ? 'lg:p-8' : 'lg:p-5'}`}>
        <h3
          className={`font-black text-black leading-tight mb-4 group-hover:text-gray-700 transition-colors flex-1 text-sm ${
            featured ? 'lg:text-4xl' : 'lg:text-base'
          }`}
        >
          {post.title}
        </h3>

        <div className="flex items-center justify-between mt-auto">
          <p className="text-xs text-gray-500 lg:text-sm">
            Reading Time:{' '}
            <span className="font-medium text-black">{post.readingTime}</span>
          </p>

          {/* Arrow Button */}
          <div
            className={`rounded-full bg-black flex items-center justify-center overflow-hidden w-8 h-8 ${
              featured ? 'lg:w-12 lg:h-12' : ''
            }`}
          >
            <ArrowUpRight
              ref={arrowRef}
              className={`text-white w-3.5 h-3.5 ${featured ? 'lg:w-5 lg:h-5' : ''}`}
              strokeWidth={2}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}