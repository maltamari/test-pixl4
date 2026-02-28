// types/faq.types.ts

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  /**
   * FAQ heading items (e.g., "QUICK HELP")
   */
  headingItems: Array<{ text: string; className: string }>;
  
  /**
   * Rotating texts for horizontal scroll
   */
  rotatingTexts: string[];
  
  /**
   * List of FAQ items
   */
  faqs: FAQItem[];
  
  /**
   * Image source for the left side
   */
  imageSrc: string;
  
  /**
   * Image alt text
   */
  imageAlt?: string;
  
  /**
   * CTA button text
   * @default 'ASK A QUESTION'
   */
  ctaText?: string;
  
  /**
   * CTA button onClick handler
   */
  onCtaClick?: () => void;
  
  /**
   * Background color of the section
   * @default undefined (transparent)
   */
  backgroundColor?: string;
  
  /**
   * Scroll text color
   * @default '#e8e8e8'
   */
  scrollTextColor?: string;
  
  /**
   * Total words for reveal animation
   * @default 2
   */
  totalWords?: number;
}
