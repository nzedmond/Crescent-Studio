import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import CtaBand from '../components/CtaBand';
import { teamMembers } from '../data/content';

function TeamCard({ name, role, bio, photo }) {
    return (
        <article className="group">
            <div className="aspect-[4/5] mb-6 overflow-hidden rounded-lg bg-brand-offwhite/5 border border-brand-offwhite/10 flex items-center justify-center">
                {photo ? (
                    <img src={photo} alt={name} loading="lazy" className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 ease-expo" />
                ) : (
                    <span className="text-xs uppercase tracking-widest text-brand-offwhite/30">Photo coming soon</span>
                )}
            </div>
            <p className="text-xs uppercase tracking-widest text-brand-yellow mb-2">{role}</p>
            <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight mb-3">{name}</h3>
            <p className="text-base font-light text-brand-offwhite/70 leading-relaxed">{bio}</p>
        </article>
    );
}

export default function Team() {
    return (
        <>
            <PageHeader eyebrow="Our Team" title={<>The people<br /><span className="text-brand-light-blue italic">behind the lens.</span></>}>
                A founder-led collective of filmmakers and photographers, assembled around each project.
            </PageHeader>
            <Section className="relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {teamMembers.map((member, i) => <TeamCard key={i} {...member} />)}
                </div>
            </Section>
            <CtaBand title={<>Want to<br /><span className="text-brand-light-blue italic">work with us?</span></>} />
        </>
    );
}
