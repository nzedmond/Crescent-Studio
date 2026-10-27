import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    useEffect(() => {
        // Only run cursor logic on non-touch devices
        if (!window.matchMedia('(pointer: fine)').matches) return;

        const onMove = (e) => {
            dotRef.current.style.left = `${e.clientX}px`;
            dotRef.current.style.top = `${e.clientY}px`;
            // Outline trails slightly behind the dot
            outlineRef.current.animate(
                { left: `${e.clientX}px`, top: `${e.clientY}px` },
                { duration: 500, fill: 'forwards' }
            );
        };

        // Delegated hover so any `.interactive` element (including ones rendered later) expands the cursor
        const onOver = (e) => {
            document.body.classList.toggle('hovering', !!e.target.closest?.('.interactive'));
        };

        window.addEventListener('mousemove', onMove);
        document.addEventListener('mouseover', onOver);
        return () => {
            window.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseover', onOver);
            document.body.classList.remove('hovering');
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot hidden md:block" />
            <div ref={outlineRef} className="cursor-outline hidden md:block" />
        </>
    );
}
