import { useState, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ImagePositionMap, RefMap } from '@/types/services.types';
import { MAX_ROTATION_DEGREES } from '@/lib/data/Services';


interface UseServiceHoverInteractionsReturn {
  hoveredService: string | null;
  mousePosition: { x: number; y: number };
  actualImagePosition: ImagePositionMap;
  imageRefs: React.MutableRefObject<RefMap<HTMLDivElement>>;
  titleContainerRefs: React.MutableRefObject<RefMap<HTMLDivElement>>;
  coloredLayerRefs: React.MutableRefObject<RefMap<HTMLDivElement>>;
  handleMouseEnter: (serviceId: string) => void;
  handleMouseLeave: () => void;
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>, serviceId: string) => void;
  setActualImagePosition: React.Dispatch<React.SetStateAction<ImagePositionMap>>;
}

export function useServiceHoverInteractions(
  isMobile: boolean
): UseServiceHoverInteractionsReturn {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [actualImagePosition, setActualImagePosition] = useState<ImagePositionMap>({});

  const imageRefs = useRef<RefMap<HTMLDivElement>>({});
  const titleContainerRefs = useRef<RefMap<HTMLDivElement>>({});
  const coloredLayerRefs = useRef<RefMap<HTMLDivElement>>({});

  const handleMouseEnter = useCallback(
    (serviceId: string) => {
      if (!isMobile) {
        setHoveredService(serviceId);
      }
    },
    [isMobile]
  );

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      setHoveredService(null);
    }
  }, [isMobile]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, serviceId: string) => {
      if (isMobile || hoveredService !== serviceId) return;

      const groupElement = e.currentTarget;
      const titleElement = titleContainerRefs.current[serviceId];
      if (!titleElement) return;

      const groupRect = groupElement.getBoundingClientRect();
      const titleRect = titleElement.getBoundingClientRect();

      const mouseX = e.clientX - groupRect.left;
      const mouseY = e.clientY - groupRect.top;

      const titleX = titleRect.left - groupRect.left;
      const titleY = titleRect.top - groupRect.top;

      const relativeX = e.clientX - titleRect.left;
      const relativeY = e.clientY - titleRect.top;

      const titleCenterX = titleRect.width / 2;
      const distanceFromCenter = relativeX - titleCenterX;
      const rotation = (distanceFromCenter / titleCenterX) * MAX_ROTATION_DEGREES;

      setMousePosition({ x: relativeX, y: relativeY });

      // Rotation
      const imageWrapper = imageRefs.current[serviceId]?.querySelector('.image-wrapper');
      if (imageWrapper) {
        gsap.to(imageWrapper, {
          rotation: rotation,
          duration: 1,
          ease: 'elastic.out',
        });
      }

      // Move image
      if (imageRefs.current[serviceId]) {
        const clampedX = Math.max(0, Math.min(mouseX - titleX, titleRect.width));
        const clampedY = Math.max(0, Math.min(mouseY - titleY, titleRect.height));

        gsap.to(imageRefs.current[serviceId], {
          x: clampedX,
          y: clampedY,
          duration: 15,
          ease: 'power3.out',
          delay: 0.15,
          onUpdate: function () {
            const currentX = gsap.getProperty(imageRefs.current[serviceId]!, 'x') as number;
            const currentY = gsap.getProperty(imageRefs.current[serviceId]!, 'y') as number;

            setActualImagePosition((prev) => ({
              ...prev,
              [serviceId]: { x: currentX, y: currentY },
            }));
          },
        });
      }
    },
    [isMobile, hoveredService]
  );

  return {
    hoveredService,
    mousePosition,
    actualImagePosition,
    imageRefs,
    titleContainerRefs,
    coloredLayerRefs,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
    setActualImagePosition,
  };
}