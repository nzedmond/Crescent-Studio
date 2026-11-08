import { useEffect, useRef } from 'react';
import OrbitMedia from './OrbitMedia';
import { heroMedia } from '../data/content';

const TURN_MS = 60000;              // one full revolution per minute
const BASE_SPEED = (Math.PI * 2) / TURN_MS;
const HOVER_SPEED = BASE_SPEED * 0.12; // eases almost to a stop while a tile is hovered
const TILT_PX = 40;                 // how far the orbit drifts toward the pointer

export default function Hero() {
    const sectionRef = useRef(null);
    const stageRef = useRef(null);
    const itemRefs = useRef([]);
    const hovering = useRef(false);
    const pointerTarget = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const stage = stageRef.current;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const count = heroMedia.length;

        let size = { w: stage.clientWidth, h: stage.clientHeight };
        const resizeObserver = new ResizeObserver(() => {
            size = { w: stage.clientWidth, h: stage.clientHeight };
        });
        resizeObserver.observe(stage);

        let angle = -Math.PI / 2;
        let speed = reduceMotion ? 0 : BASE_SPEED;
        const pointer = { x: 0, y: 0 };
        let last = performance.now();
        let raf = null;

        const frame = (now) => {
            const dt = Math.min(now - last, 50);
            last = now;

            if (!reduceMotion) {
                const target = hovering.current ? HOVER_SPEED : BASE_SPEED;
                speed += (target - speed) * 0.04;
                angle += speed * dt;
            }
            pointer.x += (pointerTarget.current.x - pointer.x) * 0.06;
            pointer.y += (pointerTarget.current.y - pointer.y) * 0.06;

            // Wider ellipse on desktop; taller relative orbit on narrow screens
            const rx = size.w * (size.w < 768 ? 0.4 : 0.36);
            const ry = size.h * 0.36;

            itemRefs.current.forEach((el, i) => {
                if (!el) return;
                const theta = angle + (i / count) * Math.PI * 2;
                const depth = (Math.sin(theta) + 1) / 2; // 0 = far side (top), 1 = near side (bottom)
                const x = Math.cos(theta) * rx + pointer.x * TILT_PX * (0.4 + depth);
                const y = Math.sin(theta) * ry + pointer.y * TILT_PX * (0.4 + depth);
                const scale = 0.68 + depth * 0.42;
                const lean = Math.cos(theta) * -5;

                el.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) rotate(${lean}deg) scale(${scale})`;
                el.style.opacity = (0.3 + depth * 0.55).toFixed(3);
                el.style.zIndex = String(Math.round(depth * 10));
            });

            raf = requestAnimationFrame(frame);
        };

        // Only animate while the hero is on screen
        const visibility = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && raf === null) {
                last = performance.now();
                raf = requestAnimationFrame(frame);
            } else if (!entry.isIntersecting && raf !== null) {
                cancelAnimationFrame(raf);
                raf = null;
            }
        });
        visibility.observe(sectionRef.current);

        return () => {
            if (raf !== null) cancelAnimationFrame(raf);
            visibility.disconnect();
            resizeObserver.disconnect();
        };
    }, []);

    const handleMouseMove = (e) => {
        if (window.innerWidth < 768) return;
        pointerTarget.current = {
            x: (e.clientX / window.innerWidth - 0.5) * 2,
            y: (e.clientY / window.innerHeight - 0.5) * 2,
        };
    };

    return (
        <section
            ref={sectionRef}
            id="hero"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { pointerTarget.current = { x: 0, y: 0 }; }}
            className="relative h-screen w-full flex flex-col pt-20 md:pt-28 overflow-hidden"
        >
            {/* Media and copy live below the header band so nothing sits under the nav */}
            <div ref={stageRef} className="relative flex-1 flex items-center justify-center">
                {heroMedia.map((media, i) => (
                    <OrbitMedia
                        key={media.src}
                        {...media}
                        ref={(el) => { itemRefs.current[i] = el; }}
                        onMouseEnter={() => { hovering.current = true; }}
                        onMouseLeave={() => { hovering.current = false; }}
                    />
                ))}

                <div className="relative z-20 text-center px-4 max-w-6xl mx-auto pointer-events-none">
                    <h1 className="font-display font-bold text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter uppercase mb-6 mix-blend-difference">
                        We build the <br />
                        <span className="text-brand-light-blue italic text-6xl md:text-9xl lg:text-[10rem]">Story</span>
                    </h1>
                    {/* Selling point: frosted card so it reads cleanly over the orbiting tiles */}
                    <div className="tagline inline-flex flex-col items-center gap-1.5 mt-8 px-6 py-4 md:px-10 md:py-5 rounded-3xl bg-brand-navy/50 backdrop-blur-md border border-brand-offwhite/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]">
                        <p className="tagline-line font-sans text-base md:text-xl font-light text-brand-offwhite/65">
                            You focus on building the company.
                        </p>
                        <p className="tagline-line font-sans text-lg md:text-2xl font-medium text-brand-offwhite">
                            We handle the{' '}
                            <span className="relative inline-block whitespace-nowrap text-brand-yellow">
                                creative execution
                                <svg className="tagline-underline absolute left-0 -bottom-2 w-full h-3 overflow-visible" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                                    <path d="M2 8 C 50 2, 110 2, 198 7" pathLength="1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                </svg>
                            </span>{' '}
                            around it.
                        </p>
                    </div>
                </div>

                <div className="absolute z-20 bottom-6 left-1/2 transform -translate-x-1/2 text-xs uppercase tracking-widest opacity-50 animate-bounce pointer-events-none">
                    Scroll to explore
                </div>
            </div>
        </section>
    );
}
