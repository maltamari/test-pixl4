// constants/contactFaq.constants.ts

import { FAQItem } from "@/components/global/FQA/faq.types";


export const CONTACT_FAQ_HEADING_ITEMS = [
  { text: 'CONTACT', className: 'text-black' },
  { text: 'QUESTIONS', className: 'text-gray-400' },
];

export const CONTACT_FAQ_ROTATING_TEXTS = [
  'NEED HELP? — GET IN TOUCH',
  'NEED HELP? — GET IN TOUCH',
  'NEED HELP? — GET IN TOUCH',
];

export const CONTACT_FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: 'How can I get in touch with you?',
    answer:
      'You can reach us through the contact form on this page, email us directly, or give us a call. We typically respond within 24 hours.',
  },
  {
    id: 2,
    question: 'What information should I include in my message?',
    answer:
      'Please include your name, company name (if applicable), project details, timeline, and budget. The more information you provide, the better we can assist you.',
  },
  {
    id: 3,
    question: 'How long does it take to get a response?',
    answer:
      'We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.',
  },
  {
    id: 4,
    question: 'Do you offer free consultations?',
    answer:
      'Yes! We offer a complimentary 30-minute consultation to discuss your project, goals, and how we can help bring your vision to life.',
  },
  {
    id: 5,
    question: 'What are your business hours?',
    answer:
      "Our office hours are Monday to Friday, 9:00 AM to 6:00 PM. However, you can send us a message anytime, and we'll get back to you as soon as possible.",
  },
];

export const CONTACT_FAQ_IMAGE = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop';

export const CONTACT_FAQ_CTA_TEXT = 'SEND A MESSAGE';

export const CONTACT_FAQ_TOTAL_WORDS = 2;