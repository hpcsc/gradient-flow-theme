# Gradient Flow Theme - Agent Guidelines

## Development Commands
Use Task for all development commands:
- `task start` - Start development server with drafts
- `task build` - Build production site  
- `task clean` - Clean build artifacts
- `task new "post-name"` - Create new content
- No specific test framework - validate by checking rendered output

## Code Style Guidelines

### HTML/Templates (Hugo)
- Use Hugo template syntax: `{{ .Variable }}`, `{{ partial "name" . }}`
- Follow semantic HTML5 structure
- Use BEM-style CSS classes: `.block__element--modifier`
- Include proper accessibility attributes (alt text, ARIA labels)

### CSS
- Use CSS custom properties (variables) for theme colors
- Mobile-first responsive design with `@media` queries
- Flexbox and Grid for layouts
- Glassmorphism effects with `backdrop-filter: blur()`
- Organize styles by component (profile, navigation, posts, etc.)

### JavaScript  
- Keep JS minimal and focused on theme enhancements
- Use `DOMContentLoaded` for initialization
- No external dependencies except Font Awesome icons
- Follow ES6+ standards when possible

### File Organization
- `/layouts/` - Hugo template files
- `/static/css/` - Stylesheets  
- `/static/js/` - JavaScript files
- `/example/` - Demo configuration and content
- Use descriptive filenames following kebab-case convention

### Configuration
- Theme customization via `params` in `hugo.yaml`
- Provide sensible defaults for all colors and settings
- Support i18n through `/i18n/` translation files