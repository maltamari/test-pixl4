// components/global/TextSlideUp.tsx
'use client';

import React, { useRef, useEffect, useState } from 'react';

interface TextSlideUpProps {
  text: string;
  hoverText?: string;
  variant?: 'smooth' | 'fast' | 'elastic' | 'letters' | 'word';
  className?: string;
  stagger?: number;
  textClassName?: string;
  triggerOn?: 'hover' | 'parent-hover' | 'always';
}

export const TextSlideUp: React.FC<TextSlideUpProps> = ({ 
  text, 
  hoverText, 
  variant = 'smooth',
  className = '',
  stagger = 30,
  textClassName = '',
  triggerOn = 'hover'
}) => {
  const displayHoverText = hoverText || text;
  const variantClass = `text-slide-${variant}`;
  const [minWidth, setMinWidth] = useState<number>(0);
  const contentRef = useRef<HTMLSpanElement>(null);
  const hoverRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (variant === 'word' && contentRef.current && hoverRef.current) {
      const contentWidth = contentRef.current.offsetWidth;
      const hoverWidth = hoverRef.current.offsetWidth;
      setMinWidth(Math.max(contentWidth, hoverWidth));
    }
  }, [text, displayHoverText, variant]);

  // لو variant هو 'word' - الكلمة كاملة تطلع
  if (variant === 'word') {
    return (
      <span 
        className={`text-slide-word  ${className}`}
        data-trigger={triggerOn}
        style={{
          width: minWidth > 0 ? `${minWidth}px` : 'auto',
          display: 'inline-block'
        }}
      >
        <span ref={contentRef} className={`word-content  ${textClassName}`}>
          {text}
        </span>
        <span ref={hoverRef} className={`word-hover ${textClassName}`}>
          {displayHoverText}
        </span>
      </span>
    );
  }

  // لباقي الـ variants - حرف حرف
  const chars = text.split('');
  const hoverChars = displayHoverText.split('');
  
  // نستخدم الأطول من النصين
  const maxLength = Math.max(chars.length, hoverChars.length);

  return (
    <span 
      className={`${variantClass} ${className}`}
      data-trigger={triggerOn}
    >
      {Array.from({ length: maxLength }).map((_, index) => (
        <span 
          key={index} 
          className="char-wrapper uppercase"
          
        >
          <span 
            className={`char-content ${textClassName}`}
            style={{
              transitionDelay: `${index * stagger}ms`
            }}
          >
            {chars[index] === ' ' ? '\u00A0' : (chars[index] || '\u00A0')}
          </span>
          <span 
            className={`char-hover ${textClassName}`}
            style={{
              transitionDelay: `${index * stagger}ms`
            }}
          >
            {hoverChars[index] === ' ' ? '\u00A0' : (hoverChars[index] || '\u00A0')}
          </span>
        </span>
      ))}
    </span>
  );
};