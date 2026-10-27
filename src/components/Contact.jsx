import ContactDetail from './ContactDetail';
import ContactForm from './ContactForm';
import Footer from './Footer';
import InteractiveLink from './InteractiveLink';

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 md:px-20 bg-brand-navy text-brand-offwhite relative z-20 border-t border-brand-offwhite/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <h2 className="font-display font-bold text-6xl md:text-8xl tracking-tighter mb-6">Let's Talk.</h2>
                    <p className="text-xl font-light text-brand-offwhite/60 mb-12 max-w-md">
                        Preparing for a launch, raise, or rebrand? We are ready to build the story.
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
            <Footer />
        </section>
    );
}
