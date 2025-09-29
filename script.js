  // Smooth Scroll Function
        function smoothScroll(target) {
            const element = document.querySelector(target);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth Scroll for Navigation Links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                smoothScroll(target);
                
                // Close mobile menu if open
                const mobileNav = document.querySelector('.mobile-nav');
                const hamburger = document.querySelector('.hamburger');
                const overlay = document.querySelector('.overlay');
                
                mobileNav.classList.remove('active');
                hamburger.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });

        // Hamburger Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const mobileNav = document.querySelector('.mobile-nav');
        const overlay = document.querySelector('.overlay');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            overlay.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (mobileNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close mobile menu when overlay is clicked
        overlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Close mobile menu when window is resized to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Intersection Observer for Fade In Animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Add staggered delay for project cards
        document.querySelectorAll('.project-card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.2}s`;
        });

        // CTA Button Smooth Scroll
        document.querySelector('.cta-button').addEventListener('click', (e) => {
            e.preventDefault();
            smoothScroll('#projects');
        });

        // Initialize animations on page load
        window.addEventListener('load', () => {
            // Trigger hero animation
            const heroContent = document.querySelector('.hero-content');
            heroContent.classList.add('visible');
        });