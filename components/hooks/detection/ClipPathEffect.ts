import { IMAGE_HALF_SIZE, Service } from '@/lib/data/Services';
import { ImagePositionMap, RefMap } from '@/types/services.types';
import { useEffect } from 'react';


interface UseClipPathEffectParams {
  services: Service[];
  hoveredService: string | null;
  actualImagePosition: ImagePositionMap;
  coloredLayerRefs: React.MutableRefObject<RefMap<HTMLDivElement>>;
  titleContainerRefs: React.MutableRefObject<RefMap<HTMLDivElement>>;
  isMobile: boolean;
}

export function useClipPathEffect({
  services,
  hoveredService,
  actualImagePosition,
  coloredLayerRefs,
  titleContainerRefs,
  isMobile,
}: UseClipPathEffectParams): void {
  useEffect(() => {
    if (isMobile) return;

    services.forEach((service) => {
      const coloredLayer = coloredLayerRefs.current[service.id];
      const titleElement = titleContainerRefs.current[service.id];

      if (!coloredLayer || !titleElement) return;

      if (service.id === hoveredService && actualImagePosition[service.id]) {
        const imgPos = actualImagePosition[service.id];

        coloredLayer.style.clipPath = `circle(${IMAGE_HALF_SIZE}px at ${imgPos.x}px ${imgPos.y}px)`;
        coloredLayer.style.opacity = '1';
      } else {
        coloredLayer.style.opacity = '0';
      }
    });
  }, [services, actualImagePosition, hoveredService, coloredLayerRefs, titleContainerRefs, isMobile]);
}