'use client';

import Link from 'next/link';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { TeamMember } from './team.constants';
import { XIcon } from './XIcon';
import { IconSlideUp } from '@/components/global/IconSlideUp';


interface SocialLinksProps {
  socials: TeamMember['socials'];
}

interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  isCustom: boolean;
}

export function SocialLinks({ socials }: SocialLinksProps) {
  const links: SocialLink[] = [
    {
      label: 'Instagram',
      href: socials.instagram || '#',
      icon: Instagram,
      isCustom: false,
    },
    {
      label: 'X',
      href: socials.x || '#',
      icon: XIcon,
      isCustom: true,
    },
    {
      label: 'LinkedIn',
      href: socials.linkedin || '#',
      icon: Linkedin,
      isCustom: false,
    },
    {
      label: 'Facebook',
      href: socials.facebook || '#',
      icon: Facebook,
      isCustom: false,
    },
  ];

  return (
    <div className="flex gap-3">
      {links.map((social) => {
        const Icon = social.icon;
        
        return (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition-all duration-300 hover:bg-gray-800"
            aria-label={social.label}
          >
            <IconSlideUp
              icon={<Icon className={social.isCustom ? 'w-5 h-5' : 'h-5 w-5'} />}
              hoverIcon={<Icon className={social.isCustom ? 'w-5 h-5' : 'h-5 w-5'} />}
              className="text-white"
              triggerOn="parent-hover"
              variant="smooth"
            />
          </Link>
        );
      })}
    </div>
  );
}
