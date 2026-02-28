'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Minus } from 'lucide-react';
import { TextSlideUp } from './TextSlideUp';
import { CTAButton } from '../ui/cta-button';

// ---------------------------------------------------------------------------
// Types & Interfaces
// ---------------------------------------------------------------------------

interface MobileLink {
  readonly name: string;
  readonly href: string;
  readonly number: string;
}

interface NavLink {
  readonly name: string;
  readonly href: string;
}

// ---------------------------------------------------------------------------
// Navigation Constants
// ---------------------------------------------------------------------------

const MOBILE_LINKS: readonly MobileLink[] = [
  { name: 'HOME', href: '/', number: '(01)' },
  { name: 'ABOUT', href: '/about', number: '(02)' },
  { name: 'PROJECTS', href: '/projects', number: '(03)' },
  { name: 'SERVICES', href: '/services', number: '(04)' },
  { name: 'BLOG', href: '/blog', number: '(05)' },
];

const NAV_LINKS: readonly NavLink[] = [
  { name: 'HOME', href: '/' },
  { name: 'STUDIO', href: '/about' },
  { name: 'PROJECTS', href: '/projects' },
  { name: 'CONTACT', href: '/contact' },
  { name: 'BLOG', href: '/blog' },
];

/** Links displayed in the desktop horizontal nav bar (sliced to fit design constraints) */
const DESKTOP_LINKS = NAV_LINKS.slice(0, 4);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Helper to generate smooth transition styles for menu items */
const getMenuTransitionStyle = (index: number, isVisible: boolean, isCta: boolean = false): React.CSSProperties => {
  const delayIn = index * 0.1;
  const delayOut = isCta ? 0 : (MOBILE_LINKS.length - 1 - index) * 0.05;

  return {
    transition: isVisible
      ? `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delayIn}s, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${delayIn}s`
      : `opacity 0.4s ease ${delayOut}s, transform 0.4s ease ${delayOut}s`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(14px)',
  };
};

// ---------------------------------------------------------------------------
// Custom Hooks
// ---------------------------------------------------------------------------

/** Custom hook to handle scroll state for the Navbar */
function useNavbarScroll(isHome: boolean) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY < 10;
      setIsScrolled(isHome ? !atTop : true);
    };

    handleScroll(); // Sync state immediately on mount / route change
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  return isScrolled;
}

/** Custom hook to manage the mobile menu's state and animations safely */
function useMobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [linksVisible, setLinksVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimeouts = useCallback(() => {
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  }, []);

  const openMenu = useCallback(() => {
    clearTimeouts();
    setIsMenuOpen(true);
    setIsClosing(false);
    openTimeoutRef.current = setTimeout(() => setLinksVisible(true), 200);
  }, [clearTimeouts]);

  const closeMenu = useCallback(() => {
    clearTimeouts();
    setIsClosing(true);
    setLinksVisible(false);
    closeTimeoutRef.current = setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 700);
  }, [clearTimeouts]);

  const toggleMenu = useCallback(() => {
    if (isMenuOpen && !isClosing) {
      closeMenu();
    } else if (!isMenuOpen) {
      openMenu();
    }
  }, [isMenuOpen, isClosing, openMenu, closeMenu]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) closeMenu();
    };

    // Only attach listener when menu is actually open
    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, closeMenu]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return clearTimeouts;
  }, [clearTimeouts]);

  return { isMenuOpen, linksVisible, isClosing, toggleMenu, closeMenu };
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const isScrolled = useNavbarScroll(isHome);
  const { isMenuOpen, linksVisible, isClosing, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-6">
        <div className="max-w-[95%] mx-auto">
          <div
            className={`relative px-6 md:px-10 py-5 transition-all duration-700 ease-out ${isScrolled
                ? 'bg-black rounded-[2.5rem] shadow-[0_8px_48px_0_rgba(0,0,0,0.6)] border border-white/8'
                : 'bg-transparent shadow-none border-none'
              }`}
          >
            <div
              className={`absolute inset-px bg-linear-to-br from-white/3 via-transparent to-transparent pointer-events-none transition-all duration-700 ${isScrolled ? 'rounded-[3.4rem] opacity-100' : 'opacity-0'
                }`}
            />

            <div className="relative flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-3 group cursor-pointer"
                onClick={() => {
                  if (isMenuOpen) closeMenu();
                }}
              >
                <div className="relative">
                  <h1 className="text-[28px] font-['Bebas_Neue'] md:text-[22px] font-bold tracking-[-0.02em]">
                    <TextSlideUp
                      text="PIXL4"
                      hoverText="UNUSUALLY®"
                      variant="word"
                      textClassName="text-white"
                    />
                  </h1>
                </div>
                <div className="w-px h-10 bg-white/20 to-transparent" />
                <span className="mt-6 text-gray-400/90 uppercase font-medium tracking-[0.5px] font-mono">
                  Digital Agency
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="flex gap-2">
                <div className="hidden lg:flex items-center gap-1">
                  {DESKTOP_LINKS.map((link) => (
                    <Link key={link.name} href={link.href} className="group relative">
                      <div className="px-7 py-3 text-white rounded-full bg-white/12 text-[13px] font-medium tracking-wide transition-all duration-500">
                        <span className="relative z-10">
                          <TextSlideUp
                            text={link.name}
                            variant="smooth"
                            triggerOn="parent-hover"
                            stagger={25}
                          />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Menu Toggle */}
                <div className="relative">
                  <button
                    onClick={toggleMenu}
                    className="relative p-3 md:p-4 rounded-full bg-white/12 group"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                  >
                    <div className="absolute inset-0 rounded-full bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative w-5 h-5 md:w-7 md:h-7 flex flex-col justify-center items-center">
                      <Minus
                        className="w-5 h-5 -top-1.5 md:w-8 md:h-8 text-white absolute transition-all duration-500"
                      />
                      <Minus
                        className={`w-5 h-5 top-0.5 md:w-8 md:h-8 text-white absolute transition-all duration-500 ${isMenuOpen ? 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'
                          }`}
                      />
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`fixed right-0 top-25 w-76 md:w-130 origin-bottom-right transition-all duration-900 ease-out ${isMenuOpen
                        ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 scale-95 translate-y-16 pointer-events-none'
                      }`}
                  >
                    <div className="relative h-full backdrop-blur-2xl bg-[#f8f8f8]/98 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-black/8">
                      <div className="absolute inset-px rounded-[1.4rem] md:rounded-[1.9rem] bg-linear-to-br from-white/60 via-transparent to-transparent pointer-events-none" />

                      <div className="relative">
                        <div className="space-y-2">
                          {MOBILE_LINKS.map((link, index) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              onClick={() => closeMenu()}
                              className="group block"
                              style={getMenuTransitionStyle(index, linksVisible, false)}
                            >
                              <div className="flex items-center justify-between py-3 px-4">
                                <h3 className="text-xl md:text-2xl font-['Bebas_Neue'] font-extrabold font-anton text-black uppercase tracking-tight">
                                  <TextSlideUp
                                    text={link.name}
                                    variant="smooth"
                                    stagger={25}
                                    textClassName="inline-block"
                                    className="text-6xl"
                                  />
                                </h3>
                                <span className="text-sm md:text-base text-gray-400 font-light transition-all duration-300 group-hover:text-black">
                                  {link.number}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div
                          style={getMenuTransitionStyle(MOBILE_LINKS.length, linksVisible, true)}
                        >
                          <CTAButton />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Background Overlay — closes menu on outside click */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 transition-opacity duration-500"
          onClick={() => closeMenu()}
          aria-hidden="true"
        />
      )}
    </>
  );
}