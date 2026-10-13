# www.planux.com

Astro site for [planux.com](https://planux.com), deployed to GitHub Pages.
Built on the [Runlog Lite](https://github.com/pasha2do-cyber/runlog-astro-lite) theme (MIT, see `LICENSE-runlog-lite.md`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

Pushes to `main` deploy automatically via `.github/workflows/deploy.yml`.

## Where things live

- Site name, description, announcement bar and primary button: `src/data/site-settings.json`
- Navigation and footer links: `src/data/site.ts`
- Homepage copy: `src/data/home.json` and `src/pages/index.astro`
- Design tokens and colours: `src/styles/global.css`
- Theme conventions for editing: `AGENTS.md`

## Blog

Posts live in `src/content/blog/` as Markdown or MDX files with frontmatter:

```md
---
title: 'Post title'
excerpt: 'One or two sentences shown on the blog index and in link previews.'
date: 2026-10-12
category: engineering   # engineering | research | product | customers
author: Anas Nashif
readingTime: 8          # minutes, optional (default 5)
featured: false         # optional, shows the post large at the top of the index
---

Post body in Markdown.
```

The filename becomes the URL: `architecture-evolution.md` is served at `/blog/architecture-evolution/`.
The schema is defined in `src/content.config.ts`.
