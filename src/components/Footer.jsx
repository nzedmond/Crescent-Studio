import InteractiveLink from './InteractiveLink';
import { socialLinks } from '../data/content';

export default function Footer() {
    return (
        <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-brand-offwhite/10 flex justify-between items-center text-xs tracking-widest text-brand-offwhite/40 uppercase">
            <p>&copy; {new Date().getFullYear()} Crescent Studio.</p>
            <p>Hamilton, NY</p>
            <div className="flex space-x-6">
                {socialLinks.map(({ href, label }) => (
                    <InteractiveLink key={label} href={href} className="hover:text-brand-offwhite">{label}</InteractiveLink>
                ))}
            </div>
        </div>
    );
}
