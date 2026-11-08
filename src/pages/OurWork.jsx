import PageHeader from '../components/PageHeader';
import Work from '../components/Work';
import Gallery from '../components/Gallery';
import CtaBand from '../components/CtaBand';

export default function OurWork() {
    return (
        <>
            <PageHeader eyebrow="Our Work" title={<>Stories we've<br /><span className="text-brand-light-blue italic">built.</span></>}>
                Commercial films, campaigns, and photography for brands with something to say.
            </PageHeader>
            <Work />
            <Gallery />
            <CtaBand />
        </>
    );
}
