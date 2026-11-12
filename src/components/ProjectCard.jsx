import { Link } from 'react-router-dom';
import { accentText } from './accent';

// A project row. With a case study it links to /work/<slug>; otherwise, with a `video` it is a button
// that opens the film; with neither it only shows the hover preview.
export default function ProjectCard({ slug, title, category, accent, discipline, description, video, caseStudy, dimmed, onActivate, onDeactivate, onOpen }) {
    const hasCaseStudy = Boolean(slug && caseStudy);
    const playable = !hasCaseStudy && Boolean(video);
    const interactive = hasCaseStudy || playable;
    let Tag = 'div';
    let interactiveProps = {};
    if (hasCaseStudy) {
        Tag = Link;
        interactiveProps = { to: `/work/${slug}`, onFocus: onActivate, onBlur: onDeactivate, 'data-cursor': 'hover' };
    } else if (playable) {
        Tag = 'button';
        interactiveProps = { type: 'button', onClick: onOpen, onFocus: onActivate, onBlur: onDeactivate, 'aria-haspopup': 'dialog', 'data-cursor': 'hover' };
    }

    return (
        <Tag
            {...interactiveProps}
            onMouseEnter={onActivate}
            onMouseLeave={onDeactivate}
            className={`project-item group block w-full text-left py-10 md:py-16 border-b border-brand-offwhite/20 relative overflow-hidden transition-opacity duration-300 ${interactive ? 'interactive' : ''} ${dimmed ? 'opacity-30' : 'opacity-100'}`}
        >
            <div className="flex flex-col md:flex-row md:items-end justify-between relative z-10 mix-blend-difference">
                <div className="mb-4 md:mb-0">
                    <span className={`text-xs md:text-sm font-medium tracking-widest uppercase mb-2 block group-hover:translate-x-2 transition-transform ${accentText[accent]}`}>{category}</span>
                    <h2 className="font-display font-bold text-5xl md:text-8xl uppercase tracking-tighter group-hover:italic transition-all duration-300">{title}</h2>
                </div>
                <div className="text-left md:text-right md:max-w-xs">
                    <p className="text-sm font-light text-brand-offwhite/70 mb-2">{discipline}</p>
                    <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden md:block">{description}</p>
                    {interactive && (
                        <p className={`mt-3 text-xs font-medium tracking-widest uppercase md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 transition-opacity duration-500 ${accentText[accent]}`}>
                            {hasCaseStudy ? <>View case study <span aria-hidden="true">→</span></> : <><span aria-hidden="true">▶</span> Play film</>}
                        </p>
                    )}
                </div>
            </div>
        </Tag>
    );
}
