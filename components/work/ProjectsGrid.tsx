'use client';

import { forwardRef } from 'react';
import { StackedCardsGrid } from '@/components/layouts/StackedCardsGrid';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { Project } from '@/lib/constants/Projects.constants';


interface ProjectsGridProps {
  projects: Project[];
}

export const ProjectsGrid = forwardRef<HTMLDivElement, ProjectsGridProps>(
  ({ projects }, ref) => {
    return (
      <StackedCardsGrid
        ref={ref}
        items={projects}
        itemsPerRow={2}
        renderItem={(project) => (
          <ProjectCard
            project={project}
            showImage={true}
            bgColor="bg-gray-500"
          />
        )}
        keyExtractor={(project) => project.id}
        rowClassName="project-row"
        heightClass="h-auto md:h-[80vh]"
        gridCols="grid-cols-1 md:grid-cols-2"
        gap="gap-6 md:gap-8"
      />
    );
  }
);

ProjectsGrid.displayName = 'ProjectsGrid';