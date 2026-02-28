'use client';

import { Service } from '@/lib/data/Services';
import { ServiceInteractionProps } from '@/types/services.types';
import { ServiceItemMobile } from './Serviceitemmobile';
import { ServiceItemDesktop } from './Serviceitemdesktop';

interface ServiceItemProps extends ServiceInteractionProps {
  service: Service;
}

export function ServiceItem({
  service,
  hoveredService,
  imageRefs,
  titleContainerRefs,
  coloredLayerRefs,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
}: ServiceItemProps) {
  return (
    <div
      className="group py-6 lg:py-8 service-item flex flex-col lg:flex-row lg:items-center lg:justify-between border-b border-gray-800 relative gap-6"
      onMouseEnter={() => onMouseEnter(service.id)}
      onMouseLeave={onMouseLeave}
      onMouseMove={(e) => onMouseMove(e, service.id)}
    >
      {/* Service Number */}
      <p className="text-lg lg:text-xl group-hover:text-white text-gray-300 lg:mb-4">({service.id})</p>

      {/* Mobile Layout */}
      <ServiceItemMobile service={service} />

      {/* Desktop Layout: Interactive Title */}
      <ServiceItemDesktop
        service={service}
        hoveredService={hoveredService}
        imageRefs={imageRefs}
        titleContainerRefs={titleContainerRefs}
        coloredLayerRefs={coloredLayerRefs}
      />

      {/* Service Description */}
      <div className="w-full lg:max-w-md">
        <p className="font-bold text-sm group-hover:text-white sm:text-base lg:text-lg  text-gray-300 leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
}