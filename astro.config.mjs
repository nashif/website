// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Fenced output shown as a screen, in the same chrome as <MediaWindow>:
//   ```screen title="0xFFFF" tag="usb"
// `screen` is plain text. `title` alone also works on any language. `tag` defaults to "output".
const el = (tagName, properties, children = []) => ({ type: 'element', tagName, properties, children });
const screen = {
  name: 'screen',
  root(root) {
    const raw = this.options.meta?.__raw ?? '';
    const title = raw.match(/\btitle="([^"]*)"/)?.[1];
    if (this.options.lang !== 'screen' && !title) return;
    const tag = raw.match(/\btag="([^"]*)"/)?.[1] ?? 'output';
    const pre = root.children[0];
    root.children = [
      el('figure', { className: ['screen'] }, [
        el('figcaption', {}, [
          el('span', { className: ['screen-dots'], ariaHidden: 'true' }, [el('span', {}), el('span', {}), el('span', {})]),
          el('span', { className: ['screen-title'] }, [{ type: 'text', value: title ?? '' }]),
          el('span', { className: ['screen-tag'] }, [{ type: 'text', value: tag }]),
        ]),
        pre,
      ]),
    ];
  },
};

export default defineConfig({
  site: 'https://planux.com',
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  markdown: {
    shikiConfig: { theme: 'css-variables', langAlias: { screen: 'plaintext' }, transformers: [screen] },
  },
});
