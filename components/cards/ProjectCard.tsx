import React, { useState } from 'react';
import { MoveRightIcon } from 'lucide-react';

export interface ProjectCardData {
  id: string;
  title: string;
  category: string;
  image?: string;
  link: string;
}

interface ProjectCardProps {
  /**
   * Project data
   */
  project: ProjectCardData;
  
  /**
   * Show image
   * @default false
   */
  showImage?: boolean;
  
  /**
   * Card height class
   * @default 'h-[90%]'
   */
  heightClass?: string;
  
  /**
   * Background color
   * @default 'bg-gray-500'
   */
  bgColor?: string;
  
  /**
   * Border color
   * @default 'border-gray-400'
   */
  borderColor?: string;
  
  /**
   * Custom icon component
   */
  icon?: React.ReactNode;
  
  /**
   * Additional card classes
   */
  className?: string;
}

/**
 * Project card component with hover effects
 * Displays project title, category, and optional image
 */
export function ProjectCard({
  project,
  showImage = false,
  heightClass = 'h-[90%]',
  icon,
  className = '',
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={project.link}
      className={`group block relative overflow-hidden  rounded-2xl p-3 bg-white/25 backdrop-blur-md border border-gray-400 transition-all duration-500 ${heightClass} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Header */}
      <div className="relative z-10 flex items-center mb-2 justify-between p-6 bg-white/18 rounded-2xl">
        <div className="flex items-center gap-3">
          <h3 className="text-white font-bold text-lg md:text-xl tracking-wide">
            {project.title}
          </h3>
          <span className="text-gray-400 text-sm md:text-base">•</span>
          <span className="text-gray-400 text-sm md:text-base uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300">
          {icon || <MoveRightIcon className="text-white" />}
        </div>
      </div>

      {/* Project Content Area */}
      <div className="relative h-110  overflow-hidden bg-white/8 rounded-2xl">
        {showImage && project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          /* Placeholder */
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl md:text-7xl font-bold text-white/5 tracking-tighter">
              {project.title}
            </div>
          </div>
        )}
      </div>
    </a>
  );
}