'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CONTACT_BG_TEXT, CONTACT_FORM_FIELDS, CONTACT_SOCIAL_LINKS } from '@/lib/constants/Contact.constants';
import { SocialIconGroup } from '../Hero/SocialIcon';
import { contactSchema, type ContactFormData } from '@/lib/validations/contact';
import { submitContactForm } from '@/app/actions/contact';

// ---------------------------------------------------------------------------
// ContactForm
// ---------------------------------------------------------------------------

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    const result = await submitContactForm(data);

    // Explicitly handle server boundary failures
    if (!result.success) {
      setServerError(result.error || 'Failed to process request.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="w-full max-w-2xl bg-[#1a1a1a] p-5 rounded-2xl flex flex-col gap-5"
    >
      {/* Static fields driven from constants */}
      {CONTACT_FORM_FIELDS.map((field) => (
        <div key={field.id} className="flex flex-col gap-2">
          <label
            htmlFor={field.id}
            className="text-white text-xs font-bold tracking-[0.2em] uppercase"
          >
            {field.label}
          </label>
          <input
            id={field.id}
            type={field.type}
            aria-invalid={!!errors[field.id as keyof ContactFormData]}
            aria-describedby={errors[field.id as keyof ContactFormData] ? `${field.id}-error` : undefined}
            {...register(field.id as keyof ContactFormData)}
            className="w-full h-14 rounded-full bg-[#2a2a2a] border border-transparent px-6 text-white text-sm placeholder-transparent outline-none focus:border-white/20 transition-colors duration-200"
          />
          {errors[field.id as keyof ContactFormData] && (
            <p id={`${field.id}-error`} role="alert" className="text-red-400 text-xs pl-4">
              {errors[field.id as keyof ContactFormData]?.message}
            </p>
          )}
        </div>
      ))}

      {/* Message textarea */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-white text-xs font-bold tracking-[0.2em] uppercase"
        >
          MESSAGE
        </label>
        <textarea
          id="message"
          rows={4}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register('message')}
          className="w-full rounded-2xl bg-[#2a2a2a] border border-transparent px-6 py-4 text-white text-sm placeholder-transparent outline-none focus:border-white/20 transition-colors duration-200 resize-none"
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-red-400 text-xs pl-4">{errors.message.message}</p>
        )}
      </div>

      {serverError && (
        <div role="alert" className="w-full text-center mb-2">
          <p className="text-red-400 text-xs font-bold tracking-widest uppercase">{serverError}</p>
        </div>
      )}

      {/* Submit Button — identical CSS classes and text states as before */}
      <button
        type="submit"
        disabled={isSubmitting || isSubmitSuccessful}
        className="w-full h-16 rounded-full bg-white text-black text-sm font-bold tracking-[0.25em] uppercase mt-2 transition-all duration-300 hover:bg-yellow-400 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitSuccessful ? 'MESSAGE SENT ✓' : isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
      </button>
    </form>
  );
};

// ---------------------------------------------------------------------------
// GiantBgText
// ---------------------------------------------------------------------------

const GiantBgText: React.FC<{ text: string }> = ({ text }) => {
  const [left, right] = text.split('--');

  return (
    <div
      className="absolute inset-0 p-7 flex items-center justify-between overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      <span
        className="font-['Bebas_Neue'] font-bold uppercase text-white leading-none"
        style={{
          fontSize: 'clamp(19rem, 15vw, 14rem)',
          letterSpacing: '0.04em',
        }}
      >
        {left?.trim()}
      </span>

      <div className="flex-1 h-7 bg-white mx-8" />

      <span
        className="font-mono font-extrabold uppercase text-white leading-none"
        style={{
          fontSize: 'clamp(14rem, 15vw, 14rem)',
          letterSpacing: '-0.04em',
        }}
      >
        {right?.trim()}
      </span>
    </div>
  );
};

// ---------------------------------------------------------------------------
// ContactSection
// ---------------------------------------------------------------------------

const ContactSection: React.FC = () => {
  return (
    <section className="relative m-10  rounded-2xl  bg-black overflow-hidden flex flex-col">
      {/* Giant background text */}
      <GiantBgText text={CONTACT_BG_TEXT} />

      {/* Content: form centered */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-24 lg:py-32">
        <ContactForm />
      </div>

      {/* Bottom bar: social icons */}
      <div className="relative z-10 px-6 md:px-10 pb-10 flex items-center justify-between">
        <SocialIconGroup links={CONTACT_SOCIAL_LINKS} />
      </div>
    </section>
  );
};

export default ContactSection;