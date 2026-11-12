import { useParams } from 'react-router-dom';
import Eyebrow from '../components/Eyebrow';
import Section from '../components/Section';
import InteractiveLink from '../components/InteractiveLink';
import CtaBand from '../components/CtaBand';
import NotFound from './NotFound';
import { accentText } from '../components/accent';
import { projects } from '../data/content';

// One numbered chapter of the case study: label on the left, content on the right
function Chapter({ number, label, children }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 md:gap-12 py-12 border-b border-brand-offwhite/15">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
                <span className="block mb-3 font-sans font-medium text-xs tracking-widest text-brand-light-blue">{number}</span>
                {label}
            </h2>
            <div>{children}</div>
        </div>
    );
}

function Prose({ children }) {
    return <p className="text-lg font-light text-brand-offwhite/70 leading-relaxed">{children}</p>;
}

// A single deliverable. Shows the film or image if one is set, otherwise an empty labelled tile.
function ExecutionItem({ label, title, image, video, poster, wide }) {
    return (
        <figure className={wide ? 'sm:col-span-2' : ''}>
            {video ? (
                <video src={video} poster={poster} controls playsInline preload="none" className="block w-full aspect-video bg-black rounded" />
            ) : image ? (
                <img src={image} alt={title} loading="lazy" className="block w-full aspect-[4/3] object-cover rounded" />
            ) : (
                <div className={`flex items-center justify-center w-full ${wide ? 'aspect-video' : 'aspect-[4/3]'} rounded border border-dashed border-brand-offwhite/25 text-xs uppercase tracking-widest text-brand-offwhite/40`}>
                    Media coming soon
                </div>
            )}
            <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                <span className="text-sm text-brand-offwhite">{title}</span>
                <span className="text-xs uppercase tracking-widest text-brand-yellow">{label}</span>
            </figcaption>
        </figure>
    );
}

export default function CaseStudy() {
    const { slug } = useParams();
    const index = projects.findIndex((p) => p.slug === slug && p.caseStudy);
    if (index === -1) return <NotFound />;

    const project = projects[index];
    const { title, category, accent, description, background, heroPosition, video, caseStudy: cs } = project;
    const next = projects.slice(index + 1).concat(projects.slice(0, index)).find((p) => p.slug && p.caseStudy);

    return (
        <>
            <section className="pt-40 md:pt-48 pb-16 px-6 md:px-20 bg-brand-navy text-brand-offwhite relative z-10">
                <div className="max-w-7xl mx-auto">
                    <InteractiveLink to="/work" className="inline-block mb-10 text-xs uppercase tracking-widest text-brand-offwhite/60 hover:text-brand-yellow transition-colors">
                        <span aria-hidden="true">←</span> All work
                    </InteractiveLink>
                    <p className={`text-xs uppercase tracking-widest mb-8 ${accentText[accent]}`}>{category}</p>
                    <h1 className="font-display font-bold text-5xl md:text-8xl uppercase tracking-tighter leading-[0.95] mb-8">{title}</h1>
                    <p className="max-w-2xl text-lg md:text-xl font-light text-brand-offwhite/70 leading-relaxed">{description}</p>

                    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-8 border-t border-brand-offwhite/15">
                        <div>
                            <dt className="text-xs uppercase tracking-widest text-brand-offwhite/50 mb-2">Client</dt>
                            <dd>{cs.client}</dd>
                        </div>
                        <div>
                            <dt className="text-xs uppercase tracking-widest text-brand-offwhite/50 mb-2">Year</dt>
                            <dd>{cs.year}</dd>
                        </div>
                        <div>
                            <dt className="text-xs uppercase tracking-widest text-brand-offwhite/50 mb-2">Services</dt>
                            <dd>{cs.services.join(', ')}</dd>
                        </div>
                    </dl>

                    {cs.draft && (
                        <p className="mt-10 inline-block px-4 py-2 text-xs uppercase tracking-widest border border-brand-yellow/50 text-brand-yellow rounded">
                            Draft: placeholder copy
                        </p>
                    )}
                </div>
            </section>

            <section className="px-6 md:px-20 bg-brand-navy relative z-10">
                <div className="max-w-7xl mx-auto">
                    {video ? (
                        <video src={video} poster={background} controls playsInline preload="metadata" className="block w-full max-h-[80vh] bg-black rounded" />
                    ) : (
                        background && <img src={background} alt="" onError={(e) => { e.currentTarget.hidden = true; }} style={heroPosition ? { objectPosition: heroPosition } : undefined} className="block w-full aspect-[16/9] object-cover rounded" />
                    )}
                </div>
            </section>

            <Section className="relative z-10">
                <div className="border-t border-brand-offwhite/15">
                    <Chapter number="01" label="The Challenge"><Prose>{cs.challenge}</Prose></Chapter>
                    <Chapter number="02" label="Creative Direction"><Prose>{cs.direction}</Prose></Chapter>
                    <Chapter number="03" label="The Execution">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {cs.execution.map((item) => <ExecutionItem key={item.title} {...item} />)}
                        </div>
                    </Chapter>
                    <Chapter number="04" label={cs.resultLabel ?? 'The Result'}><Prose>{cs.result}</Prose></Chapter>
                </div>
            </Section>

            {next && next !== project && (
                <Section className="relative z-10 border-t border-brand-offwhite/10">
                    <Eyebrow>Next project</Eyebrow>
                    <InteractiveLink to={`/work/${next.slug}`} className="group inline-block font-display font-bold text-5xl md:text-8xl uppercase tracking-tighter hover:italic transition-all duration-300">
                        {next.title} <span aria-hidden="true" className="text-brand-light-blue">→</span>
                    </InteractiveLink>
                </Section>
            )}

            <CtaBand />
        </>
    );
}
