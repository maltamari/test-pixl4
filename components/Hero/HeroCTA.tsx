'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { HorizontalScrollText } from '../animations/Horizontalscrolltext';
import { CTAButton } from '../ui/cta-button';

gsap.registerPlugin(ScrollTrigger);

const FAQ_ROTATING_TEXTS = [
  'BRING IDEAS TO LIFE ',
  'BRING IDEAS TO LIFE ',
  'BRING IDEAS TO LIFE ',

];

export default function BrandSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const letsRef = useRef<HTMLSpanElement>(null);
  const buildRef = useRef<HTMLSpanElement>(null);
  const yourRef = useRef<HTMLSpanElement>(null);
  const brandRef = useRef<HTMLSpanElement>(null);
  const horizontalTextRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !backgroundRef.current ||
        !letsRef.current ||
        !buildRef.current ||
        !yourRef.current ||
        !brandRef.current ||
        !horizontalTextRef.current ||
        !buttonRef.current
      ) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 140px',
          end: '+=350%',
          scrub: 3.5,
          pin: true,
          anticipatePin: 1,
          markers: false,
        },
      });

      tl.fromTo(
        backgroundRef.current,
        { scaleY: 0 },
        { scaleY: 1, ease: 'none', duration: 1 },
        0
      );

      tl.fromTo(
        [horizontalTextRef.current, buttonRef.current],
        { opacity: 0, y: 110 },
        { opacity: 1, y: 0, ease: 'power1.out', duration: 0.8 },
        0.3
      );

      tl.fromTo(
        [letsRef.current, brandRef.current],
        { clipPath: 'inset(50% 0% 50% 0%)', opacity: 1 },
        { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, ease: 'power1.inOut', duration: 1 },
        0.5
      );

      tl.fromTo(
        [buildRef.current, yourRef.current],
        { clipPath: 'inset(50% 0% 50% 0%)', opacity: 1 },
        { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, ease: 'power1.inOut', duration: 1 },
        1.5
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-100 md:h-185 w-full overflow-hidden"
    >
      <p className='text-xl font-mono text-black text-center'>KEEP SCROLLING</p>
      <div
        ref={backgroundRef}
        className="absolute left-0 top-1/2 h-full w-full -translate-y-1/2 bg-black"
        style={{ transformOrigin: 'center' }}
      />

      <div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col items-center justify-center"
      >
        <div ref={horizontalTextRef} className='w-100 opacity-0'>
          <HorizontalScrollText
            texts={FAQ_ROTATING_TEXTS}
            backgroundColor="#000000"
            StarColor='[#e8e8e8]'
          />
        </div>

        <h1 className="text-center font-mono font-bold tracking-tight ">
          <div className="relative flex md:text-8xl text-5xl items-center justify-center gap-4 whitespace-nowrap">
            <span ref={letsRef} className="inline-block  text-gray-400">LET'S</span>
            <span ref={buildRef} className="inline-block text-gray-400">BUILD</span>
          </div>
          <div className="relative mt-6 flex items-center md:text-9xl text-5xl justify-center gap-4 whitespace-nowrap">
            <span ref={yourRef} className="inline-block text-white">YOUR</span>
            <span ref={brandRef} className="inline-block text-white">BRAND</span>
          </div>
        </h1>

        <div ref={buttonRef} className='opacity-0'>
          <CTAButton className='mt-20 bg-white text-black px-10 font-sans py-4 lg:py-5.5 text-base lg:text-xl'/>
        </div>
      </div>
    </section>
  );
}