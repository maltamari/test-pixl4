import React from 'react';

interface HorizontalScrollTextProps {
  /**
   * Array of texts to display in the scroller
   */
  texts: string[];
  
  /**
   * Background color (for gradient fade effect)
   * @default '#e8e8e8'
   */
  backgroundColor?: string;
  
  /**
   * Gap between text items (Tailwind class)
   * @default 'gap-6 md:gap-8'
   */
  gapClass?: string;
  
  /**
   * Text size classes
   * @default 'text-sm md:text-base lg:text-lg'
   */
  textSizeClass?: string;
  
  /**
   * Show dash prefix before each text
   * @default true
   */
  showDash?: boolean;
  
  /**
   * Animation speed
   * @default 'animate-scroll-infinite'
   */
  animationClass?: string;
  
  /**
   * Container height
   * @default 'h-20 md:h-25'
   */
  heightClass?: string;
  
  /**
   * Direction of scroll
   * @default 'left' (scrolls to the left, text moves right to left)
   * 'right' (scrolls to the right, text moves left to right)
   */
  direction?: 'left' | 'right';
  StarColor?: string;
}

/**
 * Horizontal scrolling text component with infinite loop
 * Displays texts in a seamless horizontal scroll animation
 */
export function HorizontalScrollText({
  texts,
  backgroundColor = '#e8e8e8',
  StarColor = 'black/30',
  gapClass = 'gap-6 md:gap-8',
  textSizeClass = 'text-sm md:text-base lg:text-lg',
  showDash = true,
  animationClass = 'animate-scroll-infinite',
  heightClass = 'h-20 md:h-25',
  direction = 'left',
}: HorizontalScrollTextProps) {
  // Duplicate texts for seamless loop (3 times for smooth effect)
  const duplicatedTexts = [...texts, ...texts, ...texts];
  
  // Determine animation class based on direction
  const scrollAnimation = direction === 'right' 
    ? 'animate-scroll-infinite-reverse' 
    : animationClass;

  return (
    <div className={`relative w-full ${heightClass} flex items-center overflow-hidden`}>
      {/* Decorative Symbol - Fixed on Left */}
      <div className={`absolute left-0 top-9 text-${StarColor} text-4xl font-bold z-40`}>
        *
      </div>

      {/* Scrolling Text Container */}
      <div className={`flex ${gapClass} ${scrollAnimation} pl-8`}>
        {duplicatedTexts.map((text, index) => (
          <h2
            key={index}
            className={`${textSizeClass} font-mono font-medium tracking-wide text-gray-500 whitespace-nowrap flex items-center`}
          >
            {showDash && <span className={`border-${StarColor} m-1 border w-3 text-xl`}></span>}
            {text}
          </h2>
        ))}
      </div>

      {/* Left Gradient Fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 md:w-24 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to right, ${backgroundColor}, ${backgroundColor}CC, transparent)`,
        }}
      />

      {/* Right Gradient Fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-16 md:w-24 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to left, ${backgroundColor}, ${backgroundColor}CC, transparent)`,
        }}
      />
    </div>
  );
}