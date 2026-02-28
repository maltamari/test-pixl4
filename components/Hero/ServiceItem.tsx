'use client';

import React from 'react';

interface ServiceItemProps {
  text: string;
  index: number;
  totalServices: number;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ 
  text, 
  index, 
  totalServices 
}) => {
  const rotation = index * (360 / totalServices);
  const opacity = Math.cos((index * Math.PI * 2) / totalServices) * 0.5 + 0.5;

  return (
    <div
      className="service-item absolute inset-0 flex items-center justify-center gap-3"
      style={{
        '--rotation': `${rotation}deg`,
        '--opacity': opacity
      } as React.CSSProperties}
    >
      <p className="text-white text-xs md:text-sm font-medium tracking-[0.2em] uppercase whitespace-nowrap flex items-center gap-2">
        {text}
      </p>
    </div>
  );
};