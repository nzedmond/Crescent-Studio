export const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#studio', label: 'Studio' },
    { href: '#contact', label: 'Contact' },
];

// Floating hero media; `position` holds the size/placement/opacity utility classes
export const heroMedia = [
    { type: 'image', src: '/files/photos/web/DSCF7995.jpg', alt: 'Portrait of a man in a worn hat', speed: 1.5,
      position: 'w-48 h-64 md:w-64 md:h-80 opacity-60 top-[15%] left-[10%] md:top-[20%] md:left-[15%]' },
    { type: 'image', src: '/files/photos/web/DSC_9652.jpg', alt: 'Two performers embracing on a dark stage', speed: -2,
      position: 'w-56 h-72 md:w-72 md:h-96 opacity-40 bottom-[10%] right-[5%] md:bottom-[15%] md:right-[15%]' },
    { type: 'image', src: '/files/photos/web/DSCF4116.jpg', alt: 'A lone figure crossing a wide city avenue', speed: 0.8,
      position: 'w-40 h-56 md:w-56 md:h-72 opacity-50 top-[10%] right-[20%] md:top-[15%] md:right-[25%]' },
    { type: 'video', src: '/files/videos/Moose_mtCube.mp4', speed: -1.2,
      position: 'w-36 h-48 md:w-48 md:h-64 opacity-60 bottom-[8%] left-[3%] md:bottom-[10%] md:left-[8%]' },
    { type: 'video', src: '/files/videos/Moose_nurturing.mp4', speed: 1.8,
      position: 'w-36 h-48 md:w-48 md:h-64 opacity-50 top-[8%] right-[3%] md:top-[10%] md:right-[8%]' },
    { type: 'video', src: '/files/videos/Moosee_graphic.mp4', speed: -0.7,
      position: 'w-32 h-44 md:w-40 md:h-56 opacity-50 bottom-[12%] right-[28%] md:bottom-[10%] md:right-[32%]' },
];

export const marqueeItems = ['Commercial Filmmaking', 'Photography'];

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
];

// Using Unsplash placeholders for the cinematic background effect
export const projects = [
    {
        title: 'Racewear',
        category: 'Client Work',
        accent: 'yellow',
        discipline: 'Commercial Filmmaking',
        description: 'A 60-second commercial film designed to capture the visceral, fast-paced, and gritty reality of the track.',
        background: 'https://images.unsplash.com/photo-1541348263662-e068362d4941?auto=format&fit=crop&q=80&w=2000',
        href: '#',
    },
    {
        title: 'Aura Water',
        category: 'Self-Initiated Concept',
        accent: 'light-blue',
        discipline: 'Brand Identity & Design',
        description: 'Visual identity built for a hypothetical pre-seed D2C beverage brand entering a saturated market.',
        background: 'https://images.unsplash.com/photo-1544367567-0f2fcb046eb9?auto=format&fit=crop&q=80&w=2000',
        href: '#',
    },
    {
        title: 'Trailhead',
        category: 'Self-Initiated Concept',
        accent: 'light-blue',
        discipline: 'Integrated Campaign',
        description: 'Documentary-informed campaign capturing unpolished moments of friends on a weekend adventure.',
        background: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000',
        href: '#',
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
