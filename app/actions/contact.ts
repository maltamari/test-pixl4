'use server';

import { contactSchema, type ContactFormData } from '@/lib/validations/contact';

export async function submitContactForm(data: ContactFormData) {
    // 1. Server-side Validation
    // Security boundary: NEVER trust the client. Always re-validate the payload on the server.
    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
        return {
            success: false,
            error: 'Invalid form data provided.',
            details: parsed.error.format()
        };
    }

    // 2. Security: Rate Limiting & Spam Protection Stub
    // Production Note: Implement UPSTASH Redis or Cloudflare Turnstile here.
    // Example: 
    // const ip = headers().get('x-forwarded-for') || '127.0.0.1';
    // if (await isRateLimited(ip)) return { success: false, error: 'Too many requests' }

    try {
        // 3. Simulate processing time for DB Storage or Email dispatch
        // Production Note: Configure Resend or Nodemailer to dispatch the parsed.data payloads.
        // Ensure all variables outputted to raw HTML emails are stripped of script tags.
        await new Promise((resolve) => setTimeout(resolve, 1500));

        return { success: true };
    } catch (error) {
        console.error('SERVER ACTION ERROR (submitContactForm):', error);
        // Return a generic error to the client instead of the raw stack trace
        return { success: false, error: 'Failed to send message dynamically. Please try again later.' };
    }
}
