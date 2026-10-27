import { accentBorder, accentText } from './accent';

export default function ServiceCard({ index, tag, accent, title, description, deliverables }) {
    return (
        <article className={`flex flex-col h-full p-8 md:p-12 rounded-lg bg-brand-offwhite/5 border border-brand-offwhite/10 transition-all duration-500 ease-expo hover:-translate-y-1 hover:bg-brand-offwhite/[0.08] ${accentBorder[accent]}`}>
            <p className={`font-display text-sm tracking-widest uppercase mb-10 ${accentText[accent]}`}>{index} / {tag}</p>
            <h3 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight mb-5">{title}</h3>
            <p className="text-base md:text-lg font-light text-brand-offwhite/70 leading-relaxed mb-8">{description}</p>
            <p className="mt-auto text-xs uppercase tracking-widest text-brand-offwhite/40">{deliverables.join('\u00a0·\u00a0')}</p>
        </article>
    );
}
