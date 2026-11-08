import InteractiveLink from './InteractiveLink';
import { socialLinks } from '../data/content';

export default function Footer() {
    return (
        <footer className="px-6 md:px-20 pt-16 pb-12 bg-brand-navy relative z-20">
            <div className="max-w-7xl mx-auto pt-8 border-t border-brand-offwhite/10 flex flex-col gap-4 md:flex-row justify-between items-center text-xs tracking-widest text-brand-offwhite/40 uppercase">
                <p>&copy; {new Date().getFullYear()} Crescent Studio.</p>
                <p>Hamilton, NY</p>
                <div className="flex space-x-6">
                    {socialLinks.map(({ href, label }) => (
                        <InteractiveLink key={label} href={href} className="hover:text-brand-offwhite">{label}</InteractiveLink>
                    ))}
                </div>
            </div>
        </footer>
    );
}
