import Eyebrow from './Eyebrow';

// Opening block for inner pages; top padding clears the overlaid nav
export default function PageHeader({ eyebrow, title, children }) {
    return (
        <section className="pt-40 md:pt-48 pb-16 px-6 md:px-20 bg-brand-navy text-brand-offwhite relative z-10">
            <div className="max-w-7xl mx-auto">
                <Eyebrow>{eyebrow}</Eyebrow>
                <h1 className="font-display font-bold text-5xl md:text-8xl uppercase tracking-tighter leading-[0.95] mb-8">{title}</h1>
                {children && <p className="max-w-2xl text-lg md:text-xl font-light text-brand-offwhite/70 leading-relaxed">{children}</p>}
            </div>
        </section>
    );
}
