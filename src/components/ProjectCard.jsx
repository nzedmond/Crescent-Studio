import { accentText } from './accent';

// A project row. With a `video` it is a button that opens the film; without one it only shows the hover preview.
export default function ProjectCard({ title, category, accent, discipline, description, video, dimmed, onActivate, onDeactivate, onOpen }) {
    const playable = Boolean(video);
    const Tag = playable ? 'button' : 'div';
    const interactiveProps = playable
        ? { type: 'button', onClick: onOpen, onFocus: onActivate, onBlur: onDeactivate, 'aria-haspopup': 'dialog', 'data-cursor': 'hover' }
        : {};

    return (
        <Tag
            {...interactiveProps}
            onMouseEnter={onActivate}
            onMouseLeave={onDeactivate}
            className={`project-item group block w-full text-left py-10 md:py-16 border-b border-brand-offwhite/20 relative overflow-hidden transition-opacity duration-300 ${playable ? 'interactive' : ''} ${dimmed ? 'opacity-30' : 'opacity-100'}`}
        >
            <div className="flex flex-col md:flex-row md:items-end justify-between relative z-10 mix-blend-difference">
                <div className="mb-4 md:mb-0">
                    <span className={`text-xs md:text-sm font-medium tracking-widest uppercase mb-2 block group-hover:translate-x-2 transition-transform ${accentText[accent]}`}>{category}</span>
                    <h2 className="font-display font-bold text-5xl md:text-8xl uppercase tracking-tighter group-hover:italic transition-all duration-300">{title}</h2>
                </div>
                <div className="text-left md:text-right md:max-w-xs">
                    <p className="text-sm font-light text-brand-offwhite/70 mb-2">{discipline}</p>
                    <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden md:block">{description}</p>
                    {playable && (
                        <p className={`mt-3 text-xs font-medium tracking-widest uppercase md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 transition-opacity duration-500 ${accentText[accent]}`}>
                            <span aria-hidden="true">▶</span> Play film
                        </p>
                    )}
                </div>
            </div>
        </Tag>
    );
}
