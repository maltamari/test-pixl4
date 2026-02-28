// constants/workProcess.constants.ts

export interface ProcessCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const PROCESS_STEPS: ProcessCard[] = [
  {
    id: '01',
    number: '01',
    title: 'DISCOVERY',
    subtitle: 'PHASE',
    description:
      "We begin by understanding your brand's vision, audience, and goals — laying the foundation for a clear creative direction and meaningful strategy.",
  },
  {
    id: '02',
    number: '02',
    title: 'DESIGN',
    subtitle: 'CREATION',
    description:
      'Our team transforms insights into visual concepts, crafting bold and cohesive designs that express your identity across every digital touchpoint.',
  },
  {
    id: '03',
    number: '03',
    title: 'BRAND',
    subtitle: 'DELIVERY',
    description:
      'We finalize and launch your brand assets with precision, ensuring every detail communicates consistency, quality, and lasting emotional impact.',
  },
];

export const WORK_PROCESS_HEADING_ITEMS = [
  { text: 'WORK', className: 'text-white' },
  { text: 'PROCESS', className: 'text-gray-500' },
];

export const WORK_PROCESS_ROTATING_TEXTS: string[] = [
  'WORK — HOW WE WORK',
  'WORK — HOW WE WORK',
  'WORK — HOW WE WORK',
];

export const WORK_PROCESS_TOTAL_WORDS = 2;

export const PROCESS_COUNT = `(${PROCESS_STEPS.length})`;
