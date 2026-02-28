'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface HeroContentProps {
  title: string;
  subtitle: string;
  titleClass?:string
  subtitleClass?:string
}

export const HeroContent: React.FC<HeroContentProps> = ({ title, subtitle,titleClass,subtitleClass }) => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className={cn("text-[clamp(3rem,8vw,10rem)] font-black tracking-[-0.05em] text-yellow-400 uppercase leading-[0.9] mb-6 drop-shadow-[0_0_40px_rgba(255,215,0,0.3)] animate-fadeInUp",titleClass)}>
        {title}
      </h1>
      <p className={cn("text-[clamp(1rem,1.5vw,1.25rem)] text-gray-300 tracking-wide font-light animate-fadeInUp animation-delay-300",subtitleClass)}>
        {subtitle}
      </p>
    </div>
  );
};