import { useState } from 'react';
import FloatingInput from './FloatingInput';
import { contactFields } from '../data/content';

// Where submissions are sent: a Formspree-style endpoint (accepts a form POST, replies with JSON).
// Set VITE_FORM_ENDPOINT in .env.local for local dev and in the hosting provider's environment variables.
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;
const FALLBACK_EMAIL = 'hello@crescentstudio.com';

// 'idle' -> 'sending' -> 'leaving' (fade out) -> 'sent'; or 'sending' -> 'error'
export default function ContactForm() {
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!FORM_ENDPOINT) {
            setStatus('error');
            return;
        }
        setStatus('sending');
        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                body: new FormData(e.currentTarget),
                headers: { Accept: 'application/json' },
            });
            if (!res.ok) throw new Error(`Form service responded ${res.status}`);
            setStatus('leaving');
            setTimeout(() => setStatus('sent'), 300);
        } catch {
            setStatus('error');
        }
    };

    const sending = status === 'sending';

    return (
        <div className="relative">
            {status !== 'sent' && (
                <form onSubmit={handleSubmit} className={`space-y-8 transition-opacity duration-300 ${status === 'leaving' ? 'opacity-0' : ''}`}>
                    {contactFields.map((field) => <FloatingInput key={field.name} {...field} />)}
                    {/* Honeypot: hidden from people, filled in by spam bots, which the form service then discards */}
                    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                    <button type="submit" disabled={sending} className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-brand-navy bg-brand-offwhite hover:bg-brand-yellow overflow-hidden transition-all duration-300 interactive disabled:opacity-60 disabled:cursor-wait" data-cursor="hover">
                        <span className="relative z-10 tracking-widest uppercase text-sm">{sending ? 'Sending…' : 'Send Inquiry'}</span>
                    </button>
                    {status === 'error' && (
                        <p role="alert" className="text-brand-yellow font-light">
                            Something went wrong sending your inquiry. Please try again, or email us at{' '}
                            <a href={`mailto:${FALLBACK_EMAIL}`} className="underline">{FALLBACK_EMAIL}</a>.
                        </p>
                    )}
                </form>
            )}

            {status === 'sent' && (
                <div className="absolute inset-0 bg-brand-navy flex items-center justify-center border border-brand-light-blue/30 p-8 text-center">
                    <div>
                        <h3 className="font-display text-3xl mb-4">Received.</h3>
                        <p className="text-brand-offwhite/70 font-light">Thank you. We'll be in touch shortly to talk through where your company is headed and what it needs first.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
