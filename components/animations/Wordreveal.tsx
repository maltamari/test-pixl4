import React, { forwardRef } from 'react';

interface WordRevealProps {
  /**
   * Array of words to reveal
   */
  words: string[];
  
  /**
   * Number of visible words (controlled)
   */
  visibleWords: number;
  
  /**
   * Base text size classes
   * @default 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
   */
  textSizeClass?: string;
  
  /**
   * Delay between each word (in ms)
   * @default 80
   */
  delayPerWord?: number;
  
  /**
   * Spacing between words (Tailwind class)
   * @default 'mr-3 md:mr-4'
   */
  wordSpacing?: string;
  
  /**
   * Additional container classes
   */
  className?: string;
  
  /**
   * Text color
   * @default 'text-black'
   */
  textColor?: string;
}

/**
 * Animated word reveal component
 * Words fade in and slide up as they become visible
 */
export const WordReveal = forwardRef<HTMLHeadingElement, WordRevealProps>(
  (
    {
      words,
      visibleWords,
      textSizeClass = 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
      delayPerWord = 80,
      wordSpacing = 'mr-3 md:mr-4',
      className = '',
      textColor = 'text-black',
    },
    ref
  ) => {
    return (
      <h1 
        ref={ref}
        className={`${textSizeClass} w-full font-black ${textColor} ${className}`}
      >
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block ${wordSpacing} transition-all duration-500 ease-out ${
              index < visibleWords
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
            }`}
            style={{
              transitionDelay: `${index * delayPerWord}ms`,
            }}
          >
            {word}
          </span>
        ))}
      </h1>
    );
  }
);

WordReveal.displayName = 'WordReveal';