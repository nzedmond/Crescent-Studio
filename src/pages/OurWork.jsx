import PageHeader from '../components/PageHeader';
import Work from '../components/Work';
import Gallery from '../components/Gallery';
import CtaBand from '../components/CtaBand';

export default function OurWork() {
    return (
        <>
            <PageHeader eyebrow="Our Work" title={<>IDEAS MADE<br /><span className="text-brand-light-blue italic">VISIBLE.</span></>}>
                A collection of brand identities, commercial films, photography, and visual experiences created to help businesses communicate who they are and what they stand for.
            </PageHeader>
            <Work />
            <Gallery />
            <CtaBand />
        </>
    );
}
