import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import ApproachGrid from '../components/ApproachGrid';
import InteractiveLink from '../components/InteractiveLink';
import Work from '../components/Work';
import CtaBand from '../components/CtaBand';
import { marqueeItems } from '../data/content';

export default function Home() {
    return (
        <>
            <Hero />
            <Marquee items={marqueeItems} />
            <Services />
            <Section id="approach">
                <SectionHeader eyebrow="How We Work" title={<>One team.<br /><span className="text-brand-light-blue italic">One direction.</span></>}>
                    <p className="max-w-md text-lg font-light text-brand-offwhite/70 leading-relaxed">
                        An external creative team for early-stage founders, so you can stay focused on building the business.
                    </p>
                </SectionHeader>
                <ApproachGrid />
                <InteractiveLink to="/about" className="inline-block mt-10 text-sm uppercase tracking-widest text-brand-yellow hover:text-brand-light-blue transition-colors">
                    Who we work with <span aria-hidden="true">→</span>
                </InteractiveLink>
            </Section>
            <Work />
            <CtaBand />
        </>
    );
}
