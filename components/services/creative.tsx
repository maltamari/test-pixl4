'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollWordReveal } from '../hooks/useScrollWord';
import { useMobileDetection } from '../hooks/MobileDetection';
import { useServiceHoverInteractions } from '../hooks/detection/ServiceHoverInteractions';
import { useClipPathEffect } from '../hooks/detection/ClipPathEffect';
import { 
  SERVICES_DATA, 
  ROTATING_TEXTS 
} from '@/lib/data/Services';
import { SectionHeader } from '../global/Serviceheader';
import { ServicesList } from './Serviceslist';

gsap.registerPlugin(ScrollTrigger);

const SERVICES_TOTAL_WORDS = 2;
interface Props{
  ctaText?:string;
HEADING_ITEMS: { text: string; className: string }[];
sideClass?:string;
}

export default function Creative({ctaText,HEADING_ITEMS,sideClass="rounded-4xl mt-20"}:Props) {
  const headingRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef(null);

  const isMobile = useMobileDetection();

  const visibleWords = useScrollWordReveal({
    elementRef: headingRef,
    totalWords: SERVICES_TOTAL_WORDS,
  });

  const {
    hoveredService,
    actualImagePosition,
    imageRefs,
    titleContainerRefs,
    coloredLayerRefs,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
  } = useServiceHoverInteractions(isMobile);

  useClipPathEffect({
    services: SERVICES_DATA,
    hoveredService,
    actualImagePosition,
    coloredLayerRefs,
    titleContainerRefs,
    isMobile,
  });

  return (
    <section className={`w-full py-20 bg-black ${sideClass}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* ✅ Updated to use shared SectionHeader with all required props */}
        <SectionHeader
          ref={headingRef}
          headingItems={HEADING_ITEMS}              // ✅ Required
          rotatingTexts={ROTATING_TEXTS}            // ✅ Required
          visibleWords={visibleWords}               // ✅ Required
          scrollTextColor="#000000"
          ctaText={ctaText}
          ctaClassName="bg-white text-black px-10 max-sm:mt-5 font-sans py-4 lg:py-5.5 text-base lg:text-xl"
          textSizeClass="text-6xl md:text-7xl lg:text-[150px]"
       />

        <ServicesList
          ref={statsContainerRef}
          services={SERVICES_DATA}
          hoveredService={hoveredService}
          imageRefs={imageRefs}
          titleContainerRefs={titleContainerRefs}
          coloredLayerRefs={coloredLayerRefs}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        />
      </div>
    </section>
  );
}