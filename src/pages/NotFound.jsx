import PageHeader from '../components/PageHeader';
import InteractiveLink from '../components/InteractiveLink';

export default function NotFound() {
    return (
        <PageHeader eyebrow="404" title={<>Lost the <span className="text-brand-light-blue italic">plot.</span></>}>
            This page doesn't exist.{' '}
            <InteractiveLink to="/" className="text-brand-yellow hover:text-brand-light-blue transition-colors">Back to home →</InteractiveLink>
        </PageHeader>
    );
}
