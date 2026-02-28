'use client';

import React from 'react';
import { VideoBackground } from '../Hero/VideoBackground';
import { HERO_CONTENT_ABOUT, SERVICES, SOCIAL_LINKS, VIDEO_CONFIG } from '../Hero/hero.constants';
import { HeroContent } from '../Hero/HeroContent';
import { HeroBottomBar } from '../Hero/HeroBottomBar';



const AboutHeroSection: React.FC = () => {
  return (
    <section className="relative h-150 overflow-hidden bg-black">

      <VideoBackground
        src={VIDEO_CONFIG.src}
        brightness={VIDEO_CONFIG.brightness}
      />

      <HeroContent
        titleClass='text-white text-9xl'
        subtitleClass='text-background font-black text-9xl uppercase '
        title={HERO_CONTENT_ABOUT.title}
        subtitle={HERO_CONTENT_ABOUT.subtitle}
      />

      <HeroBottomBar
        className="bottom-100"
        leftSocialLinks={SOCIAL_LINKS.left}
        rightSocialLinks={SOCIAL_LINKS.right}
        services={SERVICES}
      />

    </section>
  );
};

export default AboutHeroSection;