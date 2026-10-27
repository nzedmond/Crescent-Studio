export default function GalleryCard({ src, alt }) {
    return (
        <figure className="gallery-item group relative">
            <img src={src} alt={alt} loading="lazy" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 text-xs uppercase tracking-widest text-brand-offwhite bg-gradient-to-t from-brand-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {alt}
            </figcaption>
        </figure>
    );
}
