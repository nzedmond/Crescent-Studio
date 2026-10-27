import { Fragment } from 'react';

export default function Marquee({ items }) {
    // Content is duplicated so the -50% translate loops seamlessly
    const loop = [...items, ...items];
    return (
        <section className="py-12 border-y border-brand-offwhite/10 overflow-hidden bg-brand-navy">
            <div className="marquee-wrapper font-display text-4xl md:text-6xl uppercase tracking-tighter text-brand-offwhite/30">
                <div className="marquee-content">
                    {loop.map((item, i) => (
                        <Fragment key={i}>{item}&nbsp;&mdash;&nbsp; </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
