// Theme configuration and initialization
document.addEventListener('DOMContentLoaded', function() {
    // Apply gradient background
    const gradientStart = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();
    const gradientEnd = getComputedStyle(document.documentElement).getPropertyValue('--tertiary-color').trim();
    document.body.style.background = `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%)`;
    
    // Initialize any custom theme features
    if (window.themeConfig) {
        Object.keys(window.themeConfig).forEach(key => {
            if (window.themeConfig[key]) {
                document.documentElement.style.setProperty(`--${key}`, window.themeConfig[key]);
            }
        });
    }
    
    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.nav-dropdown-toggle');
        const content = dropdown.querySelector('.nav-dropdown-content');
        
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const isOpen = toggle.getAttribute('aria-expanded') === 'true';
            
            // Close all other dropdowns
            dropdowns.forEach(otherDropdown => {
                const otherToggle = otherDropdown.querySelector('.nav-dropdown-toggle');
                const otherContent = otherDropdown.querySelector('.nav-dropdown-content');
                
                if (otherDropdown !== dropdown) {
                    otherToggle.setAttribute('aria-expanded', 'false');
                    otherContent.classList.remove('nav-dropdown-content--open');
                }
            });
            
            // Toggle current dropdown
            if (isOpen) {
                toggle.setAttribute('aria-expanded', 'false');
                content.classList.remove('nav-dropdown-content--open');
            } else {
                toggle.setAttribute('aria-expanded', 'true');
                content.classList.add('nav-dropdown-content--open');
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                toggle.setAttribute('aria-expanded', 'false');
                content.classList.remove('nav-dropdown-content--open');
            }
        });
        
        // Close dropdown when clicking on a link inside
        const links = content.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', function() {
                toggle.setAttribute('aria-expanded', 'false');
                content.classList.remove('nav-dropdown-content--open');
            });
        });
    });
});