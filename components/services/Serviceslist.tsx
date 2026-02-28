'use client';

import { Service } from '@/lib/data/Services';
import { ServiceInteractionProps } from '@/types/services.types';
import { forwardRef } from 'react';
import { ServiceItem } from './Serviceitem';

interface ServicesListProps extends ServiceInteractionProps {
  services: Service[];
}

export const ServicesList = forwardRef<HTMLDivElement, ServicesListProps>(
  (
    {
      services,
      hoveredService,
      imageRefs,
      titleContainerRefs,
      coloredLayerRefs,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
    },
    ref
  ) => {
    return (
      <div ref={ref} className="relative mt-20">
        {services.map((service) => (
          <ServiceItem
            key={service.id}
            service={service}
            hoveredService={hoveredService}
            imageRefs={imageRefs}
            titleContainerRefs={titleContainerRefs}
            coloredLayerRefs={coloredLayerRefs}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
          />
        ))}
      </div>
    );
  }
);

ServicesList.displayName = 'ServicesList';