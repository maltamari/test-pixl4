# FAQ Section - Reusable & Flexible

## 🎯 Overview

FAQ section **قابل لإعادة الاستخدام** في أي صفحة مع محتوى مختلف.

## 📁 Component Structure

```
faq/
├── FAQSection.tsx        # Main component (accepts props)
├── FAQImage.tsx          # Image with zoom effect
├── FAQList.tsx           # List of FAQ items
└── FAQItem.tsx           # Single FAQ item

types/
└── faq.types.ts          # TypeScript interfaces

constants/
└── faq.constants.ts      # Default & example FAQ data
```

## 🔧 Props Interface

```typescript
interface FAQSectionProps {
  // Required
  headingItems: Array<{ text: string; className: string }>;
  rotatingTexts: string[];
  faqs: FAQItem[];
  imageSrc: string;
  
  // Optional
  imageAlt?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundColor?: string;
  scrollTextColor?: string;
  totalWords?: number;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
```

## 📝 Usage Examples

### Example 1: Default FAQ (Home Page)

```typescript
import FAQSection from '@/components/faq/FAQSection';
import {
  DEFAULT_FAQ_HEADING_ITEMS,
  DEFAULT_FAQ_ROTATING_TEXTS,
  DEFAULT_FAQ_ITEMS,
  DEFAULT_FAQ_IMAGE,
} from '@/constants/faq.constants';

export default function HomePage() {
  return (
    <FAQSection
      headingItems={DEFAULT_FAQ_HEADING_ITEMS}
      rotatingTexts={DEFAULT_FAQ_ROTATING_TEXTS}
      faqs={DEFAULT_FAQ_ITEMS}
      imageSrc={DEFAULT_FAQ_IMAGE}
      imageAlt="FAQ Support"
    />
  );
}
```

### Example 2: Pricing Page FAQ

```typescript
import FAQSection from '@/components/faq/FAQSection';
import {
  PRICING_FAQ_HEADING_ITEMS,
  PRICING_FAQ_ROTATING_TEXTS,
  PRICING_FAQ_ITEMS,
} from '@/constants/faq.constants';

export default function PricingPage() {
  return (
    <FAQSection
      headingItems={PRICING_FAQ_HEADING_ITEMS}
      rotatingTexts={PRICING_FAQ_ROTATING_TEXTS}
      faqs={PRICING_FAQ_ITEMS}
      imageSrc="/pricing-image.jpg"
      imageAlt="Pricing FAQ"
      ctaText="VIEW PRICING"
      backgroundColor="#f9fafb"
    />
  );
}
```

### Example 3: Support Page FAQ

```typescript
import FAQSection from '@/components/faq/FAQSection';
import {
  SUPPORT_FAQ_HEADING_ITEMS,
  SUPPORT_FAQ_ROTATING_TEXTS,
  SUPPORT_FAQ_ITEMS,
} from '@/constants/faq.constants';

export default function SupportPage() {
  const handleCtaClick = () => {
    console.log('Opening support chat...');
  };

  return (
    <FAQSection
      headingItems={SUPPORT_FAQ_HEADING_ITEMS}
      rotatingTexts={SUPPORT_FAQ_ROTATING_TEXTS}
      faqs={SUPPORT_FAQ_ITEMS}
      imageSrc="/support-team.jpg"
      imageAlt="Support Team"
      ctaText="CONTACT SUPPORT"
      onCtaClick={handleCtaClick}
      scrollTextColor="#000000"
    />
  );
}
```

### Example 4: Custom FAQ

```typescript
import FAQSection from '@/components/faq/FAQSection';

const CUSTOM_HEADING = [
  { text: 'SHIPPING', className: 'text-blue-600' },
  { text: 'INFO', className: 'text-gray-400' },
];

const CUSTOM_ROTATING_TEXTS = [
  'DELIVERY QUESTIONS',
  'DELIVERY QUESTIONS',
];

const CUSTOM_FAQS = [
  {
    id: 1,
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to over 50 countries worldwide.',
  },
  {
    id: 2,
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 5-7 business days.',
  },
];

export default function ShippingPage() {
  return (
    <FAQSection
      headingItems={CUSTOM_HEADING}
      rotatingTexts={CUSTOM_ROTATING_TEXTS}
      faqs={CUSTOM_FAQS}
      imageSrc="/shipping.jpg"
      imageAlt="Shipping"
      ctaText="TRACK ORDER"
      backgroundColor="#ffffff"
    />
  );
}
```

## 🎨 Customization

### Change Colors

```typescript
<FAQSection
  headingItems={[
    { text: 'MY', className: 'text-purple-600' },  // Custom color
    { text: 'FAQ', className: 'text-gray-300' },
  ]}
  // ...
/>
```

### Change Background

```typescript
<FAQSection
  backgroundColor="#1a1a1a"  // Dark background
  scrollTextColor="#ffffff"  // White scroll text
  // ...
/>
```

### Change CTA

```typescript
<FAQSection
  ctaText="GET STARTED"
  onCtaClick={() => router.push('/contact')}
  // ...
/>
```

### Add More FAQs

```typescript
const myFAQs = [
  { id: 1, question: '...', answer: '...' },
  { id: 2, question: '...', answer: '...' },
  { id: 3, question: '...', answer: '...' },
  // ... unlimited
];

<FAQSection faqs={myFAQs} ... />
```

## 📊 Props Details

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `headingItems` | `Array<{text, className}>` | Header text parts |
| `rotatingTexts` | `string[]` | Horizontal scroll texts |
| `faqs` | `FAQItem[]` | List of questions & answers |
| `imageSrc` | `string` | Image path |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `imageAlt` | `string` | `'FAQ'` | Image alt text |
| `ctaText` | `string` | `'ASK A QUESTION'` | CTA button text |
| `onCtaClick` | `function` | `undefined` | CTA click handler |
| `backgroundColor` | `string` | `undefined` | Section bg color |
| `scrollTextColor` | `string` | `'#e8e8e8'` | Scroll text color |
| `totalWords` | `number` | `2` | Words for reveal |

## ✨ Features

### Image Zoom
- ✅ Zooms based on open FAQ ID
- ✅ Each FAQ has unique zoom level
- ✅ Smooth 700ms transition
- ✅ FAQ 1 = 8%, FAQ 2 = 16%, etc.

### FAQ Items
- ✅ Numbered (01, 02, 03...)
- ✅ Expand/collapse with + / -
- ✅ Smooth animations
- ✅ Hover effects

### CTA Button
- ✅ Customizable text
- ✅ Optional click handler
- ✅ Styled consistently

### Responsive
- ✅ Mobile: vertical stack
- ✅ Desktop: 2 columns (image + FAQs)
- ✅ Sticky image on scroll

## 🎯 Use Cases

### 1. General FAQ (Home/About)
```typescript
headingItems: ['QUICK', 'HELP']
faqs: General questions about services
```

### 2. Pricing FAQ
```typescript
headingItems: ['PRICING', 'FAQ']
faqs: Payment, refund, billing questions
```

### 3. Support FAQ
```typescript
headingItems: ['SUPPORT', 'CENTER']
faqs: Contact, hours, response time
```

### 4. Product FAQ
```typescript
headingItems: ['PRODUCT', 'QUESTIONS']
faqs: Features, compatibility, specs
```

### 5. Shipping FAQ
```typescript
headingItems: ['SHIPPING', 'INFO']
faqs: Delivery, tracking, returns
```

## 📦 Files Structure

```
components/faq/
├── FAQSection.tsx        (70 lines)  ✅ Reusable
├── FAQImage.tsx          (25 lines)
├── FAQList.tsx           (35 lines)
└── FAQItem.tsx           (60 lines)

types/
└── faq.types.ts          (50 lines)  ✅ TypeScript

constants/
└── faq.constants.ts      (120 lines) ✅ Examples

Total: ~360 lines
```

## 🔄 Migration Guide

### Old Code (Hardcoded)
```typescript
// ❌ Fixed content, can't reuse
export default function FAQ() {
  const faqs = [...]; // Hardcoded
  return <section>...</section>;
}
```

### New Code (Flexible)
```typescript
// ✅ Accepts props, fully reusable
<FAQSection
  headingItems={[...]}
  faqs={[...]}
  imageSrc="..."
/>
```

## 💡 Advanced Patterns

### Pattern 1: Dynamic FAQs from API

```typescript
'use client';

import { useState, useEffect } from 'react';
import FAQSection from '@/components/faq/FAQSection';

export default function DynamicFAQ() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch('/api/faqs')
      .then(res => res.json())
      .then(data => setFaqs(data));
  }, []);

  return (
    <FAQSection
      headingItems={[...]}
      rotatingTexts={[...]}
      faqs={faqs}
      imageSrc="..."
    />
  );
}
```

### Pattern 2: Multiple FAQ Sections

```typescript
export default function Page() {
  return (
    <>
      {/* General FAQ */}
      <FAQSection {...generalProps} />
      
      {/* Pricing FAQ */}
      <FAQSection {...pricingProps} />
      
      {/* Technical FAQ */}
      <FAQSection {...technicalProps} />
    </>
  );
}
```

### Pattern 3: Filtered FAQs

```typescript
const [category, setCategory] = useState('all');

const filteredFAQs = ALL_FAQS.filter(faq => 
  category === 'all' || faq.category === category
);

<FAQSection faqs={filteredFAQs} ... />
```

## ✅ Checklist

Before using:
- [ ] Import FAQSection component
- [ ] Prepare heading items
- [ ] Prepare rotating texts
- [ ] Prepare FAQs array
- [ ] Add image to /public
- [ ] Optional: Add CTA handler
- [ ] Optional: Customize colors

## 🐛 Troubleshooting

**Image not loading:**
- Check path in `/public` folder
- Verify `imageSrc` prop

**Zoom not working:**
- Ensure FAQ IDs are sequential (1, 2, 3...)
- Check console for errors

**CTA not clickable:**
- Pass `onCtaClick` prop

---

**FAQ Section is now fully reusable! 🎯**
