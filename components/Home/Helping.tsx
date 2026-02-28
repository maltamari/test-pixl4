"use client"
import { ArrowUpRight, Star } from 'lucide-react';
import React, { useRef } from 'react';
import { CTAButton } from '../ui/cta-button';
import { TextSlideUp } from '../global/TextSlideUp';
import { IconSlideUp } from '../global/IconSlideUp';
import { useScrollWordReveal } from '../hooks/useScrollWord';
import { HorizontalScrollText } from '../animations/Horizontalscrolltext';
import { WordReveal } from '../animations/Wordreveal';


export function Helping() {
  const headingRef = useRef<HTMLDivElement>(null);

  const rotatingTexts: string[] = [
    'DRIVEN BY TECH',
    'DRIVEN BY DESIGN',
    'DRIVEN BY INNOVATION',
  ];

  const titleWords: string[] = [
    'HELPING', 'BRANDS', 'MODERNIZE',
    'HOW', 'THEY', 'OPERATE,', 'SELL,', 'AND',
    'SCALE.'
  ];

  // Use the custom hook for scroll-triggered word reveal
  const visibleWords = useScrollWordReveal({
    elementRef: headingRef,
    totalWords: titleWords.length,
    startThreshold: 0.9,
    animationRange: 0.3,
  });

  return (
    <section className="relative  px-6 md:px-12 lg:px-16 py-12 md:py-20">
      <div className="max-w-350 mx-auto h-full">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-13 gap-8 h-full items-start">


          {/* LEFT COLUMN - Horizontal Looping Text Slider */}
          <div className="lg:col-span-3 relative">
            <HorizontalScrollText 
              texts={rotatingTexts}
              backgroundColor="#e8e8e8"
            />
          </div>

          {/* RIGHT COLUMN - Main Heading */}
          <div className="lg:col-span-10 flex flex-col justify-center gap-10">

              {/* Large Heading with Word Reveal Animation */}
              <WordReveal
                ref={headingRef}
                words={titleWords}
                visibleWords={visibleWords}
                delayPerWord={80}
              />

            {/* Medium Paragraph */}
            <div className="max-w-2xl">
              <p className="text-base md:text-lg lg:text-xl leading-[1.7] text-gray-700 font-normal">
                We help businesses automate operations, build AI-powered digital platforms, 
                and become discoverable in search and AI answers — faster, leaner, and without 
                unnecessary complexity.
              </p>
            </div>

            {/* Primary Button */}
            <div className='w-60 h-20 flex items-start md:items-center max-sm:flex-col gap-6 justify-between'>
              <CTAButton text="Our story" />
              <p className="group border-b flex items-center border-black text-sm md:text-base font-bold">
                <TextSlideUp 
                  text="Free Digital Audit" 
                  hoverText="Contact Us"
                  variant="word"
                  stagger={50}
                  className="w-40!"
                  textClassName="text-black"
                />
                <IconSlideUp
                  icon={<ArrowUpRight className='inline-block text-black' size={16} />}
                  hoverIcon={<ArrowUpRight className='inline-block text-black' size={16} />}
                  className="text-white"
                  triggerOn="parent-hover"  
                  variant="smooth"
                />
              </p> 
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}