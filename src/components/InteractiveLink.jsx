import { Link } from 'react-router-dom';

// Link that expands the custom cursor on hover.
// Pass `to` for an internal route (client-side navigation) or `href` for external/anchor links.
export default function InteractiveLink({ className = '', to, children, ...props }) {
    const shared = { className: `interactive ${className}`, 'data-cursor': 'hover', ...props };
    return to ? <Link to={to} {...shared}>{children}</Link> : <a {...shared}>{children}</a>;
}
