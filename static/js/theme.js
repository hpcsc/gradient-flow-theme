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
});