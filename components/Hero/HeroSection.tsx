'use client';

import React from 'react';
import { HERO_CONTENT_HOME, SERVICES, SOCIAL_LINKS, VIDEO_CONFIG } from './hero.constants';
import { HeroContent } from './HeroContent';
import { HeroBottomBar } from './HeroBottomBar';
import { VideoBackground } from './VideoBackground';

const HomeHeroSection: React.FC = () => {
  return (
    <section className="relative h-150 overflow-hidden bg-black">
      <VideoBackground
        src={VIDEO_CONFIG.src}
        brightness={VIDEO_CONFIG.brightness}
      />

      <HeroContent
        title={HERO_CONTENT_HOME.title}
        subtitle={HERO_CONTENT_HOME.subtitle}
      />

      <HeroBottomBar
        leftSocialLinks={SOCIAL_LINKS.left}
        rightSocialLinks={SOCIAL_LINKS.right}
        services={SERVICES}
      />
    </section>
  );
};

export default HomeHeroSection;