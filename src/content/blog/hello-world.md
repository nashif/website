---
title: 'Hello, World'
description: 'The first post on this site, and a quick tour of how posts are written.'
pubDate: 2026-10-12
---

This is the first post on the Planux site. It exists mostly to show how blogging works here.

## How a post is made

Each post is a Markdown file in `src/content/blog/`. The block at the top of the file, called frontmatter, holds the title, a short description, and the publish date. Everything below it is the post body.

Astro reads that folder as a content collection. The blog index page lists every post sorted by date, and each post gets its own page at `/blog/<filename>/`.

## What you can use

Standard Markdown works as expected:

- Lists, like this one
- **Bold** and *italic* text
- [Links](https://astro.build)
- Inline `code` and fenced code blocks

```sh
npm run dev
```

To add another post, copy this file, change the frontmatter, write, and push. The site rebuilds and deploys on its own.
