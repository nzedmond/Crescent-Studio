import { useEffect, useState } from 'react';

// 'visible' -> 'fading' -> 'done'
export default function Preloader() {
    const [stage, setStage] = useState('visible');

    useEffect(() => {
        let fadeTimer;
        let removeTimer;
        const start = () => {
            fadeTimer = setTimeout(() => {
                setStage('fading');
                removeTimer = setTimeout(() => setStage('done'), 800);
            }, 2200);
        };

        if (document.readyState === 'complete') start();
        else window.addEventListener('load', start, { once: true });

        return () => {
            window.removeEventListener('load', start);
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (stage === 'done') return null;

    return (
        <div id="preloader" style={stage === 'fading' ? { opacity: 0 } : undefined}>
            <div className="loader-text">100%</div>
        </div>
    );
}
