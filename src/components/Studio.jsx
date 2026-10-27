import Section from './Section';
import SectionHeader from './SectionHeader';
import InfoCard from './InfoCard';

export default function Studio() {
    return (
        <Section id="studio" width="max-w-5xl" className="relative z-20 border-t border-brand-offwhite/10">
            <SectionHeader
                eyebrow="About the Studio"
                className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight"
                title={<>Built for founders,<br /><span className="text-brand-light-blue">by founders.</span></>}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 font-sans text-lg font-light leading-relaxed">
                <div>
                    <p className="mb-6">Early-stage companies are building impressive products, but their public presence often hasn't caught up. Crescent Studio was founded to solve this exact problem.</p>
                    <p>We are an independent creative studio that functions as your external creative team. Our approach is rooted in authentic, documentary-informed storytelling. Through commercial filmmaking and photography, we believe in showing the human element.</p>
                </div>
                <div>
                    <InfoCard title="The Advantage">
                        By utilizing a flexible, founder-led collective model, we assemble the exact right emerging creative talent for your specific project. This keeps fixed overhead low for pre-seed and seed-stage startups, while ensuring film and photography share one unified, high-end vision.
                    </InfoCard>
                </div>
            </div>
        </Section>
    );
}
