import { useEffect, useRef } from 'react';

// Full-screen player for a project's film. Native <dialog> gives focus trapping, Esc to close,
// and makes the page behind it inert. Rendering the <video> only while open stops playback on close.
export default function VideoModal({ project, onClose }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (project && !dialog.open) dialog.showModal();
        if (!project && dialog.open) dialog.close();
        if (!project) return;

        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, [project]);

    return (
        <dialog
            ref={dialogRef}
            className="video-modal"
            aria-label={project ? `${project.title} film` : undefined}
            onClose={onClose}
            // Clicking the dimmed area around the player closes it
            onClick={(e) => e.target === e.currentTarget && dialogRef.current.close()}
        >
            {project && (
                <div className="w-full max-w-6xl">
                    <div className="flex items-center justify-between mb-4 text-xs font-medium tracking-widest uppercase">
                        <span>{project.title}</span>
                        <button
                            type="button"
                            autoFocus
                            onClick={() => dialogRef.current.close()}
                            className="flex items-center gap-2 text-brand-offwhite/70 hover:text-brand-yellow transition-colors"
                        >
                            Close <span aria-hidden="true">✕</span>
                        </button>
                    </div>
                    <video
                        key={project.video}
                        src={project.video}
                        poster={project.background}
                        autoPlay
                        controls
                        playsInline
                        className="block w-full max-h-[80vh] bg-black rounded"
                    />
                </div>
            )}
        </dialog>
    );
}
