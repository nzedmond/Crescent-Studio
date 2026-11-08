import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import InfoCard from '../components/InfoCard';
import InteractiveLink from '../components/InteractiveLink';
import CtaBand from '../components/CtaBand';

export default function About() {
    return (
        <>
            <PageHeader eyebrow="About Us" title={<>Built for founders,<br /><span className="text-brand-light-blue italic">by founders.</span></>}>
                An independent creative studio working as the external creative team for early-stage companies.
            </PageHeader>

            <Section width="max-w-5xl" className="relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 font-sans text-lg font-light leading-relaxed">
                    <div>
                        <p className="mb-6">Early-stage companies are building impressive products, but their public presence often hasn't caught up. Crescent Studio was founded to solve this exact problem.</p>
                        <p>We are an independent creative studio that functions as your external creative team. Our approach is rooted in authentic, documentary-informed storytelling. Through commercial filmmaking, photography, event coverage, and live production, we believe in showing the human element.</p>
                    </div>
                    <div>
                        <InfoCard title="The Advantage">
                            By utilizing a flexible, founder-led collective model, we assemble the exact right emerging creative talent for your specific project. This keeps fixed overhead low for pre-seed and seed-stage startups, while ensuring film and photography share one unified, high-end vision.
                        </InfoCard>
                        <InteractiveLink to="/team" className="inline-block mt-10 text-sm uppercase tracking-widest text-brand-yellow hover:text-brand-light-blue transition-colors">
                            Meet the team <span aria-hidden="true">→</span>
                        </InteractiveLink>
                    </div>
                </div>
            </Section>

            <CtaBand />
        </>
    );
}
