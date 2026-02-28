// lib/constants/Contact.constants.ts
import { Instagram, Linkedin } from 'lucide-react';
import { SocialLink } from '@/components/Hero';

export const CONTACT_SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://instagram.com', icon: Instagram },
  { href: 'https://linkedin.com',  icon: Linkedin  },
];

export const CONTACT_BG_TEXT = 'GET--G';

export const CONTACT_FORM_FIELDS = [
  { id: 'name',    label: 'NAME',          type: 'text',     placeholder: '' },
  { id: 'email',   label: 'EMAIL ADDRESS', type: 'email',    placeholder: '' },
  { id: 'subject', label: 'SUBJECT',       type: 'text',     placeholder: '' },
] as const;