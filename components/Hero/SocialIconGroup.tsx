'use client';

import Link from 'next/link';
import React from 'react';
import { SocialIconProps } from '.';
import { IconSlideUp } from '../global/IconSlideUp';


export const SocialIcon: React.FC<SocialIconProps> = ({ href, icon: Icon }) => {
  const iconElement = <Icon className="w-4 h-4 md:w-5 md:h-5" />;
  
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
    >
      <IconSlideUp
        icon={iconElement}
        hoverIcon={iconElement}
        className="text-white"
        triggerOn="parent-hover"
        variant="smooth"
      />
    </Link>
  );
};