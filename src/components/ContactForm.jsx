import { useState } from 'react';
import FloatingInput from './FloatingInput';
import { contactFields } from '../data/content';

// 'idle' -> 'leaving' (fade out) -> 'sent'
export default function ContactForm() {
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('leaving');
        setTimeout(() => setStatus('sent'), 300);
    };

    return (
        <div className="relative">
            {status !== 'sent' && (
                <form onSubmit={handleSubmit} className={`space-y-8 transition-opacity duration-300 ${status === 'leaving' ? 'opacity-0' : ''}`}>
                    {contactFields.map((field) => <FloatingInput key={field.name} {...field} />)}
                    <button type="submit" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-brand-navy bg-brand-offwhite hover:bg-brand-yellow overflow-hidden transition-all duration-300 interactive" data-cursor="hover">
                        <span className="relative z-10 tracking-widest uppercase text-sm">Send Inquiry</span>
                    </button>
                </form>
            )}

            {status === 'sent' && (
                <div className="absolute inset-0 bg-brand-navy flex items-center justify-center border border-brand-light-blue/30 p-8 text-center">
                    <div>
                        <h3 className="font-display text-3xl mb-4">Received.</h3>
                        <p className="text-brand-offwhite/70 font-light">Thank you. We will review your inquiry and reach out shortly to discuss the creative direction.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
