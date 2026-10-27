import Eyebrow from './Eyebrow';

// Eyebrow label + large display heading used at the top of each section
export default function SectionHeader({ eyebrow, title, className = 'text-5xl md:text-7xl uppercase tracking-tighter leading-[0.95]', children }) {
    return (
        <>
            <Eyebrow>{eyebrow}</Eyebrow>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
                <h2 className={`font-display font-bold ${className}`}>{title}</h2>
                {children}
            </div>
        </>
    );
}
