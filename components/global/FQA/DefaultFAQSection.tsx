'use client';

import FAQSection from './FAQSection';
import {
  DEFAULT_FAQ_HEADING_ITEMS,
  DEFAULT_FAQ_ROTATING_TEXTS,
  DEFAULT_FAQ_ITEMS,
  DEFAULT_FAQ_IMAGE,
  DEFAULT_FAQ_CTA_TEXT,
} from './faq.constants';

/**
 * DefaultFAQSection - Wrapper component with default props
 * 
 * Use this when you want the default FAQ content.
 * For custom content, use FAQSection directly with your own props.
 * 
 * @example
 * ```tsx
 * import DefaultFAQSection from '@/components/faq/DefaultFAQSection';
 * 
 * export default function Page() {
 *   return <DefaultFAQSection />;
 * }
 * ```
 */
export default function DefaultFAQSection() {
  return (
    <FAQSection
      headingItems={DEFAULT_FAQ_HEADING_ITEMS}
      rotatingTexts={DEFAULT_FAQ_ROTATING_TEXTS}
      faqs={DEFAULT_FAQ_ITEMS}
      imageSrc={DEFAULT_FAQ_IMAGE}
      imageAlt="FAQ Support"
      ctaText={DEFAULT_FAQ_CTA_TEXT}
    />
  );
}