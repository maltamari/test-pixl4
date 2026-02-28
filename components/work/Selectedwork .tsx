  'use client';

  import { ProjectsGrid } from './ProjectsGrid';
  import { WorkFooter } from './WorkFooter';
  import { useWorkAnimations } from '../effects/useWorkAnimations';
  import {
    PROJECTS_DATA,
    COPYRIGHT_YEAR,
    WORK_HEADING_ITEMS,
    WORK_ROTATING_TEXTS,
  } from '@/lib/constants/Projects.constants';
  import { ANIMATION_DURATIONS } from '@/lib/constants/common.constants';
  import { SectionHeader } from '../global/Serviceheader';

  const COPYRIGHT_WORD_INDEX = 2;

  export default function SelectedWork() {
    const { headingRef, cardsRef, visibleWords } = useWorkAnimations();

    const shouldShowCopyright = COPYRIGHT_WORD_INDEX < visibleWords;

    return (
      <section className="w-full bg-black py-20 md:py-32 px-4 md:px-6 rounded-[40px] lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div ref={headingRef} className="mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
              {/* Left side: Animated Heading */}
              <div className="flex-1">
                <SectionHeader
                  headingItems={WORK_HEADING_ITEMS}
                  rotatingTexts={WORK_ROTATING_TEXTS}
                  visibleWords={visibleWords}
                  scrollTextColor="#000000"
                  ctaText="All Projects"
                  ctaClassName="bg-white text-black"
                  showCta={false}
                  containerClassName="mb-0"
                />
              </div>

              {/* Right side: Copyright ©2026 */}
              <div className="font-['Bebas_Neue'] text-7xl xl:text-[200px] font-bold mb-2 md:mb-4 shrink-0">
                <span
                  className={`block transition-all duration-${ANIMATION_DURATIONS.SLOW} ${
                    shouldShowCopyright
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  } text-gray-400`}
                >
                  {COPYRIGHT_YEAR}
                </span>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <ProjectsGrid ref={cardsRef} projects={PROJECTS_DATA} />

          {/* Footer CTA */}
          <WorkFooter />
        </div>
      </section>
    );
  }