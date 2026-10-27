import { useState } from 'react';
import { createPortal } from 'react-dom';
import Eyebrow from './Eyebrow';
import ProjectCard from './ProjectCard';
import { projects } from '../data/content';

export default function Work() {
    const [activeIndex, setActiveIndex] = useState(null);
    // Keep the last background so it fades out instead of disappearing
    const [background, setBackground] = useState(null);

    const activate = (index) => {
        setActiveIndex(index);
        setBackground(projects[index].background);
    };

    return (
        <section id="work" className="py-32 px-6 md:px-20 min-h-screen flex flex-col justify-center relative z-10">
            {/* Fixed full-screen layer behind the page; portaled so it escapes this section's stacking context */}
            {createPortal(
                <div
                    id="work-bg-layer"
                    style={{
                        backgroundImage: background ? `url(${background})` : undefined,
                        opacity: activeIndex === null ? 0 : 1,
                    }}
                />,
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
                            onMouseEnter={() => activate(i)}
                            onMouseLeave={() => setActiveIndex(null)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
