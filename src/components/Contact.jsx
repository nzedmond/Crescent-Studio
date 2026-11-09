import ContactDetail from './ContactDetail';
import ContactForm from './ContactForm';
import InteractiveLink from './InteractiveLink';

export default function Contact() {
    return (
        <section id="contact" className="pt-40 md:pt-48 pb-32 px-6 md:px-20 bg-brand-navy text-brand-offwhite relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <h1 className="font-display font-bold text-6xl md:text-8xl tracking-tighter mb-6">Let's Talk.</h1>
                    <p className="text-xl font-light text-brand-offwhite/60 mb-12 max-w-md">
                        Preparing for a launch, a raise, or a rebrand? Not sure what you need yet? That's our job. Tell us where your company is headed and we'll work out the creative priorities with you.
                    </p>
                    <div className="space-y-6">
                        <ContactDetail label="Email">
                            <InteractiveLink href="mailto:hello@crescentstudio.com" className="text-2xl hover:text-brand-light-blue transition-colors">hello@crescentstudio.com</InteractiveLink>
                        </ContactDetail>
                        <ContactDetail label="Location">
                            <p className="text-lg text-brand-offwhite/80">Hamilton, NY <span className="text-sm italic opacity-50 block mt-1">Available for travel</span></p>
                        </ContactDetail>
                    </div>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}
