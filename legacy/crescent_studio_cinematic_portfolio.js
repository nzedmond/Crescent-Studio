tailwind.config = {
    theme: {
        extend: {
            colors: {
                'brand-navy': '#14243A',
                'brand-deep-blue': '#003E8F',
                'brand-light-blue': '#ADD0FF',
                'brand-yellow': '#FFD482',
                'brand-golden': '#8F5E01',
                'brand-olive': '#4F3B15',
                'brand-offwhite': '#FDF9F1',
            },
            fontFamily: {
                display: ['Syne', 'sans-serif'],
                sans: ['Inter', 'sans-serif'],
            },
            transitionTimingFunction: {
                'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();

    // 1. Preloader Logic
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.visibility = 'hidden';
                preloader.style.display = 'none';
            }, 800);
        }, 2200);
    });

    // 2. Custom Cursor Logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    // Only run cursor logic on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Move dot instantly
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Move outline with slight delay using requestAnimationFrame for smoothness
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover effects for interactive elements
        const interactives = document.querySelectorAll('.interactive');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('hovering');
            });
            el.addEventListener('mouseleave', () => {
                document.body.classList.remove('hovering');
            });
        });
    }

    // 3. Hero Parallax Effect
    const parallaxElements = document.querySelectorAll('.parallax-img');
    const heroSection = document.getElementById('hero');

    heroSection.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 768) return;

        const x = (window.innerWidth / 2 - e.clientX) / 50;
        const y = (window.innerHeight / 2 - e.clientY) / 50;

        parallaxElements.forEach(element => {
            const speed = parseFloat(element.getAttribute('data-speed')) || 1;
            element.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });

    // Reset parallax on mouse leave
    heroSection.addEventListener('mouseleave', () => {
        parallaxElements.forEach(element => {
            element.style.transform = 'translate(0px, 0px)';
        });
    });

    // 4. Work Section Background Reveal Logic
    const projectItems = document.querySelectorAll('.project-item');
    const bgLayer = document.getElementById('work-bg-layer');

    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const bgUrl = item.getAttribute('data-bg');
            bgLayer.style.backgroundImage = `url(${bgUrl})`;
            bgLayer.style.opacity = '1';

            // Dim siblings
            projectItems.forEach(sibling => {
                if (sibling !== item) sibling.style.opacity = '0.3';
            });
        });

        item.addEventListener('mouseleave', () => {
            bgLayer.style.opacity = '0';

            // Restore siblings
            projectItems.forEach(sibling => {
                sibling.style.opacity = '1';
            });
        });
    });

    // 5. Form Submission (No Alerts)
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        contactForm.style.opacity = '0';
        setTimeout(() => {
            contactForm.style.display = 'none';
            document.getElementById('successMessage').classList.remove('hidden');
        }, 300);
    });
});
