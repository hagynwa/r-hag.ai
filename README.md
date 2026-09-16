# r-hag.ai

Personal site of Hagai Rettig, built with [Astro](https://astro.build) and deployed to GitHub Pages from `main`.

- `/` English, `/he/` Hebrew. Both are fully static; the language switch is a link.
- All copy lives in `src/i18n/ui.ts` (interface strings) and `src/data/` (projects, experience, contact).
- Design tokens (colors, fonts, spacing, light/dark) are in `src/styles/global.css`.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview
```

Requires Node 22.12 or newer.
