import Section from './Section';
import SectionHeader from './SectionHeader';
import GalleryCard from './GalleryCard';
import { galleryPhotos } from '../data/content';

export default function Gallery() {
    return (
        <Section id="gallery">
            <SectionHeader eyebrow="Photography" title={<>Frames from <span className="text-brand-light-blue italic">the field.</span></>} />
            <div className="gallery-grid">
                {galleryPhotos.map((photo) => <GalleryCard key={photo.src} {...photo} />)}
            </div>
        </Section>
    );
}
