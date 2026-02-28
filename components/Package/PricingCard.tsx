'use client';

import { Plus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { CTAButton } from '../ui/cta-button';
import { ClientRating } from './ClientRating';
import { Benefit } from './package.constants';

interface PricingCardProps {
  avatars: string[];
  rating: string;
  companiesHelped: string;
  guarantee: string;
  amount: string;
  period: string;
  benefits: Benefit[];
}

export function PricingCard({
  avatars,
  rating,
  companiesHelped,
  guarantee,
  amount,
  period,
  benefits,
}: PricingCardProps) {
  return (
    <Card className="bg-[#1C1C1C] border-[#2A2A2A] p-8 rounded-3xl flex flex-col h-full">
      {/* Top Section - Rating & Avatars */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <ClientRating
          avatars={avatars}
          rating={rating}
          companiesHelped={companiesHelped}
        />

        {/* Guarantee */}
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>{guarantee}</span>
          <Plus className="w-4 h-4" />
        </div>
      </div>

      <div className="h-px bg-[#2A2A2A] mb-8"></div>

      {/* Price */}
      <div className="mb-8">
        <div className="flex max-sm:flex-col max-sm:items-start items-end gap-2 mb-6">
          <span className="text-7xl md:text-8xl font-meduim text-white">{amount}</span>
          <span className="text-gray-400 text-xl mb-3">{period}</span>
        </div>
      </div>

      <div className="h-px bg-[#2A2A2A] mb-8"></div>

      {/* Benefits */}
      <div className="space-y-4 mb-8 flex-1">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-start gap-1 sm:gap-3">
            <span className="text-white font-semibold">{benefit.title}</span>
            <span className="text-gray-400">- {benefit.description}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <CTAButton text="GET STARTED" className="bg-white text-black py-6.5 mb-2" />
    </Card>
  );
}
