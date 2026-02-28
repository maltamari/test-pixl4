'use client';

import { CTAButton } from '../ui/cta-button';

interface WorkFooterProps {
  buttonText?: string;
  buttonClassName?: string;
}

export function WorkFooter({
  buttonText = 'ALL PROJECTS',
  buttonClassName = 'bg-white text-black',
}: WorkFooterProps) {
  return (
    <div className="mt-12 ml-2 flex justify-start">
      <CTAButton text={buttonText} className={buttonClassName} />
    </div>
  );
}