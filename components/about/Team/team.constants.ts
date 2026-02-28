// constants/team.constants.ts

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    instagram?: string;
    x?: string;
    linkedin?: string;
    facebook?: string;
  };
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'NOAH REED',
    role: 'Creative Director',
    bio: 'Creative Director with a sharp eye for design, leading bold visuals and seamless brand experiences.',
    image: '/team/noah-reed.jpg',
    socials: {
      instagram: 'https://instagram.com',
      x: 'https://x.com',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    id: '2',
    name: 'LUNA HAYES',
    role: 'Brand Strategist',
    bio: 'A brand strategist who creates strong identities and messages that connect brands to the public.',
    image: '/team/luna-hayes.jpg',
    socials: {
      instagram: 'https://instagram.com',
      x: 'https://x.com',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    id: '3',
    name: 'AVA MITCHELL',
    role: 'UI/UX Designer',
    bio: 'UI/UX Designer focused on clean, intuitive interfaces that keep users engaged from start to finish.',
    image: '/team/ava-mitchell.jpg',
    socials: {
      instagram: 'https://instagram.com',
      x: 'https://x.com',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    id: '4',
    name: 'LIAM PARK',
    role: 'Front-end Developer',
    bio: 'Front-end Developer who turns complex ideas into smooth, responsive, and high-performing websites.',
    image: '/team/liam-park.jpg',
    socials: {
      instagram: 'https://instagram.com',
      x: 'https://x.com',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
    },
  },
];

export const TEAM_HEADING_ITEMS = [
  { text: 'OUR', className: 'text-black' },
  { text: 'TEAM', className: 'text-gray-400' },
];

export const TEAM_ROTATING_TEXTS: string[] = [
  'Meet The Team',
  'Meet The Team',
  'Meet The Team',
];
