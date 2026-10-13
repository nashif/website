// Brand + navigation. Text values live in site-settings.json.
import settings from './site-settings.json';

export const site = {
  ...settings,
  url: 'https://planux.com',
  secondary: { label: 'Source on GitHub', href: 'https://github.com/nashif/website' },
  nav: [
    { label: 'Blog', href: '/blog' },
    { label: 'GitHub', href: 'https://github.com/nashif' },
  ],
  menu: [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'GitHub', href: 'https://github.com/nashif' },
  ],
  footer: [
    { title: 'Site', links: [['Home', '/'], ['Blog', '/blog']] },
    { title: 'Elsewhere', links: [['GitHub', 'https://github.com/nashif'], ['Zephyr Project', 'https://zephyrproject.org']] },
  ],
} as const;
