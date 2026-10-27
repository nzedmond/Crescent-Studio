// Standard full-width navy section with consistent padding and an inner max-width container
export default function Section({ id, className = 'relative z-10 border-t border-brand-offwhite/10', width = 'max-w-7xl', children }) {
    return (
        <section id={id} className={`py-32 px-6 md:px-20 bg-brand-navy text-brand-offwhite ${className}`}>
            <div className={`${width} mx-auto`}>{children}</div>
        </section>
    );
}
