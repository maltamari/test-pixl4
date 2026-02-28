// constants/faq.constants.ts

import { FAQItem } from "./faq.types";


// ════════════════════════════════════════════════════════════════════════
// DEFAULT FAQ DATA (يمكن استخدامها مباشرة أو تخصيصها)
// ════════════════════════════════════════════════════════════════════════

export const DEFAULT_FAQ_HEADING_ITEMS = [
  { text: 'QUICK', className: 'text-black' },
  { text: 'HELP', className: 'text-gray-400' },
];

export const DEFAULT_FAQ_ROTATING_TEXTS = [
  'QUESTIONS — COMMON QUESTIONS',
  'QUESTIONS — COMMON QUESTIONS',
  'QUESTIONS — COMMON QUESTIONS',
];

export const DEFAULT_FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer:
      'We provide a complete range of branding and design services – from strategy and identity creation to web design and digital experience development.',
  },
  {
    id: 2,
    question: 'How long does a project take?',
    answer:
      'Project timelines vary depending on scope, but most branding projects are completed within 4-6 weeks from concept to delivery.',
  },
  {
    id: 3,
    question: 'Do you work with all industries?',
    answer:
      'Yes – we collaborate with clients across various sectors, helping each brand find its unique voice and visual identity.',
  },
  {
    id: 4,
    question: 'Can you customize my package?',
    answer:
      'Absolutely. Every brand is different, so we tailor our package and process to fit your specific goals and needs.',
  },
  {
    id: 5,
    question: 'How can we start working?',
    answer:
      "Simply reach out through our contact page or email us directly – we'll schedule a quick call to discuss your project vision.",
  },
];

export const DEFAULT_FAQ_IMAGE = '/team/default-faq.jpg';

export const DEFAULT_FAQ_CTA_TEXT = 'ASK A QUESTION';

// ════════════════════════════════════════════════════════════════════════
// EXAMPLE: PRICING PAGE FAQ
// ════════════════════════════════════════════════════════════════════════

export const PRICING_FAQ_HEADING_ITEMS = [
  { text: 'PRICING', className: 'text-black' },
  { text: 'FAQ', className: 'text-gray-400' },
];

export const PRICING_FAQ_ROTATING_TEXTS = [
  'PRICING QUESTIONS',
  'PRICING QUESTIONS',
  'PRICING QUESTIONS',
];

export const PRICING_FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: 'What payment methods do you accept?',
    answer: 'We accept credit cards, bank transfers, and PayPal...',
  },
  {
    id: 2,
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee...',
  },
  {
    id: 3,
    question: 'Can I cancel my subscription?',
    answer: 'You can cancel anytime from your account settings...',
  },
];

// ════════════════════════════════════════════════════════════════════════
// EXAMPLE: SUPPORT PAGE FAQ
// ════════════════════════════════════════════════════════════════════════

export const SUPPORT_FAQ_HEADING_ITEMS = [
  { text: 'SUPPORT', className: 'text-black' },
  { text: 'CENTER', className: 'text-gray-400' },
];

export const SUPPORT_FAQ_ROTATING_TEXTS = [
  'HOW CAN WE HELP?',
  'HOW CAN WE HELP?',
  'HOW CAN WE HELP?',
];

export const SUPPORT_FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: 'How do I contact support?',
    answer: 'You can reach us via email, chat, or phone...',
  },
  {
    id: 2,
    question: 'What are your support hours?',
    answer: 'Our support team is available 24/7...',
  },
  {
    id: 3,
    question: 'How fast do you respond?',
    answer: 'We typically respond within 2-4 hours...',
  },
];
