'use client';

import React, { useEffect, useRef } from 'react';
import { Zap, PieChart, Heart, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeader } from '../global/Serviceheader';
import { PILLAR_HEADING_ITEMS,PILLAR_ROTATING_TEXTS} from '@/lib/constants/Projects.constants';
import { useWorkAnimations } from '../effects/useWorkAnimations';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}

const PillarCard = React.forwardRef<HTMLDivElement, PillarCardProps>(
  ({ icon, title, subtitle, description }, ref) => {
    return (
      <div
        ref={ref}
        className="pillar-card bg-white rounded-3xl p-8 lg:p-10 shadow-sm"
      >
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
          {icon}
        </div>

        <h3 className="text-xl md:text-3xl lg:text-4xl font-black mb-4">
          <span className="text-black">{title}</span>
          {subtitle && (
            <>
              <br />
              <span className="text-gray-400">{subtitle}</span>
            </>
          )}
        </h3>

        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    );
  }
);

PillarCard.displayName = 'PillarCard';

const VisionPillarsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement| null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { headingRef, visibleWords } = useWorkAnimations();

  const pillars = [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "CREATIVE",
      subtitle: "EXCELLENCE",
      description: "We push creative boundaries to deliver designs that inspire emotion and reflect the true essence of every brand we build."
    },
    {
      icon: <PieChart className="w-6 h-6 text-white" />,
      title: "STRATEGIC",
      subtitle: "THINKING",
      description: "Every decision is driven by insight and purpose, ensuring each project aligns creativity with measurable business growth."
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "MEANINGFUL",
      subtitle: "COLLABORATION",
      description: "We believe great results come from teamwork, transparency, and shared vision between our team and our clients."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: "LASTING",
      subtitle: "IMPACT",
      description: "We push creative boundaries to deliver designs that inspire emotion and reflect the true essence of every brand we build."
    }
  ];

 useEffect(() => {
    if (!sectionRef.current) return;
    
    const section = sectionRef.current; // ✅ نحفظه في متغير

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        cardRefs.current.forEach((card) => {
          if (!card) return;

          gsap.set(card, {
            y: 100,
            opacity: 0
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
              end: 'bottom top+=100',
              scrub: 1,
            }
          });

          tl.to(card, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
          })
          .to(card, {
            y: 0,
            opacity: 1,
            duration: 0.4
          })
          .to(card, {
            y: -100,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in'
          });
        });
      }, section); // ✅ هون بنحط المتغير مش sectionRef.current

      return () => ctx.revert();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger && 
            cardRefs.current.includes(trigger.vars.trigger as HTMLDivElement)) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen"
    >
      <div className="flex items-center flex-col mx-auto px-6 lg:px-12 py-20 lg:py-32">

        <SectionHeader
          ref={headingRef}
          headingItems={PILLAR_HEADING_ITEMS}
          rotatingTexts={PILLAR_ROTATING_TEXTS}
          visibleWords={visibleWords}
          scrollTextColor="#e8e8e8"
          textSizeClass='lg:text-[clamp(3rem,8vw,8rem)] text-center text-4xl '
          showCta={false}
      
          centerClass='flex flex-col w-full items-center'
          displayMode='inline'
        />

        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Left Column - Sticky Image */}
            <div className="relative" style={{ minHeight: '200vh' }}>
              <div className="sticky top-32 w-full aspect-3/4 rounded-3xl overflow-hidden bg-gray-300">
                <img
                  width={250}
                  height={250}
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
                  alt="Professional woman with laptop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Pillar Cards */}
            <div
              className="flex flex-col gap-8"
              style={{ minHeight: '200vh' }}
            >
              {pillars.map((pillar, index) => (
                <PillarCard
                  key={index}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  icon={pillar.icon}
                  title={pillar.title}
                  subtitle={pillar.subtitle}
                  description={pillar.description}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionPillarsSection;