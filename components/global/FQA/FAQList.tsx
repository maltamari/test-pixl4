'use client';

import { CTAButton } from '@/components/ui/cta-button';
import { FAQItem as FAQItemType } from './faq.types';
import { FAQItem } from './FAQItem';

interface FAQListProps {
  faqs: FAQItemType[];
  openId: number | null;
  onToggle: (id: number) => void;
  ctaText: string;
  onCtaClick?: () => void;
}

export function FAQList({
  faqs,
  openId,
  onToggle,
  ctaText,
  onCtaClick,
}: FAQListProps) {
  return (
    <div className="space-y-4">
      {/* FAQ Items */}
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.id}
          id={faq.id}
          index={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openId === faq.id}
          onToggle={onToggle}
        />
      ))}

      {/* Bottom CTA */}
      <CTAButton
        text={ctaText}
        className="py-7 mt-10 md:text-2xl"
        onClick={onCtaClick}
      />
    </div>
  );
}
