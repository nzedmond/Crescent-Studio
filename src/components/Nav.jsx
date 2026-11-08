import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import InteractiveLink from './InteractiveLink';
import { navLinks } from '../data/content';

const primaryLinks = navLinks.filter(({ to }) => to !== '/contact');
const isActivePath = (to, pathname) => (to === '/' ? pathname === '/' : pathname.startsWith(to));

// Hides while scrolling down, returns on scroll up, and turns into a frosted bar once off the top
function useScrollState() {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let lastY = window.scrollY;
        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 40);
            if (Math.abs(y - lastY) > 6) {
                setHidden(y > lastY && y > 240);
                lastY = y;
            }
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return { scrolled, hidden };
}

// Horizontal capsule of links with a highlight that glides to the hovered or active link
function DesktopLinks({ pathname }) {
    const linkRefs = useRef({});
    const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });
    const activeTo = primaryLinks.find(({ to }) => isActivePath(to, pathname))?.to;

    const moveTo = useCallback((to) => {
        const el = to && linkRefs.current[to];
        setIndicator((prev) => (el ? { left: el.offsetLeft, width: el.offsetWidth, visible: true } : { ...prev, visible: false }));
    }, []);

    useLayoutEffect(() => moveTo(activeTo), [activeTo, moveTo]);

    // Link widths change once web fonts load and on resize
    useEffect(() => {
        const reset = () => moveTo(activeTo);
        document.fonts?.ready.then(reset);
        window.addEventListener('resize', reset);
        return () => window.removeEventListener('resize', reset);
    }, [activeTo, moveTo]);

    return (
        <div
            className="relative hidden lg:flex items-center p-1 rounded-full border border-brand-offwhite/15 bg-brand-navy/40 backdrop-blur-md"
            onMouseLeave={() => moveTo(activeTo)}
        >
            <span
                aria-hidden="true"
                className="absolute top-1 bottom-1 rounded-full bg-brand-offwhite/10 transition-all duration-500 ease-expo"
                style={{ left: indicator.left, width: indicator.width, opacity: indicator.visible ? 1 : 0 }}
            />
            {primaryLinks.map(({ to, label }) => (
                <NavLink
                    key={to}
                    to={to}
                    end={to === '/'}
                    ref={(el) => { linkRefs.current[to] = el; }}
                    onMouseEnter={() => moveTo(to)}
                    onFocus={() => moveTo(to)}
                    data-cursor="hover"
                    className={({ isActive }) =>
                        `interactive relative z-10 px-4 xl:px-5 py-2 text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-brand-yellow' : 'text-brand-offwhite/70 hover:text-brand-offwhite'}`
                    }
                >
                    {label}
                </NavLink>
            ))}
        </div>
    );
}

function ContactButton({ className = '' }) {
    return (
        <NavLink
            to="/contact"
            data-cursor="hover"
            className={({ isActive }) =>
                `interactive group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                    isActive
                        ? 'bg-brand-yellow border-brand-yellow text-brand-navy'
                        : 'border-brand-yellow/60 text-brand-yellow hover:bg-brand-yellow hover:text-brand-navy'
                } ${className}`
            }
        >
            Contact
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </NavLink>
    );
}

// Full-screen menu for smaller screens; links slide in one after another
function MobileMenu({ open, pathname }) {
    return (
        <div
            id="mobile-menu"
            aria-hidden={!open}
            className={`lg:hidden fixed inset-0 z-40 bg-brand-navy flex flex-col justify-center px-6 md:px-10 transition-[opacity,visibility] duration-500 ease-expo ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >
            <ul className="space-y-2">
                {navLinks.map(({ to, label }, i) => {
                    const active = isActivePath(to, pathname);
                    return (
                        <li
                            key={to}
                            className={`transition-all duration-700 ease-expo ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                            style={{ transitionDelay: open ? `${100 + i * 60}ms` : '0ms' }}
                        >
                            <NavLink
                                to={to}
                                end={to === '/'}
                                tabIndex={open ? 0 : -1}
                                className={`group flex items-baseline gap-4 font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter transition-colors ${active ? 'text-brand-yellow italic' : 'text-brand-offwhite hover:text-brand-light-blue'}`}
                            >
                                <span className="font-sans font-normal not-italic text-xs tracking-widest text-brand-offwhite/40">{String(i + 1).padStart(2, '0')}</span>
                                {label}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
            <p
                className={`mt-16 text-xs uppercase tracking-widest text-brand-offwhite/40 transition-opacity duration-700 ${open ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: open ? '500ms' : '0ms' }}
            >
                Hamilton, NY · hello@crescentstudio.com
            </p>
        </div>
    );
}

export default function Nav() {
    const { pathname } = useLocation();
    const { scrolled, hidden } = useScrollState();
    const [menuOpen, setMenuOpen] = useState(false);

    // Close the menu after navigating; lock page scroll while it is open
    useEffect(() => setMenuOpen(false), [pathname]);
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [menuOpen]);

    const tucked = hidden && !menuOpen;
    const solid = scrolled && !menuOpen;

    return (
        <>
            <header
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-expo ${tucked ? '-translate-y-full' : 'translate-y-0'} ${
                    solid ? 'bg-brand-navy/75 backdrop-blur-lg border-b border-brand-offwhite/10' : 'bg-transparent border-b border-transparent'
                }`}
            >
                <nav className={`flex items-center justify-between gap-6 px-6 md:px-10 transition-all duration-500 ease-expo ${solid ? 'py-3' : 'py-6 md:py-8'}`}>
                    <InteractiveLink to="/" className="font-display font-bold text-xl md:text-2xl tracking-tight shrink-0">
                        Crescent Studio.
                    </InteractiveLink>

                    <div className="hidden lg:flex items-center gap-3">
                        <DesktopLinks pathname={pathname} />
                        <ContactButton />
                    </div>

                    <button
                        type="button"
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        className="lg:hidden interactive flex items-center gap-3 text-xs font-medium tracking-widest uppercase"
                        data-cursor="hover"
                    >
                        <span>{menuOpen ? 'Close' : 'Menu'}</span>
                        <span aria-hidden="true" className="relative block w-6 h-3">
                            <span className={`absolute left-0 w-full h-px bg-current transition-all duration-500 ease-expo ${menuOpen ? 'top-1.5 rotate-45' : 'top-0'}`} />
                            <span className={`absolute left-0 h-px bg-current transition-all duration-500 ease-expo ${menuOpen ? 'top-1.5 w-full -rotate-45' : 'top-3 w-2/3'}`} />
                        </span>
                    </button>
                </nav>
            </header>
            <MobileMenu open={menuOpen} pathname={pathname} />
        </>
    );
}
