// navigation.js

import { navigateTo, handleNavigation } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initial navigation
    handleNavigation();

    // Create navigation links
    const navLinks = [
        { text: 'Home', route: '/' },
        { text: 'About', route: '/about' },
        { text: 'Contact', route: '/contact' }
    ];

    const navContainer = document.getElementById('navbar');
    
    navLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.route;
        anchor.textContent = link.text;

        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            history.pushState(null, null, link.route);
            handleNavigation();
        });

        navContainer.appendChild(anchor);
    });
});
