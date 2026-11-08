import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CustomCursor from './CustomCursor';
import Preloader from './Preloader';
import Nav from './Nav';
import Footer from './Footer';

// Shared shell for every page; the preloader and cursor persist across route changes
export default function Layout() {
    const { pathname } = useLocation();

    // New page starts at the top; clear any cursor hover state left by the clicked link
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        document.body.classList.remove('hovering');
    }, [pathname]);

    return (
        <>
            <CustomCursor />
            <Preloader />
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
