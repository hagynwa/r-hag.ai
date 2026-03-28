# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

r-hag.ai is Hagai Rettig's personal website. Domain: `r-hag.ai`. Single-file static site with no build step, no dependencies, no frameworks.

## Architecture

- **Single file:** `index.html` contains all HTML, CSS (~350 lines), and JS (~30 lines) inline
- **External:** Google Fonts CDN only (JetBrains Mono + Inter)
- **Design concept:** "The Signal" — dark terminal aesthetic. The visitor "intercepts" signals that reveal Hagai's identity, philosophy, projects, and contact info
- **Color system:** CSS custom properties in `:root`. Accent green (`#00d4aa`) for terminal/live elements, warm amber (`#f0a030`) for human/philosophical moments

## Conventions

- Monospace-first aesthetic. Use `var(--font-mono)` for structural elements, `var(--font-body)` (Inter) only for quotes and body text where readability matters
- Scroll reveals use `IntersectionObserver` with `.reveal` / `.reveal-stagger` classes
- Projects are called "transmissions" in the UI
- All animations are CSS-only except the boot sequence typewriter (JS setTimeout chain)
- Mobile breakpoints: 768px and 480px

## Deploy

Push to main. Configure hosting (GitHub Pages, Cloudflare Pages, or similar) to serve `index.html` from root.
