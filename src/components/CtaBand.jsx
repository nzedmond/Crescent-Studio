import Section from './Section';
import InteractiveLink from './InteractiveLink';

// Closing call-to-action that routes to the contact page
export default function CtaBand({ title = <>Have a story<br /><span className="text-brand-light-blue italic">to tell?</span></> }) {
    return (
        <Section className="relative z-10 border-t border-brand-offwhite/10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                <h2 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter leading-[0.95]">{title}</h2>
                <InteractiveLink
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 font-bold text-brand-navy bg-brand-offwhite hover:bg-brand-yellow transition-colors duration-300 tracking-widest uppercase text-sm self-start md:self-auto"
                >
                    Start a project <span aria-hidden="true" className="ml-2">→</span>
                </InteractiveLink>
            </div>
        </Section>
    );
}
