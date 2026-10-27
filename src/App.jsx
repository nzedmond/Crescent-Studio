import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Work from './components/Work';
import Gallery from './components/Gallery';
import Studio from './components/Studio';
import Contact from './components/Contact';
import { marqueeItems } from './data/content';

export default function App() {
    return (
        <>
            <CustomCursor />
            <Preloader />
            <Nav />
            <main>
                <Hero />
                <Marquee items={marqueeItems} />
                <Services />
                <Work />
                <Gallery />
                <Studio />
                <Contact />
            </main>
        </>
    );
}
