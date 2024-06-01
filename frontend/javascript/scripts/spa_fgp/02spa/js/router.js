// router.js

export function navigateTo(route) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(route).classList.add('active');
}

export function handleNavigation() {
    const path = window.location.pathname;

    // Extract the route from the path
    const route = path === '/' ? 'home' : path.substring(1);

    // Navigate to the corresponding section
    navigateTo(route);
}

// Listen for changes to the URL
window.addEventListener('popstate', handleNavigation);
