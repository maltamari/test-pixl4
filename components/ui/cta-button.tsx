// components/ui/cta-button.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { StarIcon } from './Star';
import { TextSlideUp } from '../global/TextSlideUp';

interface CTAButtonProps {
  text?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'outline';
  fullWidth?: boolean;
  showStar?: boolean;
}

export function CTAButton({
  text = 'GET IN TOUCH',
  href = '/contact',
  onClick,
  className,
  variant = "default",
  fullWidth = true,
  showStar = true,
}: CTAButtonProps) {
  const buttonContent = (
    <Button 
      variant="ghost"
      className={cn(
        'group   duration-500', // أضفت group هون
        fullWidth && 'w-full',
      )}
    >
      <div className={cn('relative capitalize flex items-center  justify-center gap-2 bg-black text-white px-6 py-3.5  rounded-full text-sm md:text-base overflow-hidden transition-all duration-500 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] w-full',className)}>
        <TextSlideUp 
          text={text}
          variant="smooth" 
          stagger={25}
          triggerOn="parent-hover" 
          textClassName="font-semibold"
        />
        {showStar && <StarIcon />}
      </div>
    </Button>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <div onClick={onClick}>
      {buttonContent}
    </div>
  );
}