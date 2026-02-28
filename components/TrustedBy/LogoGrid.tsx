'use client';

import LogoFlipCard from "./LogoFlipCard";
import { Logo } from "./trustedBy.constants";


interface LogoGridProps {
  logos: Logo[];
  activeCardIndex: number | null;
  cardStates: boolean[];
}

export function LogoGrid({ logos, activeCardIndex, cardStates }: LogoGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {logos.map((logo, index) => (
        <LogoFlipCard
          key={logo.id}
          frontLogo={logo.front}
          backLogo={logo.back}
          isActive={activeCardIndex === index}
          showBack={cardStates[index]}
        />
      ))}
    </div>
  );
}
