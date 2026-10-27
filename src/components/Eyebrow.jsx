export default function Eyebrow({ children, className = 'mb-8' }) {
    return <p className={`text-xs uppercase tracking-widest text-brand-yellow ${className}`}>{children}</p>;
}
