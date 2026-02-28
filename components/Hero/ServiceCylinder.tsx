'use client';

import React from 'react';
import { ServiceItem } from './ServiceItem';

interface ServiceCylinderProps {
  services: readonly string[];
}

export const ServiceCylinder: React.FC<ServiceCylinderProps> = ({ services }) => {
  return (
    <div className="flex-1 mx-6 md:mx-12 overflow-hidden">
      <div className="relative h-12 flex items-center justify-center perspective">
        <div className="cylinder">
          {services.map((service, index) => (
            <ServiceItem
              key={index} 
              text={service} 
              index={index}
              totalServices={services.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};