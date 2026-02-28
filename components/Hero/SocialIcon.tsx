'use client';

import React from 'react';
import { SocialIcon } from './SocialIconGroup';
import { SocialLink } from '.';

interface SocialIconGroupProps {
  links: SocialLink[];
}

export const SocialIconGroup: React.FC<SocialIconGroupProps> = ({ links }) => {
  return (
    <div className="flex gap-3 md:gap-4 justify-between w-[20%]">
      {links.map((link, index) => (
        <SocialIcon key={index} {...link} />
      ))}
    </div>
  );
};