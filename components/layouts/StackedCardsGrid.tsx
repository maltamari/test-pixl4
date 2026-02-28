import React, { forwardRef } from 'react';

interface StackedCardsGridProps<T> {
  /**
   * Array of items to display
   */
  items: T[];
  
  /**
   * Number of items per row
   * @default 2
   */
  itemsPerRow?: number;
  
  /**
   * Render function for each item
   */
  renderItem: (item: T, index: number) => React.ReactNode;
  
  /**
   * Function to extract unique key from item
   * @default Uses index
   */
  keyExtractor?: (item: T, index: number) => string | number;
  
  /**
   * Row class name for animation targeting
   * @default 'project-row'
   */
  rowClassName?: string;
  
  /**
   * Container height on desktop
   * @default 'h-auto md:h-[80vh]'
   */
  heightClass?: string;
  
  /**
   * Grid columns classes
   * @default 'grid-cols-1 md:grid-cols-2'
   */
  gridCols?: string;
  
  /**
   * Gap between items
   * @default 'gap-6 md:gap-8'
   */
  gap?: string;
  
  /**
   * Additional container classes
   */
  className?: string;
}

/**
 * Stacked cards grid component
 * Organizes items into rows for GSAP scroll animation
 */
export const StackedCardsGrid = forwardRef<HTMLDivElement, StackedCardsGridProps<any>>(
  (
    {
      items,
      itemsPerRow = 2,
      renderItem,
      keyExtractor,
      rowClassName = 'project-row',
      heightClass = 'h-auto md:h-[80vh]',
      gridCols = 'grid-cols-1 md:grid-cols-2',
      gap = 'gap-6 md:gap-8',
      className = '',
    },
    ref
  ) => {
    // Calculate number of rows needed
    const rowCount = Math.ceil(items.length / itemsPerRow);

    return (
      <div ref={ref} className={`scroll-section ${className}`}>
        <div className={heightClass}>
          <div role="list" className="relative h-full">
            {Array.from({ length: rowCount }).map((_, rowIndex) => {
              const rowItems = items.slice(
                rowIndex * itemsPerRow,
                rowIndex * itemsPerRow + itemsPerRow
              );

              return (
                <div
                  key={`row-${rowIndex}`}
                  className={`${rowClassName} relative md:absolute inset-0 w-full h-full mb-8 md:mb-0`}
                >
                  <div className={`grid ${gridCols} ${gap} w-full h-full`}>
                    {rowItems.map((item, index) => {
                      const globalIndex = rowIndex * itemsPerRow + index;
                      const key = keyExtractor 
                        ? keyExtractor(item, globalIndex)
                        : globalIndex;
                      
                      return (
                        <div key={key}>
                          {renderItem(item, globalIndex)}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

StackedCardsGrid.displayName = 'StackedCardsGrid';