// lib/constants/Projects.constants.ts

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
}
// 📋 Copy this and paste it into your lib/constants/Projects.constants.ts file


export const STORY_HEADING_ITEMS = [
  { text: 'FROM VISION TO IMPACT,', className: 'text-gray-900' },
  { text: 'CRAFTING BRANDS THAT', className: 'text-gray-900' },
  { text: 'INSPIRE AND ENDURE.', className: 'text-gray-400' },
];

export const STORY_ROTATING_TEXTS: string[] = [
  'OUR STORY',
  'OUR STORY',
  'OUR STORY',
];
export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'SPACE',
    category: 'DESIGN',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop',
    link: '/project/space',
  },
  {
    id: '2',
    title: 'MOBILE',
    category: 'IDENTITY',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop',
    link: '/project/mobile',
  },
  {
    id: '3',
    title: 'REALITY',
    category: 'STRATEGY',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop',
    link: '/project/reality',
  },
  {
    id: '4',
    title: 'ECOLOGY',
    category: 'REBRANDING',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop',
    link: '/project/ecology',
  },
];

// ✅ Heading Items - Required for SectionHeader
export const WORK_HEADING_ITEMS = [
  { text: 'SELECTED', className: 'text-white' },
  { text: 'WORK', className: 'text-gray-500' },
];

// ✅ Rotating Texts - Required for SectionHeader
export const WORK_ROTATING_TEXTS: string[] = [
  'Our Work',
  'Our Work',
  'Our Work',
];

// ✅ Copyright
export const COPYRIGHT_YEAR = '©2026';

// ✅ Total words for animation
export const WORK_TOTAL_WORDS = 3; // SELECTED + WORK + ©2026

export const TEAM_HEADING_ITEMS = [
  { text: 'DESIGN', className: 'text-black' },
  { text: 'EXPERTS', className: 'text-gray-300' },
];

export const TEAM_ROTATING_TEXTS = [
  'TEAM',
  'MEMBERS',
  'TEAM',
];
export const PILLAR_HEADING_ITEMS = [
  { text: 'VISION', className: 'text-black' },
  { text: 'PILLARS', className: 'text-gray-300' },
];

export const PILLAR_ROTATING_TEXTS = [
  'OUR VALUES',
  'OUR VALUES',
  'OUR VALUES',
];
