import { approach } from '../data/content';

// The four "how we work" promises as cards
export default function ApproachGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map(({ index, title, body }) => (
                <article key={index} className="flex flex-col p-8 rounded-lg bg-brand-offwhite/5 border border-brand-offwhite/10">
                    <p className="font-display text-sm tracking-widest text-brand-yellow mb-8">{index}</p>
                    <h3 className="font-display font-bold text-2xl uppercase tracking-tight mb-4">{title}</h3>
                    <p className="text-base font-light text-brand-offwhite/70 leading-relaxed">{body}</p>
                </article>
            ))}
        </div>
    );
}
