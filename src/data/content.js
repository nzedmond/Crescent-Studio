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
        title: 'The Idea-to-Market Founder',
        subtitle: 'Building something new',
        body: 'You have an idea, prototype, or early product. You need a brand identity, product photography, and foundational visual content to introduce your business to the world.',
    },
    {
        title: 'The Growing Startup',
        subtitle: 'Building momentum',
        body: "Your business is operational, but your creative presence hasn't kept pace. You need consistent visual content, stronger brand communication, and creative support to build recognition.",
    },
    {
        title: 'The Scaling Founder',
        subtitle: "Preparing for what's next",
        body: "You're approaching significant milestones: product launches, fundraising, partnerships, or entering new markets. You need more sophisticated creative production to communicate your company's value and ambition.",
    },
];

export const marqueeItems = ['Brand Identity & Design', 'Commercial Filmmaking', 'Photography', 'Production & Events'];

export const services = [
    {
        index: '01',
        tag: 'Brand',
        accent: 'yellow',
        title: 'Brand Identity & Design',
        description: 'Distinctive visual identities that give your business a recognizable face, a clear personality, and a consistent presence.',
        deliverables: ['Brand strategy', 'Visual identity', 'Graphic design'],
    },
    {
        index: '02',
        tag: 'Film',
        accent: 'light-blue',
        title: 'Commercial Filmmaking',
        description: 'Cinematic films that communicate what makes your brand different, showcase your products, and connect with your audience.',
        deliverables: ['Brand films', 'Product stories', 'Campaigns'],
    },
    {
        index: '03',
        tag: 'Photo',
        accent: 'yellow',
        title: 'Photography',
        description: 'Thoughtful brand, product, and lifestyle imagery that gives your business a distinctive visual presence.',
        deliverables: ['Brand photography', 'Product photography', 'Lifestyle photography'],
    },
    {
        index: '04',
        tag: 'Production',
        accent: 'light-blue',
        title: 'Production & Events',
        description: 'Capturing and producing live experiences, events, and multi-camera productions through professional video and audio.',
        deliverables: ['Event films', 'Multi-camera production', 'Live broadcasts'],
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
