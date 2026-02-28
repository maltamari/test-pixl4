'use client';

import Image from 'next/image';
import { TextSlideUp } from '../global/TextSlideUp';
import { Service } from '@/lib/data/Services';

interface ServiceItemMobileProps {
  service: Service;
}

export function ServiceItemMobile({ service }: ServiceItemMobileProps) {
  return (
    <div className="flex items-start justify-between gap-4 lg:hidden">
      <div className="flex-1">
        <TextSlideUp
          text={service.title}
          variant="smooth"
          stagger={25}
          triggerOn="parent-hover"
          textClassName="text-5xl sm:text-6xl font-['Bebas_Neue'] text-white leading-none"
        />
      </div>

      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0">
        <Image
          width={200}
          height={200}
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}