'use client';

import { CTAButton } from '../ui/cta-button';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { HorizontalScrollText } from '../animations/Horizontalscrolltext';
import Link from 'next/link';
import { IconSlideUp } from './IconSlideUp';
import { TextSlideUp } from './TextSlideUp';

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const rotatingTexts: string[] = [' BY DESIGN — DRIVEN BY DATA — DESIGNED TO CONVERT'];

// ---------------------------------------------------------------------------
// Footer link data — module-scope constants, never re-created on render.
// ---------------------------------------------------------------------------

interface FooterSocialLink {
  icon: React.FC<{ className?: string }> | React.FC;
  href: string;
  label: string;
  isCustom?: boolean;
}

const SOCIAL_LINKS: FooterSocialLink[] = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: XIcon, href: '#', label: 'X (Twitter)', isCustom: true },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

const NAVIGATION_LINKS = [
  { name: 'HOME', href: '#' },
  { name: 'ABOUT', href: '#' },
  { name: 'PROJECTS', href: '#' },
  { name: 'SERVICES', href: '#' },
  { name: 'BLOG', href: '#' },
  { name: 'CONTACT', href: '#' },
] as const;

const FOOTER_BOTTOM_LINKS = [
  { name: 'Style Guide', href: '#' },
  { name: 'Licenses', href: '#' },
  { name: 'Changelog', href: '#' },
  { name: 'Instructions', href: '#' },
] as const;

// ---------------------------------------------------------------------------

export default function Footer() {
  return (
    <>
      <footer className="relative w-full pt-20 pb-8">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
            {/* Left Column - Branding & Contact */}
            <div className="lg:col-span-4 space-y-8">
              {/* Logo */}
              <div>
                <h2 className="text-4xl font-['Bebas_Neue'] lg:text-5xl font-black tracking-tight">
                  UNUSUALLY<sup className="text-2xl">®</sup>
                </h2>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-black hover:bg-gray-800 flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <IconSlideUp
                      icon={
                        social.isCustom ? (
                          <social.icon />
                        ) : (
                          <social.icon className="w-5 h-5" />
                        )
                      }
                      hoverIcon={
                        social.isCustom ? (
                          <social.icon />
                        ) : (
                          <social.icon className="w-5 h-5" />
                        )
                      }
                      className="text-white"
                      triggerOn="parent-hover"
                      variant="smooth"
                    />
                  </Link>
                ))}
              </div>

              {/* Address */}
              <div className="space-y-7">
                <TextSlideUp
                  text="412 Melrose Avenue, Suite 210,"
                  variant="smooth"
                  stagger={25}
                  className='text-base text-gray-900'
                />
                <TextSlideUp
                  text="Los Angeles, CA 90036, USA"
                  variant="smooth"
                  stagger={25}
                  className='text-base text-gray-900'
                />
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <a
                  href="tel:+12135555555"
                  className="inline-flex items-center gap-2 text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors group"
                >
                  <TextSlideUp
                    text=" +1 (213) 555-5555"
                    variant="smooth"
                    stagger={25}
                    className='text-base text-gray-900 border-b-2 border-gray-900 pb-1'
                  />
                </a>

                <a href="mailto:hello@unusually.com">
                  <TextSlideUp
                    text=" HELLO@UNUSUALLY.COM"
                    variant="smooth"
                    stagger={25}
                    className='text-base font-medium text-gray-900 border-b-2 border-gray-900 pb-1'
                  />
                </a>
              </div>
            </div>

            {/* Middle Column - Navigation */}
            <div className="lg:col-span-4 lg:pl-12">
              <h3 className="text-xl text-gray-500 mb-8">Navigation</h3>
              <nav className="space-y-5">
                {NAVIGATION_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block  text-2xl lg:text-3xl font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    <TextSlideUp
                      text={link.name}
                      variant="smooth"
                      stagger={25}
                      className='text-xl  font-medium text-gray-900 border-b border-gray-900 pb-1'
                    />
                  </a>
                ))}
              </nav>
            </div>

            {/* Right Column - Marquee & Button */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              {/* Scrolling Text */}
              <div className="overflow-hidden mb-8">
                <HorizontalScrollText texts={rotatingTexts} />
              </div>

              {/* CTA Button */}
              <div className="lg:ml-auto">
                <CTAButton text='Buy template' className="bg-black text-white px-14 py-8 text-lg font-medium rounded-full transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="relative w-full ">
        <div className="bg-black rounded-t-[3rem] px-4 md:px-6 lg:px-18  pt-12 pb-8">
          {/* Footer Bottom */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6  ">
            {/* Copyright & Credits */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <span>© {new Date().getFullYear()} Unusually</span>
              <span className="text-gray-600">|</span>
              <span className="flex items-center gap-2">
                Powered by
                <a
                  href="https://webflow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 font-medium transition-colors"
                >
                  Webflow
                </a>
              </span>
              <span className="text-gray-600">|</span>
              <span className="flex items-center gap-2">
                Created by
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 font-medium transition-colors"
                >
                  Flowaze
                </a>
              </span>
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap items-center gap-6 lg:gap-8">
              {FOOTER_BOTTOM_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white hover:text-gray-300 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}