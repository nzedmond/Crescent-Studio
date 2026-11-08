import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import CtaBand from '../components/CtaBand';
import { btsItems } from '../data/content';

function BtsTile({ type, src, caption }) {
    let media;
    if (!src) {
        media = (
            <div className="aspect-[4/5] flex items-center justify-center border border-dashed border-brand-offwhite/20 rounded bg-brand-offwhite/5">
                <span className="text-xs uppercase tracking-widest text-brand-offwhite/30">{type === 'video' ? 'Clip' : 'Photo'} coming soon</span>
            </div>
        );
    } else if (type === 'video') {
        media = <video src={src} autoPlay muted loop playsInline preload="metadata" className="block w-full h-auto" />;
    } else {
        media = <img src={src} alt={caption} loading="lazy" />;
    }

    return (
        <figure className="gallery-item group relative">
            {media}
            <figcaption className="pt-3 text-xs uppercase tracking-widest text-brand-offwhite/50">{caption}</figcaption>
        </figure>
    );
}

export default function BehindTheScenes() {
    return (
        <>
            <PageHeader eyebrow="Behind the Scenes" title={<>How the story<br /><span className="text-brand-light-blue italic">gets made.</span></>}>
                Set days, lighting tests, location scouts, and late nights in the edit.
            </PageHeader>
            <Section className="relative z-10">
                <div className="gallery-grid">
                    {btsItems.map((item, i) => <BtsTile key={i} {...item} />)}
                </div>
            </Section>
            <CtaBand />
        </>
    );
}
