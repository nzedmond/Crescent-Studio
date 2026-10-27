import InteractiveLink from './InteractiveLink';
import { navLinks } from '../data/content';

// Scrolls away with the hero
export default function Nav() {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 mix-blend-difference pointer-events-none p-6 md:p-10 flex justify-between items-start">
            <div className="pointer-events-auto">
                <InteractiveLink href="#hero" className="font-display font-bold text-xl md:text-2xl tracking-tight">Crescent Studio.</InteractiveLink>
            </div>
            <div className="flex flex-col items-end space-y-2 text-sm font-medium tracking-widest uppercase pointer-events-auto">
                {navLinks.map(({ href, label }) => (
                    <InteractiveLink key={href} href={href} className="hover:text-brand-yellow transition-colors">{label}</InteractiveLink>
                ))}
            </div>
        </nav>
    );
}
