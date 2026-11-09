import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import InfoCard from '../components/InfoCard';
import InteractiveLink from '../components/InteractiveLink';
import ApproachGrid from '../components/ApproachGrid';
import FounderStages from '../components/FounderStages';
import CtaBand from '../components/CtaBand';
import { positioning } from '../data/content';

export default function About() {
    return (
        <>
            <PageHeader eyebrow="About Us" title={<>Built for founders,<br /><span className="text-brand-light-blue italic">by founders.</span></>}>
                {positioning}
            </PageHeader>

            <Section className="relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <SectionHeader eyebrow="The Problem" title={<>Your company is growing.<br /><span className="text-brand-light-blue italic">Your story should grow with it.</span></>} className="text-4xl md:text-5xl uppercase tracking-tighter leading-[0.95]" />
                        <div className="-mt-6 space-y-6 font-sans text-lg font-light leading-relaxed text-brand-offwhite/80">
                            <p>You're building something worth paying attention to. 
                                But between developing your product, finding customers, raising capital, and running the business, 
                                telling your company's story can easily fall to the bottom of the list.</p>
                            <p>Building an in-house creative team isn't always practical at this stage. 
                                Managing multiple freelancers brings its own challenges. 
                                Meanwhile, your company's public presence doesn't fully reflect the quality, 
                                ambition, or potential of what you're building.</p>
                            <p>That's where Crescent Studio comes in.</p>
                            <p>We become the creative team alongside yours, bringing together strategy, 
                                visual storytelling, and creative production to help your brand communicate with clarity, 
                                consistency, and intention.</p>
                            <p>Think of us as the creative team you'd build if you had the time, resources, and bandwidth. On your side, from the outside.</p>
                        </div>
                    </div>
                    <div className="lg:pt-24">
                        <InfoCard title="The Advantage">
                            You don't need a full in-house creative department to produce work that looks and feels like one.

                            Crescent Studio brings together a carefully selected network of emerging creative talent, 
                            assembling the right team around the needs of each project. 
                            Our flexible model gives early-stage startups access to professional creative capabilities without the overhead of a permanent team.

                            From film and photography to brand visuals, every creative decision is guided by a unified vision, 
                            ensuring your brand looks, feels, and communicates consistently across every touchpoint.
                        </InfoCard>
                    </div>
                </div>
            </Section>

            <Section>
                <SectionHeader eyebrow="How We Work" title={<>Creative capacity,<br /><span className="text-brand-light-blue italic">without the overhead.</span></>} />
                <ApproachGrid />
            </Section>

            <Section>
                <SectionHeader eyebrow="Who We Work With" title={<>FROM FIRST IDEA <br /><span className="text-brand-light-blue italic">TO WHAT'S NEXT.</span></>}
                    subtitle="We partner with founders at different stages of building their businesses, providing the creative support they need to establish, communicate, and grow their brands." />
                <FounderStages />
                <InteractiveLink to="/team" className="inline-block mt-12 text-sm uppercase tracking-widest text-brand-yellow hover:text-brand-light-blue transition-colors">
                    Meet the team <span aria-hidden="true">→</span>
                </InteractiveLink>
            </Section>

            <CtaBand />
        </>
    );
}
