import Eyebrow from './Eyebrow';

// Eyebrow label + large display heading used at the top of each section
export default function SectionHeader({ eyebrow, title, subtitle, className = 'text-5xl md:text-7xl uppercase tracking-tighter leading-[0.95]', children }) {
    return (
        <>
            <Eyebrow>{eyebrow}</Eyebrow>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
                <div>
                    <h2 className={`font-display font-bold ${className}`}>{title}</h2>
                    {subtitle && <p className="mt-6 max-w-2xl text-lg font-light text-brand-offwhite/70 leading-relaxed">{subtitle}</p>}
                </div>
                {children}
            </div>
        </>
    );
}
