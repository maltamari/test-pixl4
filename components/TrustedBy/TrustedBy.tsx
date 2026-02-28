'use client';

import { SectionTitle } from './SectionTitle';
import { LogoGrid } from './LogoGrid';
import { useLogoFlipAnimation } from './useLogoFlipAnimation';
import { TRUSTED_BY_LOGOS, TRUSTED_BY_TITLE } from './trustedBy.constants';

export default function TrustedBy() {
  const { activeCardIndex, cardStates } = useLogoFlipAnimation({
    logosCount: TRUSTED_BY_LOGOS.length,
  });

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        <SectionTitle title={TRUSTED_BY_TITLE} />
        
        <LogoGrid
          logos={TRUSTED_BY_LOGOS}
          activeCardIndex={activeCardIndex}
          cardStates={cardStates}
        />
      </div>
    </section>
  );
}
