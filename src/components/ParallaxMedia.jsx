export default function ParallaxMedia({ type, src, alt, position, offset }) {
    return (
        <div className={`parallax-img z-0 ${position}`} style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
            {type === 'video' ? (
                <video src={src} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1} />
            ) : (
                <img src={src} alt={alt} />
            )}
        </div>
    );
}
