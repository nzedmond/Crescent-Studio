export default function ContactDetail({ label, children }) {
    return (
        <div>
            <p className="text-xs uppercase tracking-widest text-brand-yellow mb-1">{label}</p>
            {children}
        </div>
    );
}
