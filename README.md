# www.planux.com

Astro site deployed to GitHub Pages.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

Pushes to `main` deploy automatically via `.github/workflows/deploy.yml`.

## Blog

Posts live in `src/content/blog/` as Markdown files with frontmatter:

```md
---
title: 'Post title'
description: 'One-line summary shown on the blog index.'
pubDate: 2026-10-12
---

Post body in Markdown.
```

The filename becomes the URL: `hello-world.md` is served at `/blog/hello-world/`.
The schema is defined in `src/content.config.ts`.
