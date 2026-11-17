// Plays a film from either a Vimeo link or a local video file.
// Vimeo: 'https://vimeo.com/123456789', or for unlisted videos 'https://vimeo.com/123456789/abc123def0'.
const VIMEO = /vimeo\.com\/(?:video\/)?(\d+)(?:\/([0-9a-f]+))?/;

export function vimeoEmbedUrl(src, { autoplay = false } = {}) {
    const match = src?.match(VIMEO);
    if (!match) return null;
    const [, id, hash] = match;
    const params = new URLSearchParams({ dnt: '1', title: '0', byline: '0', portrait: '0' });
    if (hash) params.set('h', hash);
    if (autoplay) params.set('autoplay', '1');
    return `https://player.vimeo.com/video/${id}?${params}`;
}

// `className` styles the local <video> only; the Vimeo player is always 16:9, capped at 80% of the screen height.
export default function FilmPlayer({ src, poster, title, autoplay = false, preload = 'metadata', className = '' }) {
    const embed = vimeoEmbedUrl(src, { autoplay });
    if (embed) {
        return (
            <div className="relative w-full max-w-[calc(80vh*16/9)] mx-auto aspect-video bg-black rounded overflow-hidden">
                <iframe
                    src={embed}
                    title={title}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading={autoplay ? 'eager' : 'lazy'}
                    className="absolute inset-0 w-full h-full border-0"
                />
            </div>
        );
    }
    return (
        <video
            src={src}
            poster={poster}
            autoPlay={autoplay}
            controls
            playsInline
            preload={preload}
            className={`block w-full bg-black rounded ${className}`}
        />
    );
}
