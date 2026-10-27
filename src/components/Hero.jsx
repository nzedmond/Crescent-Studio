import { useState } from 'react';
import ParallaxMedia from './ParallaxMedia';
import { heroMedia } from '../data/content';

export default function Hero() {
    const [pointer, setPointer] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (window.innerWidth < 768) return;
        setPointer({
            x: (window.innerWidth / 2 - e.clientX) / 50,
            y: (window.innerHeight / 2 - e.clientY) / 50,
        });
    };

    return (
        <section
            id="hero"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setPointer({ x: 0, y: 0 })}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        >
            {heroMedia.map(({ speed, ...media }) => (
                <ParallaxMedia key={media.src} {...media} offset={{ x: pointer.x * speed, y: pointer.y * speed }} />
            ))}

            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pointer-events-none">
                <h1 className="font-display font-bold text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter uppercase mb-6 mix-blend-difference">
                    We build the <br />
                    <span className="text-brand-light-blue italic text-6xl md:text-9xl lg:text-[10rem]">Story</span>
                </h1>
                <p className="font-sans text-lg md:text-2xl font-light text-brand-offwhite/80 max-w-2xl mx-auto mt-8">
                    You focus on building the company.<br className="hidden md:block" />
                    We handle the creative execution around it.
                </p>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-xs uppercase tracking-widest opacity-50 animate-bounce">
                Scroll to explore
            </div>
        </section>
    );
}
