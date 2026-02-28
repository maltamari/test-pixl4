'use client';

import FAQSection from '@/components/global/FQA/FAQSection';
import {
  CONTACT_FAQ_HEADING_ITEMS,
  CONTACT_FAQ_ROTATING_TEXTS,
  CONTACT_FAQ_ITEMS,
  CONTACT_FAQ_IMAGE,
  CONTACT_FAQ_CTA_TEXT,
  CONTACT_FAQ_TOTAL_WORDS,
} from './contactFaq.constants';

interface ContactFAQSectionProps {
  /**
   * Optional: Override CTA click handler
   */
  onCtaClick?: () => void;
  
  /**
   * Optional: Override background color
   */
  backgroundColor?: string;
  
  /**
   * Optional: Override image source
   */
  imageSrc?: string;
}

/**
 * ContactFAQSection - FAQ section specifically for Contact page
 * 
 * @example
 * ```tsx
 * import ContactFAQSection from '@/components/faq/ContactFAQSection';
 * 
 * export default function ContactPage() {
 *   return (
 *     <>
 *       <ContactForm />
 *       <ContactFAQSection />
 *     </>
 *   );
 * }
 * ```
 */
export default function ContactFAQSection({
  onCtaClick,
  backgroundColor,
  imageSrc = CONTACT_FAQ_IMAGE,
}: ContactFAQSectionProps) {
  const handleCTA = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      // Default: scroll to contact form
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <FAQSection
      headingItems={CONTACT_FAQ_HEADING_ITEMS}
      rotatingTexts={CONTACT_FAQ_ROTATING_TEXTS}
      faqs={CONTACT_FAQ_ITEMS}
      imageSrc={imageSrc}
      imageAlt="Contact Support"
      ctaText={CONTACT_FAQ_CTA_TEXT}
      onCtaClick={handleCTA}
      backgroundColor={backgroundColor}
      totalWords={CONTACT_FAQ_TOTAL_WORDS}
    />
  );
}
