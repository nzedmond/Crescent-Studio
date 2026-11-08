// One tile on the hero orbit; Hero drives its transform/opacity every frame through `ref`
export default function OrbitMedia({ ref, type, src, alt, onMouseEnter, onMouseLeave }) {
    return (
        <div
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="orbit-item w-24 h-32 sm:w-32 sm:h-44 md:w-40 md:h-52 lg:w-44 lg:h-60"
        >
            {type === 'video' ? (
                <video src={src} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1} />
            ) : (
                <img src={src} alt={alt} />
            )}
        </div>
    );
}
