// Highlighted callout with an accent rule on the left
export default function InfoCard({ title, children }) {
    return (
        <div className="p-8 bg-brand-offwhite/5 border-l-2 border-brand-light-blue rounded-r-lg">
            <h3 className="font-display font-bold text-2xl mb-4 text-brand-offwhite">{title}</h3>
            <p className="text-base text-brand-offwhite/70">{children}</p>
        </div>
    );
}
