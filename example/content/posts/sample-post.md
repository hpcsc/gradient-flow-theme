---
title: "Sample Blog Post"
date: 2025-12-21T00:00:00Z
draft: false
tags: ["hugo", "theme", "development"]
categories: ["Technology", "Web Development"]
description: "A comprehensive introduction to the Gradient Flow Hugo theme, showcasing its modern design, glassmorphism effects, and powerful features for creating beautiful websites."
---

This is a sample blog post showing the HPCSC theme's capabilities.

## Typography & Code

Here's how code looks in the theme:

```javascript
// Theme initialization
const theme = {
    colors: {
        primary: getComputedStyle(document.documentElement).getPropertyValue('--primary-color'),
        secondary: getComputedStyle(document.documentElement).getPropertyValue('--secondary-color')
    }
};
```

Here's a Go example:

```go
package main

import "fmt"

type Theme struct {
    PrimaryColor   string
    SecondaryColor string
}

func NewTheme(primary, secondary string) *Theme {
    return &Theme{
        PrimaryColor:   primary,
        SecondaryColor: secondary,
    }
}

func (t *Theme) GetCSS() string {
    return fmt.Sprintf(":root {\n    --primary: %s;\n    --secondary: %s;\n}", t.PrimaryColor, t.SecondaryColor)
}

func main() {
    theme := NewTheme("#58a6ff", "#1f6feb")
    fmt.Println(theme.GetCSS())
}

## Content Structure

The theme provides a clean, modern layout with:

- **Gradient backgrounds** that can be customized
- **Sidebar navigation** with categories
- **Post metadata** including tags and reading time
- **Responsive design** that works everywhere

## Features

- Glassmorphism effects for modern look
- Configurable colors via CSS variables
- Accessibility-focused design
- Search functionality
- Mobile-optimized typography

## Browser Support

| Browser | Version | Support Level |
|---------|---------|----------------|
| Chrome  | 90+     | Full           |
| Firefox | 88+     | Full           |
| Safari  | 14+     | Full           |
| Edge    | 90+     | Full           |
| Opera   | 76+     | Full           |

This theme demonstrates all the features available for creating stunning Hugo sites with a focus on content and modern design aesthetics.