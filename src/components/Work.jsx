import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Eyebrow from './Eyebrow';
import ProjectCard from './ProjectCard';
import VideoModal from './VideoModal';
import { projects } from '../data/content';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Work() {
    const [activeIndex, setActiveIndex] = useState(null);
    // Projects hovered at least once; their backgrounds start loading only then
    const [warmed, setWarmed] = useState(() => new Set());
    const [openProject, setOpenProject] = useState(null);
    const previewRefs = useRef([]);

    const activate = (i) => {
        setActiveIndex(i);
        setWarmed((prev) => (prev.has(i) ? prev : new Set(prev).add(i)));
        if (!prefersReducedMotion()) previewRefs.current[i]?.play().catch(() => {});
    };

    const deactivate = (i) => {
        setActiveIndex((current) => (current === i ? null : current));
        previewRefs.current[i]?.pause();
    };

    const open = (i) => {
        deactivate(i);
        setOpenProject(projects[i]);
    };

    return (
        <section id="work" className="py-32 px-6 md:px-20 min-h-screen flex flex-col justify-center relative z-10">
            {/* Fixed full-screen layer behind the page; portaled so it escapes this section's stacking context.
                Each project has its own layer so one can fade out while the next fades in. */}
            {createPortal(
                <div id="work-bg-layer" aria-hidden="true">
                    {projects.map(({ title, background, preview }, i) => {
                        const loaded = warmed.has(i);
                        return (
                            <div
                                key={title}
                                className={`work-bg-item ${activeIndex === i ? 'is-active' : ''}`}
                                style={{ backgroundImage: loaded && background ? `url(${background})` : undefined }}
                            >
                                {preview && loaded && (
                                    <video
                                        ref={(el) => { previewRefs.current[i] = el; }}
                                        src={preview}
                                        muted
                                        loop
                                        playsInline
                                        autoPlay={activeIndex === i && !prefersReducedMotion()}
                                        preload="auto"
                                        tabIndex={-1}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>,
                document.body
            )}

            <div className="max-w-7xl mx-auto w-full">
                <Eyebrow className="mb-12">Selected Projects ({String(projects.length).padStart(2, '0')})</Eyebrow>
                <div className="flex flex-col w-full border-t border-brand-offwhite/20">
                    {projects.map((project, i) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                            dimmed={activeIndex !== null && activeIndex !== i}
                            onActivate={() => activate(i)}
                            onDeactivate={() => deactivate(i)}
                            onOpen={() => open(i)}
                        />
                    ))}
                </div>
            </div>

            <VideoModal project={openProject} onClose={() => setOpenProject(null)} />
        </section>
    );
}
