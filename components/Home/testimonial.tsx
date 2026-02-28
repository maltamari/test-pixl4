'use client';

import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { AnimatedSectionHeading } from '@/components/animations/AnimatedSectionHeading';
import { useScrollWordReveal } from '../hooks/useScrollWord';
import { CTAButton } from '../ui/cta-button';

const headingItems = [
  { text: 'Shared', className: 'text-black' },
  { text: 'Success', className: 'text-[#999999]' },
];

interface Testimonial {
  id: number;
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
    rating: number;
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: 'Results-Driven Approach...',
    description: 'We saw immediate results in our online visibility and engagement. Their strategies are effective, data-driven, and tailored to our needs.',
    author: {
      name: 'Emily Carter',
      avatar: '/avatars/emily.jpg',
      rating: 4.9,
    },
  },
  {
    id: 2,
    title: 'Innovative Solutions...',
    description: 'They consistently deliver fresh ideas and innovative solutions that keep our brand ahead of the curve. A true asset to our business.',
    author: {
      name: 'James Lawson',
      avatar: '/avatars/james.jpg',
      rating: 5.0,
    },
  },
  {
    id: 3,
    title: 'Outstanding Creativity...',
    description: 'The team brought our vision to life with a level of creativity and precision that exceeded expectations. Our brand now stands out in a crowded market.',
    author: {
      name: 'Sarah Mitchell',
      avatar: '/avatars/sarah.jpg',
      rating: 5.0,
    },
  },
  {
    id: 4,
    title: 'Reliable Partner...',
    description: 'From concept to launch, they were with us every step of the way. Their professionalism and attention to detail made the entire process seamless.',
    author: {
      name: 'Daniel Roberts',
      avatar: '/avatars/daniel.jpg',
      rating: 4.9,
    },
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-black font-semibold mr-2">{rating}</span>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 fill-orange-400"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-linear-to-br from-gray-100 to-gray-50 rounded-3xl p-8 md:p-10 flex flex-col justify-between h-full">
      {/* Quote Icon */}
      <div className="mb-6 shrink-0">
        <svg className="w-16 h-16 text-gray-300 opacity-50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col mb-6">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black mb-4 leading-tight shrink-0">
          {testimonial.title}
        </h3>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed flex-1">
          {testimonial.description}
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-200 shrink-0">
        <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden shrink-0">
          <Image
            src={testimonial.author.avatar}
            alt={testimonial.author.name}
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-black font-semibold text-lg">
            {testimonial.author.name}
          </h4>
          <StarRating rating={testimonial.author.rating} />
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const prevIconRef = useRef<SVGSVGElement>(null);
  const nextIconRef = useRef<SVGSVGElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const visibleWords = useScrollWordReveal({
    elementRef: headingRef,
    totalWords: 2,
  });

  const totalPairs = Math.ceil(testimonials.length / 2);

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const container = cardsContainerRef.current;
    if (!container) return;

    const allPairs = container.querySelectorAll('[class*="pair-"]');
    const currentPair = Array.from(allPairs)[currentIndex] as HTMLElement;
    
    const nextIndex = (currentIndex + 1) % totalPairs;
    const nextPair = Array.from(allPairs)[nextIndex] as HTMLElement;
    
    if (currentPair && nextPair) {
      gsap.set(nextPair, { display: 'grid', x: 50, opacity: 0 });
      
      gsap.to(currentPair, {
        x: -50,
        opacity: 0,
        duration: 0.3,
        ease: 'power1.out',
      });
      
      gsap.to(nextPair, {
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: 'power1.out',
        onComplete: () => {
          gsap.set(currentPair, { display: 'none' });
          setCurrentIndex(nextIndex);
          setIsAnimating(false);
        }
      });
    }
  };

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const container = cardsContainerRef.current;
    if (!container) return;

    const allPairs = container.querySelectorAll('[class*="pair-"]');
    const currentPair = Array.from(allPairs)[currentIndex] as HTMLElement;
    
    const prevIndex = (currentIndex - 1 + totalPairs) % totalPairs;
    const prevPair = Array.from(allPairs)[prevIndex] as HTMLElement;
    
    if (currentPair && prevPair) {
      gsap.set(prevPair, { display: 'grid', x: -50, opacity: 0 });
      
      gsap.to(currentPair, {
        x: 50,
        opacity: 0,
        duration: 0.3,
        ease: 'power1.out',
      });
      
      gsap.to(prevPair, {
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: 'power1.out',
        onComplete: () => {
          gsap.set(currentPair, { display: 'none' });
          setCurrentIndex(prevIndex);
          setIsAnimating(false);
        }
      });
    }
  };

  // Animation للأيقونة
  const handlePrevHover = () => {
    if (prevIconRef.current) {
      const tl = gsap.timeline();
      tl.to(prevIconRef.current, {
        x: -15,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
      })
      .set(prevIconRef.current, { x: 15 })
      .to(prevIconRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.25,
        ease: 'power2.out',
      });
    }
  };

  const handleNextHover = () => {
    if (nextIconRef.current) {
      const tl = gsap.timeline();
      tl.to(nextIconRef.current, {
        x: 15,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
      })
      .set(nextIconRef.current, { x: -15 })
      .to(nextIconRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.25,
        ease: 'power2.out',
      });
    }
  };

  return (
    <section className="w-full py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="mb-16 md:mb-24">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <AnimatedSectionHeading
              items={headingItems}
              visibleItems={visibleWords}
              textSizeClass="text-6xl md:text-7xl lg:text-[150px]"
              layout="vertical"

            />
            <CTAButton 
              className="px-10 font-sans py-5.5 text-xl bg-black text-white"
              text="VIEW ALL"
              fullWidth={false}
              showStar={false}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side - Static Image */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl overflow-hidden bg-gray-200 w-full" style={{ aspectRatio: '3/4' }}>
              <div className="relative w-full h-full">
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <button 
                    className="w-20 h-20 rounded-full bg-black/80 hover:bg-black transition-colors flex items-center justify-center group"
                    aria-label="Play video"
                  >
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                <Image
                  src="/girl-testimonial.jpg"
                  alt="Emma Waltz testimonial"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Info Overlay */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 z-20">
                  <h4 className="text-black font-semibold text-lg mb-1">Emma Waltz</h4>
                  <StarRating rating={5.0} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Cards Slider */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Cards Container */}
              <div ref={cardsContainerRef} className="relative overflow-hidden min-h-225 md:min-h-125 ">
                {Array.from({ length: totalPairs }).map((_, pairIndex) => {
                  const startIdx = pairIndex * 2;
                  const card1 = testimonials[startIdx];
                  const card2 = testimonials[startIdx + 1];

                  return (
                    <div
                      key={pairIndex}
                      className={`pair-${pairIndex} grid grid-cols-1 md:grid-cols-2 gap-6 absolute inset-0`}
                      style={{
                        display: pairIndex === 0 ? 'grid' : 'none',
                        gridAutoRows: '1fr',
                      }}
                    >
                      {/* Card 1 */}
                      {card1 && (
                        <div className="h-full">
                          <TestimonialCard testimonial={card1} />
                        </div>
                      )}

                      {/* Card 2 */}
                      {card2 && (
                        <div className="h-full">
                          <TestimonialCard testimonial={card2} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Navigation - مع خطوط أسمك */}
              <div className="flex items-center justify-end gap-4 mt-8">
                {/* Previous Button */}
                <button
                  onClick={handlePrev}
                  onMouseEnter={handlePrevHover}
                  disabled={isAnimating}
                  className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 bg-gray-100 border-2 border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-gray-400 hover:scale-90 disabled:opacity-50"
                >
                      <svg
                        ref={prevIconRef}
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line x1="20" y1="12" x2="-1" y2="12" />
                        <path d="M7 6l-6 6 6 6" />
                      </svg>
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  onMouseEnter={handleNextHover}
                  disabled={isAnimating}
                  className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 bg-gray-100 border-2 border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-gray-400 hover:scale-90 disabled:opacity-50"
                >
                    <svg
                      ref={nextIconRef}
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line x1="20" y1="12" x2="-1" y2="12" />
                      <path d="M15 18l6-6-6-6" />

                    </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}