'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';
import { useScrollWordReveal } from '../hooks/useScrollWord';
import { CTAButton } from '../ui/cta-button';
import { SectionHeader } from '../global/Serviceheader';

const FAQ_HEADING_ITEMS = [
  { text: 'QUICK ', className: 'text-black' },
  { text: 'HELP', className: 'text-gray-400' },
];

const FAQ_ROTATING_TEXTS = [
  'QUESTIONS — COMMON QUESTIONS',
  'QUESTIONS — COMMON QUESTIONS',
];

const faqs = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer:
      'We provide a complete range of branding and design services – from strategy and identity creation to web design and digital experience development.',
  },
  {
    id: 2,
    question: 'How long does a project take?',
    answer:
      'Project timelines vary depending on scope, but most branding projects are completed within 4-6 weeks from concept to delivery.',
  },
  {
    id: 3,
    question: 'Do you work with all industries?',
    answer:
      'Yes – we collaborate with clients across various sectors, helping each brand find its unique voice and visual identity.',
  },
  {
    id: 4,
    question: 'Can you customize my package?',
    answer:
      'Absolutely. Every brand is different, so we tailor our package and process to fit your specific goals and needs.',
  },
  {
    id: 5,
    question: 'How can we start working?',
    answer:
      "Simply reach out through our contact page or email us directly – we'll schedule a quick call to discuss your project vision.",
  },
];

export default function FAQ() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<number | null>(null);

  const visibleWords = useScrollWordReveal({
    elementRef: headingRef,
    totalWords: 2,
  });

  // حساب عدد الأسئلة المفتوحة للزوم
  const openCount = openId !== null ? openId : 0;
  const zoomScale = 1 + openCount * 0.08; // كل سؤال يزيد الزوم 8%

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-20 ">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          ref={headingRef}
          headingItems={FAQ_HEADING_ITEMS}
          rotatingTexts={FAQ_ROTATING_TEXTS}
          visibleWords={visibleWords}
          scrollTextColor="#e8e8e8"
          showCta={false}
          displayMode='inline'
          textSizeClass="text-6xl md:text-7xl lg:text-[150px]"
        />

        {/* Content Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image with Zoom Effect */}
          <div className="relative bg-gray-200 rounded-3xl overflow-hidden h-[500px] lg:h-[700px] lg:sticky lg:top-24">
            <div
              className="w-full h-full transition-transform duration-700 ease-out"
              style={{
                transform: `scale(${zoomScale})`,
              }}
            >
              <Image
                src="/path-to-your-image.jpg"
                alt="FAQ Person"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right: FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="border-b border-gray-300 pb-6 transition-all duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-start justify-between gap-4 text-left group"
                >
                  <div className="flex-1">
                    <span className="text-gray-400 text-sm mb-2 block">
                      ({String(index + 1).padStart(2, '0')})
                    </span>
                    <h3 className="text-2xl md:text-3xl font-medium text-black group-hover:text-gray-600 transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Button */}
                  <div className="shrink-0 mt-6">
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {openId === faq.id ? (
                        <Minus className="w-6 h-6 text-white" strokeWidth={2} />
                      ) : (
                        <Plus className="w-6 h-6 text-white" strokeWidth={2} />
                      )}
                    </div>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openId === faq.id
                      ? 'max-h-96 opacity-100 mt-4'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 text-lg leading-relaxed pl-16">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom CTA */}
            <CTAButton text='ASK A QUESTION' className='py-7 mt-10 md:text-2xl '/>
          </div>
        </div>
      </div>
    </section>
  );
}