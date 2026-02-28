'use client';

import { Check, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface FeaturesListProps {
  features: string[];
  timeline: string;
}

export function FeaturesList({ features, timeline }: FeaturesListProps) {
  return (
    <Card className="bg-[#1C1C1C] border-[#2A2A2A] p-8 rounded-3xl h-full">
      {/* Header */}
      <div className="mb-8">
        <p className="text-gray-400 text-sm mb-6">✨ All Features Covered</p>
        <div className="h-px bg-[#2A2A2A] mb-8"></div>
      </div>

      {/* Features List */}
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-white text-lg">{feature}</span>
          </div>
        ))}
      </div>

      <div className="h-px bg-[#2A2A2A] my-8"></div>

      {/* Timeline */}
      <div className="flex items-center gap-3 text-gray-400">
        <Calendar className="w-5 h-5" />
        <span className="text-sm">Timeline: {timeline}</span>
      </div>
    </Card>
  );
}
