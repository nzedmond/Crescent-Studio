import { founderStages } from '../data/content';

// "Who we work with": one row per founder situation
export default function FounderStages() {
    return (
        <ul className="border-t border-brand-offwhite/15">
            {founderStages.map(({ title, subtitle, body }, i) => (
                <li key={title} className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 md:gap-12 py-10 border-b border-brand-offwhite/15">
                    <div>
                        <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
                            <span className="block mb-3 font-sans font-medium text-xs tracking-widest text-brand-light-blue">{String(i + 1).padStart(2, '0')}</span>
                            {title}
                        </h3>
                        <p className="mt-2 text-base md:text-lg font-light italic text-brand-offwhite/60">{subtitle}</p>
                    </div>
                    <p className="text-lg font-light text-brand-offwhite/70 leading-relaxed">{body}</p>
                </li>
            ))}
        </ul>
    );
}
