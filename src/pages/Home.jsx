import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import Work from '../components/Work';
import CtaBand from '../components/CtaBand';
import { marqueeItems } from '../data/content';

export default function Home() {
    return (
        <>
            <Hero />
            <Marquee items={marqueeItems} />
            <Services />
            <Work />
            <CtaBand />
        </>
    );
}
