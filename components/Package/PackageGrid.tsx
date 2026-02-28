'use client';

import { FeaturesList } from './FeaturesList';
import { Benefit } from './package.constants';
import { PricingCard } from './PricingCard';

interface PackageGridProps {
  features: string[];
  timeline: string;
  avatars: string[];
  rating: string;
  companiesHelped: string;
  guarantee: string;
  amount: string;
  period: string;
  benefits: Benefit[];
}

export function PackageGrid({
  features,
  timeline,
  avatars,
  rating,
  companiesHelped,
  guarantee,
  amount,
  period,
  benefits,
}: PackageGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-16">
      {/* Left Card - Features (5 columns - smaller) */}
      <div className="lg:col-span-5">
        <FeaturesList features={features} timeline={timeline} />
      </div>

      {/* Right Card - Pricing (7 columns - larger) */}
      <div className="lg:col-span-7">
        <PricingCard
          avatars={avatars}
          rating={rating}
          companiesHelped={companiesHelped}
          guarantee={guarantee}
          amount={amount}
          period={period}
          benefits={benefits}
        />
      </div>
    </div>
  );
}
