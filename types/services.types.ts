import { RefObject } from 'react';

export interface ImagePosition {
  x: number;
  y: number;
}

export interface ImagePositionMap {
  [key: string]: ImagePosition;
}

/** Generic map of DOM element refs keyed by string ID */
export type RefMap<T> = Record<string, T | null>;

/**
 * Shared props for service mouse interaction handlers.
 * Used by both ServiceItem and ServicesList to avoid repeating the interface.
 */
export interface ServiceInteractionProps {
  hoveredService: string | null;
  imageRefs: React.MutableRefObject<RefMap<HTMLDivElement>>;
  titleContainerRefs: React.MutableRefObject<RefMap<HTMLDivElement>>;
  coloredLayerRefs: React.MutableRefObject<RefMap<HTMLDivElement>>;
  onMouseEnter: (serviceId: string) => void;
  onMouseLeave: () => void;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>, serviceId: string) => void;
}