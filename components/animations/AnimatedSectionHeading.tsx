import React, { forwardRef } from 'react';

interface AnimatedSectionHeadingProps {
  /**
   * Array of text items to display
   */
  items: {
    text: string;
    className?: string;
    display?: 'block' | 'inline-block';
  }[];
  
  /**
   * Number of visible items (controlled)
   */
  visibleItems: number;
  
  /**
   * Base text size classes
   * @default 'text-5xl md:text-7xl lg:text-8xl xl:text-[150px]'
   */
  textSizeClass?: string;
  
  /**
   * Font family
   * @default "font-['Bebas_Neue']"
   */
  fontFamily?: string;
  
  /**
   * Additional container classes
   */
  className?: string;
  
  /**
   * Layout direction
   * @default 'vertical'
   */
  layout?: 'vertical' | 'horizontal';
  
  /**
   * Gap between items (for horizontal layout)
   * @default 'gap-8'
   */
  gap?: string;

  /**
   * Display mode for vertical layout
   * @default 'block' - each item on new line
   * 'inline' - items can appear next to each other
   */
  displayMode?: 'block' | 'inline';
}

/**
 * Animated section heading with staggered fade-in
 * Each item fades in and slides up independently
 */
export const AnimatedSectionHeading = forwardRef<HTMLDivElement, AnimatedSectionHeadingProps>(
  (
    {
      items,
      visibleItems,
      textSizeClass = 'text-5xl md:text-7xl lg:text-8xl xl:text-[150px]',
      fontFamily = "font-black",
      className = '',
      layout = 'vertical',
      gap = 'gap-8',
      displayMode = 'block',
    },
    ref
  ) => {
    const containerClass = layout === 'horizontal' 
      ? `flex items-end justify-between ${gap}` 
      : '';

    return (
      <div ref={ref} className={`${className} ${containerClass}`}>
        {layout === 'vertical' ? (
          <h1 className={`${textSizeClass} ${fontFamily} uppercase font-['Bebas_Neue'] font-extrabold lg:w-188 shrink-0`}>
            {items.map((item, index) => (
              <span
                key={index}
                className={`${item.display || displayMode} pe-8 transition-all duration-700 ${
                  index < visibleItems
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                } ${item.className || ''}`}
              >
                {item.text}
              </span>
            ))}
          </h1>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              className={`${textSizeClass} ${fontFamily} font-bold shrink-0`}
            >
              <span
                className={`block transition-all duration-700 uppercase ${
                  index < visibleItems
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                } ${item.className || ''}`}
              >
                {item.text}
              </span>
            </div>
          ))
        )}
      </div>
    );
  }
);

AnimatedSectionHeading.displayName = 'AnimatedSectionHeading';