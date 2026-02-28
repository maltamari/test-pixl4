'use client';

import Image from 'next/image';
import { TextSlideUp } from '../global/TextSlideUp';
import { Service } from '@/lib/data/Services';
import { RefMap } from '@/types/services.types';


interface ServiceItemDesktopProps {
  service: Service;
  hoveredService: string | null;
  imageRefs: React.MutableRefObject<RefMap<HTMLDivElement>>;
  titleContainerRefs: React.MutableRefObject<RefMap<HTMLDivElement>>;
  coloredLayerRefs: React.MutableRefObject<RefMap<HTMLDivElement>>;
}

export function ServiceItemDesktop({
  service,
  hoveredService,
  imageRefs,
  titleContainerRefs,
  coloredLayerRefs,
}: ServiceItemDesktopProps) {
  return (
    <div
      ref={(el) => {
        titleContainerRefs.current[service.id] = el;
      }}
      className="hidden lg:block shrink-0 max-w-xl relative"
    >
      {/* Hover Image - Desktop only */}
      <div
        ref={(el) => {
          imageRefs.current[service.id] = el;
        }}
        className="absolute pointer-events-none z-10 transition-opacity duration-500"
        style={{
          opacity: hoveredService === service.id ? 1 : 0,
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="image-wrapper w-64 h-64 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            width={400}
            height={400}
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* White Text Layer (Base) */}
      <div className="relative z-20">
        <TextSlideUp
          text={service.title}
          variant="smooth"
          stagger={25}
          triggerOn="parent-hover"
          textClassName="text-6xl md:text-7xl lg:text-[120px] font-['Bebas_Neue'] text-white"
        />
      </div>

      {/* Colored Text Layer (Clipped by image position) - Desktop only */}
      <div
        ref={(el) => {
          coloredLayerRefs.current[service.id] = el;
        }}
        className="absolute inset-0 z-30 pointer-events-none transition-opacity duration-200"
        style={{
          opacity: 0,
        }}
      >
        <div style={{ color: service.overlayColor }}>
          <TextSlideUp
            text={service.title}
            variant="smooth"
            stagger={25}
            triggerOn="parent-hover"
            textClassName="text-6xl md:text-7xl lg:text-[120px] font-['Bebas_Neue']"
          />
        </div>
      </div>
    </div>
  );
}