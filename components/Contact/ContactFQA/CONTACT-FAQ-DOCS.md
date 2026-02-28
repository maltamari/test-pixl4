# Contact FAQ Section - Documentation

## 🎯 Overview

FAQ section مخصص لصفحة Contact مع أسئلة عن كيفية التواصل والرد.

## 📁 Files

```
components/faq/
└── ContactFAQSection.tsx    # Contact FAQ wrapper

constants/
└── contactFaq.constants.ts  # Contact FAQ data
```

## 📝 Usage

### Basic Usage (No Props)

```typescript
import ContactFAQSection from '@/components/faq/ContactFAQSection';

export default function ContactPage() {
  return (
    <>
      {/* Your contact form */}
      <ContactForm />
      
      {/* FAQ Section */}
      <ContactFAQSection />
    </>
  );
}
```

### With Custom CTA Handler

```typescript
import ContactFAQSection from '@/components/faq/ContactFAQSection';

export default function ContactPage() {
  const handleCTA = () => {
    // Open chat widget
    window.openChat();
    
    // Or redirect to form
    router.push('/contact#form');
    
    // Or custom logic
    console.log('User clicked CTA');
  };

  return (
    <ContactFAQSection onCtaClick={handleCTA} />
  );
}
```

### With Custom Background

```typescript
<ContactFAQSection
  backgroundColor="#f9fafb"
  imageSrc="/custom-contact-image.jpg"
/>
```

## 📊 Content

### Heading
```
CONTACT QUESTIONS
```

### FAQs Included

1. **How can I get in touch with you?**
   - Contact methods (form, email, call)
   - Response time (24 hours)

2. **What information should I include in my message?**
   - Name, company, project details
   - Timeline and budget

3. **How long does it take to get a response?**
   - 24 hours during business days
   - Call for urgent matters

4. **Do you offer free consultations?**
   - Yes, 30-minute free consultation

5. **What are your business hours?**
   - Monday-Friday, 9 AM - 6 PM
   - Can message anytime

### CTA Button
```
"SEND A MESSAGE"
```

Default behavior: Scrolls to #contact-form

## 🎨 Props

```typescript
interface ContactFAQSectionProps {
  onCtaClick?: () => void;        // Optional CTA handler
  backgroundColor?: string;        // Optional bg color
  imageSrc?: string;              // Optional custom image
}
```

## ✨ Features

### Auto-Scroll to Form
Default CTA behavior scrolls to contact form:
```typescript
const contactForm = document.getElementById('contact-form');
contactForm.scrollIntoView({ behavior: 'smooth' });
```

### Customizable CTA
Override default behavior:
```typescript
<ContactFAQSection
  onCtaClick={() => {
    // Your custom logic
  }}
/>
```

### Image Zoom
Same as other FAQ sections - zooms based on open question

## 🔧 Customization

### Change Questions

Edit `constants/contactFaq.constants.ts`:

```typescript
export const CONTACT_FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: 'Your custom question?',
    answer: 'Your custom answer...',
  },
  // Add more...
];
```

### Change Heading

```typescript
export const CONTACT_FAQ_HEADING_ITEMS = [
  { text: 'REACH', className: 'text-black' },
  { text: 'US', className: 'text-gray-400' },
];
```

### Change CTA Text

```typescript
export const CONTACT_FAQ_CTA_TEXT = 'START A CONVERSATION';
```

## 📋 Complete Example

```typescript
'use client';

import { useState } from 'react';
import ContactFAQSection from '@/components/faq/ContactFAQSection';

export default function ContactPage() {
  const [showChat, setShowChat] = useState(false);

  const handleCTA = () => {
    // Option 1: Open chat
    setShowChat(true);
    
    // Option 2: Scroll to form
    document.getElementById('contact-form')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    
    // Option 3: Track analytics
    analytics.track('FAQ_CTA_Clicked', {
      page: 'contact',
      action: 'send_message',
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-black text-white">
        <h1 className="text-7xl font-bold text-center">
          Let's Talk
        </h1>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20">
        <div className="max-w-2xl mx-auto">
          <form>
            {/* Form fields */}
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <ContactFAQSection
        onCtaClick={handleCTA}
        backgroundColor="#ffffff"
      />

      {/* Chat Widget */}
      {showChat && <ChatWidget onClose={() => setShowChat(false)} />}
    </div>
  );
}
```

## 🎯 All FAQ Variants

### 1. Home Page
```typescript
import DefaultFAQSection from '@/components/faq/DefaultFAQSection';
<DefaultFAQSection />
```

### 2. Contact Page
```typescript
import ContactFAQSection from '@/components/faq/ContactFAQSection';
<ContactFAQSection />
```

### 3. Pricing Page
```typescript
import FAQSection from '@/components/faq/FAQSection';
import { PRICING_FAQ_* } from '@/constants/faq.constants';

<FAQSection
  headingItems={PRICING_FAQ_HEADING_ITEMS}
  faqs={PRICING_FAQ_ITEMS}
  {...}
/>
```

### 4. Support Page
```typescript
import FAQSection from '@/components/faq/FAQSection';
import { SUPPORT_FAQ_* } from '@/constants/faq.constants';

<FAQSection
  headingItems={SUPPORT_FAQ_HEADING_ITEMS}
  faqs={SUPPORT_FAQ_ITEMS}
  {...}
/>
```

### 5. Custom Page
```typescript
import FAQSection from '@/components/faq/FAQSection';

<FAQSection
  headingItems={[...]}
  faqs={[...]}
  imageSrc="..."
/>
```

## 💡 Tips

### Tip 1: Add Form ID
```html
<form id="contact-form">
  <!-- This enables auto-scroll -->
</form>
```

### Tip 2: Track Analytics
```typescript
<ContactFAQSection
  onCtaClick={() => {
    analytics.track('Contact_FAQ_CTA');
    // Then scroll or open chat
  }}
/>
```

### Tip 3: Conditional Rendering
```typescript
{showFAQ && <ContactFAQSection />}
```

## 🐛 Troubleshooting

**CTA doesn't scroll to form:**
- Make sure form has `id="contact-form"`
- Check element exists in DOM

**Image not loading:**
- Add image to `/public/contact-person.jpg`
- Or pass custom `imageSrc` prop

## ✅ Summary

**For Contact Page:**
```typescript
import ContactFAQSection from '@/components/faq/ContactFAQSection';

<ContactFAQSection /> // ✅ That's it!
```

**With Custom Handler:**
```typescript
<ContactFAQSection
  onCtaClick={() => {
    // Your logic
  }}
/>
```

---

**Contact FAQ ready to use! 📞**
