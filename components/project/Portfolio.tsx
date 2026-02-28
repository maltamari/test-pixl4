'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../global/Serviceheader';
import { useWorkAnimations } from '../effects/useWorkAnimations';
import { PORTFOLIO_HEADING_ITEMS, PORTFOLIO_PROJECTS, PORTFOLIO_ROTATING_TEXTS, PortfolioProject } from '@/lib/constants/Portfolio.constants';

// ─── Project Card ─────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div
      className="w-full  rounded-2xl overflow-hidden bg-black group p-5"
    >
      {/* ── Header Bar ─────────────────────────────────────────────── */}
      <div className="flex rounded-2xl mb-3 items-center bg-[#1a1a1a] justify-between px-6 py-5 border border-white/35 p-6 ">
        <p className="text-white text-base lg:text-lg font-bold tracking-widest">
          {project.title}
          <span className="text-gray-500 font-normal mx-2">•</span>
          <span className="text-gray-400 font-normal">{project.category}</span>
        </p>

        <Link href={project.href}>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:border-white">
            <ArrowRight
              size={16}
              className="text-white transition-colors duration-300 group-hover:text-black"
            />
          </div>
        </Link>
      </div>

      {/* ── Image ──────────────────────────────────────────────────── */}
      <div className="relative w-full rounded-2xl  overflow-hidden" style={{ height: '820px' }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Subtle dark gradient overlay at bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

        {/* Logo Placeholder at bottom-center */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <span className="text-white font-bold text-sm tracking-[0.3em] uppercase">
              {project.title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Portfolio Section ─────────────────────────────────────────────────────────

const PortfolioSection: React.FC = () => {
  const { headingRef, visibleWords } = useWorkAnimations();

  return (
    <section id="portfolio" className="relative w-full overflow-hidden px-4 md:px-6 lg:px-8">

      {/* ── Light Header Area ──────────────────────────────────────── */}
      <div className="  lg:px-12 pt-20 lg:pt-32 pb-16 lg:pb-20">
        <SectionHeader
          ref={headingRef}
          headingItems={PORTFOLIO_HEADING_ITEMS}
          rotatingTexts={PORTFOLIO_ROTATING_TEXTS}
          visibleWords={visibleWords}
          scrollTextColor="#e8e8e8"
          starColor="gray-400"
          textSizeClass="text-5xl md:text-7xl lg:text-[120px] xl:text-[140px] leading-none"
          showCta={true}
          ctaText="Get In Touch"
          ctaClassName="shrink-0"
          containerClassName="lg:w-full lg:items-end"
          displayMode="block"
        />
      </div>

      {/* ── Dark Cards Area ────────────────────────────────────────── */}
      <div className="flex flex-col items-center pb-20 lg:pb-32">
        <div className="flex flex-col gap-6">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default PortfolioSection;