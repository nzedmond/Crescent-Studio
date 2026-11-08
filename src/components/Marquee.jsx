import { useLayoutEffect, useRef, useState } from 'react';

const SPEED_PX_PER_SEC = 80;

// Two identical groups slide left by exactly one group width, then restart.
// Each group repeats the items enough times to be at least as wide as the screen,
// so there's never a gap at the right edge.
export default function Marquee({ items }) {
    const wrapperRef = useRef(null);
    const groupRef = useRef(null);
    const [repeat, setRepeat] = useState(1);
    const [duration, setDuration] = useState(20);

    useLayoutEffect(() => {
        const measure = () => {
            const group = groupRef.current;
            const wrapper = wrapperRef.current;
            if (!group || !wrapper) return;
            const setWidth = group.scrollWidth / repeat; // width of one pass through `items`
            if (!setWidth) return;
            const needed = Math.max(1, Math.ceil(wrapper.clientWidth / setWidth));
            if (needed !== repeat) setRepeat(needed);
            setDuration((setWidth * needed) / SPEED_PX_PER_SEC);
        };
        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(wrapperRef.current);
        document.fonts?.ready.then(measure); // display font changes the width once loaded
        return () => observer.disconnect();
    }, [repeat]);

    const group = Array.from({ length: repeat }, () => items).flat();

    const renderGroup = (ref, hidden) => (
        <div ref={ref} className="flex shrink-0" aria-hidden={hidden || undefined}>
            {group.map((item, i) => (
                <span key={i} className="shrink-0 pr-[0.4em]">
                    {item}<span className="pl-[0.4em]">&mdash;</span>
                </span>
            ))}
        </div>
    );

    return (
        <section className="py-12 border-y border-brand-offwhite/10 overflow-hidden bg-brand-navy">
            <div ref={wrapperRef} className="marquee-wrapper font-display text-4xl md:text-6xl uppercase tracking-tighter text-brand-offwhite/30">
                <div className="marquee-content" style={{ animationDuration: `${duration}s` }}>
                    {renderGroup(groupRef, false)}
                    {renderGroup(null, true)}
                </div>
            </div>
        </section>
    );
}
