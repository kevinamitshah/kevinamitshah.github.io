import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Deployed to GitHub Pages as a user site (served at the root path),
// with the custom domain kevinamitshah.com pointed at it.
export default defineConfig({
  site: 'https://kevinamitshah.com',
  trailingSlash: 'ignore',
  integrations: [mdx()],
  build: {
    format: 'directory',
  },
});
