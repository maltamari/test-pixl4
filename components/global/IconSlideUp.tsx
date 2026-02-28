// components/global/IconSlideUp.tsx
'use client';

import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface IconSlideUpProps {
  icon: ReactNode;
  hoverIcon?: ReactNode;
  className?: string;
  iconClassName?: string;
  triggerOn?: 'hover' | 'parent-hover' | 'always';
  variant?: 'smooth' | 'fast' | 'bounce';
}

export const IconSlideUp: React.FC<IconSlideUpProps> = ({ 
  icon,
  hoverIcon,
  className = '',
  iconClassName = '',
  triggerOn = 'hover',
  variant = 'smooth'
}) => {
  const displayHoverIcon = hoverIcon || icon;
  const [minWidth, setMinWidth] = useState<number>(0);
  const [minHeight, setMinHeight] = useState<number>(0);
  const contentRef = useRef<HTMLSpanElement>(null);
  const hoverRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (contentRef.current && hoverRef.current) {
      const contentWidth = contentRef.current.offsetWidth;
      const hoverWidth = hoverRef.current.offsetWidth;
      const contentHeight = contentRef.current.offsetHeight;
      const hoverHeight = hoverRef.current.offsetHeight;
      
      setMinWidth(Math.max(contentWidth, hoverWidth));
      setMinHeight(Math.max(contentHeight, hoverHeight));
    }
  }, [icon, displayHoverIcon]);

  return (
    <span 
      className={`icon-slide-up icon-slide-${variant} ${className}`}
      data-trigger={triggerOn}
      style={{
        width: minWidth > 0 ? `${minWidth}px` : 'auto',
        height: minHeight > 0 ? `${minHeight}px` : 'auto',
        display: 'inline-block'
      }}
    >
      <span ref={contentRef} className={`icon-slide-content ${iconClassName}`}>
        {icon}
      </span>
      <span ref={hoverRef} className={`icon-slide-hover ${iconClassName}`}>
        {displayHoverIcon}
      </span>
    </span>
  );
};