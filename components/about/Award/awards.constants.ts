// constants/awards.constants.ts

export interface Award {
  id: string;
  project: string;
  year: string;
  award: string;
}

export const AWARDS_DATA: Award[] = [
  {
    id: '1',
    project: 'SPACE',
    year: '2025',
    award: 'CSS DESIGN AWARDS',
  },
  {
    id: '2',
    project: 'MOBILE',
    year: '2024',
    award: 'AWWWARDS',
  },
  {
    id: '3',
    project: 'REALITY',
    year: '2023',
    award: 'CSS DESIGN AWARDS',
  },
  {
    id: '4',
    project: 'ECOLOGY',
    year: '2022',
    award: 'AWWWARDS',
  },
  {
    id: '5',
    project: 'BEYOND',
    year: '2021',
    award: 'CSS DESIGN AWARDS',
  },
];

export const AWARDS_HEADING_ITEMS = [
  { text: 'RECOGNIZED', className: 'text-black' },
  { text: 'EXCELLENCE', className: 'text-gray-300' },
];

export const AWARDS_ROTATING_TEXTS: string[] = [
  'AWARD HIGHLIGHTS',
  'AWARD HIGHLIGHTS',
  'AWARD HIGHLIGHTS',
];

export const AWARDS_TABLE_HEADERS = [
  { label: 'Project :', colSpan: 5 },
  { label: 'Year :', colSpan: 3, align: 'center' as const },
  { label: 'Award :', colSpan: 4, align: 'right' as const },
];

export const AWARDS_TOTAL_WORDS = 2;
