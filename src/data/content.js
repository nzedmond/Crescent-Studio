export const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/work', label: 'Our Work' },
    { to: '/team', label: 'Our Team' },
    { to: '/bts', label: 'BTS' },
    { to: '/contact', label: 'Contact' },
];

// Hero media, spaced evenly around the orbit in this order
export const heroMedia = [
    { type: 'image', src: '/files/photos/web/DSCF7995.jpg', alt: 'Portrait of a man in a worn hat' },
    { type: 'video', src: '/files/videos/web/Moose_mtCube.mp4' },
    { type: 'image', src: '/files/photos/web/DSC_9652.jpg', alt: 'Two performers embracing on a dark stage' },
    { type: 'video', src: '/files/videos/web/Moose_nurturing.mp4' },
    { type: 'image', src: '/files/photos/web/DSCF4116.jpg', alt: 'A lone figure crossing a wide city avenue' },
    { type: 'video', src: '/files/videos/web/Moosee_graphic.mp4' },
];

// Brand language: see BRAND.md (from the "Crescent Studio Description" doc)
export const positioning =
    'Crescent Studio is a creative partner for early-stage founders. We build brands, produce visual content, and tell stories that bring businesses to life, so founders can stay focused on building what matters.';

// How we work: the four promises
export const approach = [
    {
        index: '01',
        title: 'WE FIND THE FOCUS',
        body: "Not every business needs the same creative support. We work with you to identify what your brand needs most, prioritize the right opportunities, and turn them into a clear creative plan.",
    },
    {
        index: '02',
        title: "BUILT AROUND YOUR BUSINESS",
        body: 'We understand that building a company comes first. Our approach adapts to your priorities, pace, and resources, giving you creative support without adding another team to manage.',
    },
    {
        index: '03',
        title: 'ONE TEAM. ONE VISION.',
        body: 'Branding, film, photography, and visual content work best when they tell the same story. We bring the right creative talent together under one direction, creating a consistent identity across every touchpoint.',
    },
    {
        index: '04',
        title: "READY FOR WHAT'S NEXT",
        body: "As your company evolves, your creative needs evolve with it. From establishing your brand identity to launching products and building market presence, we're here to help your brand grow alongside your business.",
    },
];

// Who we work with
export const founderStages = [
    {
        title: 'Building Something New',
        body: "You have an idea, an early product, or a growing startup. You need a brand identity that gives your business a recognizable face and visual content that helps people understand what you're building.",
    },
    {
        title: 'PREPARING TO LAUNCH',
        body: "You're bringing a product to market, announcing a new venture, or preparing to introduce your company to a wider audience. You need creative assets that capture attention and communicate what makes your business worth noticing.",
    },
    {
        title: 'GROWING YOUR PRESENCE',
        body: "Your business is moving forward, but your brand and content haven't kept pace. You need consistent photography, film, and visual storytelling that reflect the quality of your work and help you build recognition.",
    },
    {
        title: "READY FOR A CREATIVE PARTNER",
        body: "You've tried coordinating freelancers or managing creative work yourself. Now you want one reliable creative partner who understands your business, brings the right talent together, and keeps everything moving in one direction.",
    },
];

export const marqueeItems = ['Commercial Filmmaking', 'Photography', 'Event Coverage', 'Live Production'];

export const services = [
    {
        index: '01',
        tag: 'Film',
        accent: 'yellow',
        title: 'Commercial Filmmaking',
        description: 'Cinematic commercial films that bring your product, people, and purpose to life.',
        deliverables: ['Brand films', 'Product stories', 'Campaigns'],
    },
    {
        index: '02',
        tag: 'Photo',
        accent: 'light-blue',
        title: 'Photography',
        description: 'Intentional imagery to give your brand a distinctive, human point of view.',
        deliverables: ['Product', 'Campaign', 'People'],
    },
    {
        index: '03',
        tag: 'Events',
        accent: 'yellow',
        title: 'Event Coverage',
        description: 'Launches, panels, and gatherings captured as they happen, so the energy of the room lives on after it ends.',
        deliverables: ['Recap films', 'Event photography', 'Social cutdowns'],
    },
    {
        index: '04',
        tag: 'Live',
        accent: 'light-blue',
        title: 'Live Production',
        description: 'Multi-camera video and clean audio for podcasts and live shows, recorded and produced end to end.',
        deliverables: ['Video podcasts', 'Audio podcasts', 'Live recording'],
    },
];

// Selected projects.
// - `background`: still image behind the list on hover (also the player's poster). Unsplash placeholders for now.
// - `preview`: short muted loop that plays over the still on hover. Use a small compressed copy in
//   public/files/videos/web/ (e.g. '/files/videos/web/racewear-preview.mp4'); null = still image only.
// - `video`: the full film that opens in a player with sound when the project is clicked; null = not clickable.
export const projects = [
    {
        title: 'Colgate Brief Tour',
        category: 'Self-Initiated Concept',
        accent: 'yellow',
        discipline: 'Integrated Campaign',
        description: 'A brief tour of Colgate University Campus in Autumn.',
        background: '/files/videos/web/colgate-tour-poster.jpg',
        preview: '/files/videos/web/colgate-tour-preview.mp4',
        video: '/files/videos/web/colgate-tour.mp4',
    },
    {
        title: 'Aura Water',
        category: 'Self-Initiated Concept',
        accent: 'light-blue',
        discipline: 'Brand Identity & Design',
        description: 'Visual identity built for a hypothetical pre-seed D2C beverage brand entering a saturated market.',
        background: 'https://images.unsplash.com/photo-1544367567-0f2fcb046eb9?auto=format&fit=crop&q=80&w=2000',
        preview: null,
        video: null,
    },
    {
        title: 'Trailhead',
        category: 'Self-Initiated Concept',
        accent: 'light-blue',
        discipline: 'Integrated Campaign',
        description: 'Documentary-informed campaign capturing unpolished moments of friends on a weekend adventure.',
        background: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000',
        preview: null,
        video: null,
    },
];

export const galleryPhotos = [
    { src: '/files/photos/web/DSC_1223.jpg', alt: 'Dancers mid-leap on stage under warm light' },
    { src: '/files/photos/web/DSC_1576.jpg', alt: 'Man in a striped poncho dancing in a plaza' },
    { src: '/files/photos/web/700_0624.jpg', alt: 'Person shielding themselves from the rain with a cardboard box' },
    { src: '/files/photos/web/DSCF8960.jpg', alt: 'Fencer with raised foil' },
    { src: '/files/photos/web/DSC_3384.jpg', alt: 'Speaker addressing a crowd at a street market' },
    { src: '/files/photos/web/IMG_7391.jpg', alt: 'Black and white fencing portrait' },
    { src: '/files/photos/web/DSC_4523.jpg', alt: 'Child running through a flock of pigeons' },
    { src: '/files/photos/web/IMG_1906.jpg', alt: 'Soccer players battling for the ball' },
    { src: '/files/photos/web/700_9651.jpg', alt: 'Street vendors pushing a food cart' },
    { src: '/files/photos/web/DSCF4886.jpg', alt: 'Reflection in a cracked glass door' },
    { src: '/files/photos/web/DSC_3316.jpg', alt: 'Cyclist weaving through a busy crosswalk' },
    { src: '/files/photos/web/MDD0259.jpg', alt: 'Two cyclists riding under a bridge' },
    { src: '/files/photos/web/DSC_1705.jpg', alt: 'Canada geese and goslings by a stone bridge' },
    { src: '/files/photos/web/DSCF4116.jpg', alt: 'A lone figure crossing a wide city avenue' },
    { src: '/files/photos/web/DSC_1233.jpg', alt: 'A duck resting on rushing water' },
    { src: '/files/photos/web/DSC_3428.jpg', alt: 'Rabbit sitting in the snow among bare branches' },
    { src: '/files/photos/web/DSCF7995.jpg', alt: 'Portrait of a man in a worn hat' },
    { src: '/files/photos/web/DSC_7775.jpg', alt: 'Painted lady butterfly on a yellow flower' },
    { src: '/files/photos/web/DSC_9713.jpg', alt: 'Moth perched on a leaf at night' },
    { src: '/files/photos/web/DSC_9652.jpg', alt: 'Two performers embracing on a dark stage' },
];

export const contactFields = [
    { name: 'name', label: 'Your Name', type: 'text' },
    { name: 'company', label: 'Company / Startup Name', type: 'text' },
    { name: 'email', label: 'Email Address', type: 'email' },
];

export const socialLinks = [
    { href: '#', label: 'IG' },
    { href: '#', label: 'IN' },
];

// Role-based placeholder bios; no personal details yet.
// TODO: swap in personal bios and headshots (crop 4:5, save under public/files/photos/web/, e.g. '/files/photos/web/team-edmond.jpg')
export const teamMembers = [
    {
        name: 'Edmond Nzivugira',
        role: 'Founder & Videographer',
        bio: 'Edmond founded Crescent Studio to give early-stage companies a creative team from day one. He leads every project from first conversation to final cut, and shoots with a documentary eye for the real people and moments behind a product.',
        photo: null,
    },
    {
        name: 'Alex Attwell',
        role: 'Creative Director',
        bio: 'Alex shapes the creative vision behind each project, turning a founder\'s story into a clear concept and look. Film, photography and design all run through one direction, so everything a client puts out feels like the same brand.',
        photo: null,
    },
    {
        name: 'Eduardo Vilcara',
        role: 'Photographer',
        bio: 'Eduardo captures the people, products and places behind the companies we work with. His work favors natural light and candid moments, giving brands imagery that feels honest rather than staged.',
        photo: null,
    },
    // { name: 'Team Member', role: 'Producer & Editor', bio: 'Short bio goes here.', photo: null },
];

// Behind-the-scenes media. `type` is 'image' or 'video'; leave `src` null to show a placeholder tile.
// TODO: add real set photos / clips under public/files/
export const btsItems = [
    { type: 'image', src: null, caption: 'On set' },
    { type: 'image', src: null, caption: 'Lighting setup' },
    { type: 'video', src: null, caption: 'Camera rig' },
    { type: 'image', src: null, caption: 'Location scout' },
    { type: 'image', src: null, caption: 'Edit bay' },
    { type: 'image', src: null, caption: 'Wrap' },
];
