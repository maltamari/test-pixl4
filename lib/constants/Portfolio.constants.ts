// lib/constants/Portfolio.constants.ts

export const PORTFOLIO_HEADING_ITEMS = [
  { text: 'CREATIVE', className: 'text-gray-900' },
  { text: 'SHOWCASE.', className: 'text-gray-400' },
];

export const PORTFOLIO_ROTATING_TEXTS: string[] = [
  'OUR PORTFOLIO',
  'OUR PORTFOLIO',
  'OUR PORTFOLIO',
];

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  image: string;
  logo?: string;
  href: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'space',
    title: 'SPACE',
    category: 'DESIGN',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1400&q=80&fit=crop',
    href: '/portfolio/space',
  },
  {
    id: 'mobile',
    title: 'MOBILE',
    category: 'IDENTITY',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=80&fit=crop',
    href: '/portfolio/mobile',
  },
  {
    id: 'reality',
    title: 'REALITY',
    category: 'STRATEGY',
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=1400&q=80&fit=crop',
    href: '/portfolio/reality',
  },
  {
    id: 'ecology',
    title: 'ECOLOGY',
    category: 'REBRANDING',
    image: 'https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=1400&q=80&fit=crop',
    href: '/portfolio/ecology',
  },
];