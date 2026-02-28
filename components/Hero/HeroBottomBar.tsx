'use client';

import React from 'react';
import { SocialLink } from '.';
import { SocialIconGroup } from './SocialIcon';
import { ServiceCylinder } from './ServiceCylinder';
import { cn } from '@/lib/utils';

interface HeroBottomBarProps {
  leftSocialLinks: SocialLink[];
  rightSocialLinks: SocialLink[];
  services: readonly string[];
  className?: string;
}

export const HeroBottomBar: React.FC<HeroBottomBarProps> = ({
  leftSocialLinks,
  rightSocialLinks,
  services,
  className,
}) => {
  return (
    <div className="absolute bottom-12 left-0 right-0 z-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <SocialIconGroup links={leftSocialLinks} />
        <SocialIconGroup links={rightSocialLinks} />
      </div>
      <span className={cn('absolute -bottom-2 left-0 right-0 z-20 px-4 md:px-8', className)}>
        <ServiceCylinder services={services} />
      </span>
    </div>
  );
};