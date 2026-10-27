// Anchor that expands the custom cursor on hover
export default function InteractiveLink({ className = '', children, ...props }) {
    return (
        <a className={`interactive ${className}`} data-cursor="hover" {...props}>
            {children}
        </a>
    );
}
