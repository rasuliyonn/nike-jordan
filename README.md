<div align="center">

<img src="./img/logo.svg" width="60" alt="Air Jordan Logo" />

# Air Jordan — The New 2023

**A modern, fully responsive Nike Jordan landing page**
built with vanilla HTML, CSS & JavaScript

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-0c315f?style=flat-square)](LICENSE)

</div>

---

## Preview

> A clean, performance-focused landing page for the Air Jordan brand — complete with smooth entrance animations, scroll-triggered reveals, a floating hero shoe, stats counter, and a full footer.

---

## Features

| Feature | Description |
|---|---|
| **Hero Animation** | "AIR JORDAN" text slides up on load; shoe floats continuously |
| **Scroll Animations** | All sections fade + slide in via `IntersectionObserver` |
| **Stagger Cards** | Category cards animate in sequence with CSS transition-delay |
| **Stats Counter** | Numbers count from 0 to target when scrolled into view |
| **Sticky Header** | Header sticks to top with blur backdrop-filter on scroll |
| **Smooth Scroll** | All anchor links scroll smoothly to target sections |
| **Back to Top** | Fixed button appears after scrolling 400px |
| **Mobile Menu** | Burger menu with animated X toggle for screens ≤ 768px |
| **Fully Responsive** | Breakpoints at 1280px, 992px, 768px, 480px |

---

## Sections

```
┌─────────────────────────────┐
│  Header  (sticky nav)       │
├─────────────────────────────┤
│  Hero    (animated)         │
├─────────────────────────────┤
│  Collections  (4 cards)     │
├─────────────────────────────┤
│  Stats   (counter)          │
├─────────────────────────────┤
│  Features  (3 cards)        │
├─────────────────────────────┤
│  Newsletter  (form)         │
├─────────────────────────────┤
│  Footer  (4 columns)        │
└─────────────────────────────┘
```

---

## Project Structure

```
nikejordan/
├── index.html
├── main.css                  # Imports all CSS modules
├── style/
│   ├── base.css              # Reset, fonts, container
│   ├── header.css            # Sticky nav + burger
│   ├── hero.css              # Hero typography & layout
│   ├── section-carts.css     # Category cards grid
│   ├── animations.css        # Keyframes & scroll classes
│   ├── sections.css          # Stats, features, newsletter, footer
│   └── adaptive.css          # Responsive breakpoints
├── script/
│   ├── burger-menu.js        # Mobile nav toggle
│   └── animations.js         # IntersectionObserver, counters, scroll
├── img/
│   ├── logo.svg
│   ├── hero-product.png
│   ├── search.svg
│   ├── basket.png
│   └── Rectangle 7-10.png    # Category card backgrounds
└── fonts/
    └── Poppins (18 weights)
```

---

## Getting Started

No build tools, no dependencies. Just open the file:

```bash
# Clone the repo
git clone https://github.com/your-username/nikejordan.git

# Open in browser
open nikejordan/index.html
```

Or use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code for hot reload.

---

## Animation Overview

```
Page Load
├── .animate-slide-up   → translateY(70px) → 0, opacity 0 → 1
├── .animate-fade-in    → opacity 0 → 1
└── .animate-float      → infinite translateY 0 ↔ -20px

On Scroll (IntersectionObserver, threshold 0.15)
├── .animate-on-scroll  → adds .is-visible (translateY + opacity)
├── .stagger-1..4       → transition-delay 0.1s — 0.4s
└── [data-target]       → eased count-up over 1800ms

Header
└── .scrolled class     → box-shadow + backdrop-filter blur
```

---

## Responsive Breakpoints

| Breakpoint | Layout changes |
|---|---|
| `≤ 1280px` | Container full-width, reduced gaps |
| `≤ 992px` | Nav wraps, stats → 2 columns, features → 2 columns |
| `≤ 768px` | Burger menu, cards → 2 columns, newsletter form stacks |
| `≤ 480px` | Cards → 1 column, footer → 1 column, compact spacing |

---

## Color Palette

| Color | Hex | Usage |
|---|---|---|
| Jordan Blue | `#0c315f` | Primary, headings, buttons |
| Dark Navy | `#060f1a` | Footer background |
| Light Gray | `#f4f6fa` | Features section background |
| Text Gray | `#6b7280` | Body text, descriptions |

---

## Font

**Poppins** — Google Fonts (self-hosted in `/fonts/`)

Weights used: `Regular`, `Medium`, `Bold`

---

<div align="center">

Made with ❤️ for the love of the game

</div>
