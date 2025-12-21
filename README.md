# Gradient Flow Hugo Theme

A modern, responsive Hugo theme with beautiful gradient backgrounds and glassmorphism effects.

![Demo home page](./demo.png)

## ✨ Features

- **🎨 Modern Gradient Design**: Configurable gradient backgrounds with glassmorphism effects
- **📱 Responsive Layout**: Adapts perfectly to desktop, tablet, and mobile
- **🎯 Content-Focused**: Typography and layout optimized for reading
- **🎛️ Highly Configurable**: Easy customization of colors, fonts, and features
- **♿ Accessibility**: WCAG compliant design patterns
- **🏷️ Categories**: Organized content navigation
- **🔗 Social Integration**: Built-in social media links
- **💬 Comments**: Disqus integration support
- **📊 Analytics**: Google Analytics support

## 🚀 Installation

1. Add this theme to your Hugo site:
   ```bash
   cd themes
   git clone https://github.com/hpcsc/gradient-flow-theme.git gradient-flow
   ```

2. Update your site's `config.yaml`:
   ```yaml
   theme: "gradient-flow"
   ```

## ⚙️ Configuration

The theme is highly configurable through your site's `config.yaml`:

```yaml
params:
  # Theme Colors (customize your look)
  primaryColor: "#58a6ff"       # Accent color for links, highlights
  secondaryColor: "#13547A"   # Gradient start color
  tertiaryColor: "#70BEBC"     # Gradient end color
  textColor: "#ffffff"          # Main text color
  backgroundBlur: "rgba(19, 84, 122, 0.3)"  # Background blur effect
  
  # Typography
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  codeFont: "'SF Mono', Monaco, 'Cascadia Code', monospace"
  
  # Author Information
  author:
    name: "Your Name"
    description: "Your professional bio"
    avatar: "/path/to/avatar.jpg"  # Optional: URL to avatar image
    email: "your-email@example.com"  # Optional: For Gravatar
  
  # Social Media
  github: "username"
  linkedin: "username"
  codeproject: "username"
  
  # Analytics
  googleAnalytics: "GA-TRACKING-ID"
  disqusShortname: "site-disqus"
  
  # Custom Assets (arrays of strings)
  customCSS: ["/css/custom.css"]
  customJS: ["/js/custom.js"]
  
  # Other
  favicon: "/favicon.ico"  # Optional
```

### Navigation Configuration

The theme uses Hugo's menu system with automatic content discovery. Here's how to configure your navigation:

#### 1. Basic Menu Items (in `config.yaml`)

```toml
[menu]
  [[menu.main]]
    name = 'Home'
    url = '/'
    weight = 10

  [[menu.main]]
    name = 'Categories'
    url = '/categories'
    weight = 30

  [[menu.main]]
    name = 'Tags'
    url = '/tags'
    weight = 40
```

#### 2. Automatic Page Menu (Recommended)

Create a `content/menu/` directory for pages that should appear in a dropdown menu:

**Directory Structure:**
```
content/
├── menu/
│   ├── _index.md          # Optional section page
│   ├── about.md          # Page 1
│   ├── team.md           # Page 2
│   └── services.md       # Page 3
├── posts/
└── ...
```

**Add to `config.yaml`:**
```yaml
menu:
  main:
    - name: 'Home'
      url: '/'
      weight: 10

    - identifier: 'menu'
      name: 'Pages'
      title: 'Site Pages'
      weight: 20

    - name: 'Categories'
      url: '/categories'
      weight: 30

    - name: 'Tags'
      url: '/tags'
      weight: 40
```

**Content Files (`content/menu/about.md`):**
```yaml
---
title: "About"
date: 2023-01-01
weight: 10         # Order in dropdown
draft: false
---

# About Page

Your about page content here...
```

**Benefits:**
- **Content-driven**: Just add files to `content/menu/` and they appear in navigation
- **Easy ordering**: Use `weight` in front matter to control menu order
- **No config updates**: Add new pages without touching `config.yaml`
- **Organized**: Clear separation of menu content vs blog posts

#### 3. Mixed Approach

Combine both methods for maximum flexibility:
- Static items in `config.yaml` (Home, Categories, Tags)
- Dynamic pages in `content/menu/` (About, Team, Services)

## 🎨 Customization Examples

### Dark Tech Theme
```yaml
params:
  primaryColor: "#00b4d8"
  secondaryColor: "#1a1a1a"
  tertiaryColor: "#0d1117"
```

### Ocean Theme
```yaml
params:
  primaryColor: "#00b4d8"
  secondaryColor: "#0077be"
  tertiaryColor: "#00a8cc"
```

### Purple Gradient
```yaml
params:
  primaryColor: "#8b5cf6"
  secondaryColor: "#6d28d9"
  tertiaryColor: "#a855f7"
```

## 📱 Layout Structure

### Home Page
- Site header with title and tagline
- Left sidebar with author profile and categories
- Main content area with post cards
- Each post shows title, date, tags, and excerpt

### Post Page
- Clean navigation breadcrumb
- Sidebar with categories and related posts
- Full-width post content with optimized typography
- Post-specific tags display
- Code highlighting with theme-matching colors

## 🌍 Internationalization

Supports multiple languages with `i18n/` files. Current translations:
- English (default)

## 📄 License

MIT License - see [LICENSE](https://github.com/hpcsc/gradient-flow-theme/blob/main/LICENSE) for details.

---

Built with ❤️ for the Hugo community
