# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview production build locally
```

There are no tests or linting scripts.

## Architecture

**Stack:** Astro 4 + Tailwind CSS 3. Static site (no SSR). Built output goes to `dist/`.

**Key directories:**
- `src/pages/` — file-based routing. `[slug].astro` under `projects/` is the dynamic project detail page.
- `src/content/projects/` — Markdown files, one per project. Astro's Content Collections API validates them against the schema in `src/content/config.ts`.
- `src/layouts/BaseLayout.astro` — single shared layout wrapping all pages (header, footer, global CSS slot).
- `src/components/` — shared Astro components (`SiteHeader`, `SiteFooter`, `ProjectCard`, `SectionHeading`).
- `src/styles/global.css` — Tailwind layers + all custom component classes (`.card`, `.btn-main`, `.chip`, `.richtext`, `.site-shell`, etc.).

**Project content schema** (`src/content/config.ts`):
```ts
title, client, kind ("Client Work" | "Side Project"), summary, image, imageAlt?, tags?, stack?, outcomes[]
```
Adding a new project = drop a `.md` file in `src/content/projects/` with valid frontmatter; the static path is auto-generated.

**Design tokens** (Tailwind config):
- Colors: `paper` (#ececec bg), `shell` (#efefc8 card bg), `ink-{500,600,700}` (blue-navy text hierarchy)
- Fonts: `font-sans` = Outfit, `font-display` = Sora (headings)
- Tailwind's `applyBaseStyles: false` is set — global styles are managed entirely in `global.css`.
