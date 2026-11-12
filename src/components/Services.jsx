import Section from './Section';
import SectionHeader from './SectionHeader';
import ServiceCard from './ServiceCard';
import InteractiveLink from './InteractiveLink';
import { activeServices } from '../data/content';

export default function Services() {
    return (
        <Section id="services" className="relative z-10">
            <SectionHeader eyebrow="What We Offer" title={<>Made to move<br /><span className="text-brand-light-blue italic">people.</span></>}>
                <p className="max-w-md text-lg font-light text-brand-offwhite/70 leading-relaxed">
                    From commercial filmmaking and photography to events and live production, we bring ideas to life through one cohesive creative vision.
                </p>
            </SectionHeader>

            {/* With an odd number of services, the last card spans the full row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:[&>*:last-child:nth-child(odd)]:col-span-2">
                {activeServices.map((service) => <ServiceCard key={service.index} {...service} />)}
            </div>

            <InteractiveLink to="/contact" className="inline-block mt-10 text-sm uppercase tracking-widest text-brand-yellow hover:text-brand-light-blue transition-colors">
                Have a project in mind? Get in touch <span aria-hidden="true">→</span>
            </InteractiveLink>
        </Section>
    );
}
