import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

import legacyBlogRedirects from './src/config/legacyBlogRedirects.json' with { type: 'json' };

const EXCLUDED_FROM_SITEMAP = ['/thank-you/', '/styleguide/'];
const PRODUCTION_ORIGIN = 'https://hawaiiansmilesortho.com';

/** Astro's `site` option must be an absolute http(s) URL or `astro check` reports "Invalid url". */
function resolveSiteUrl(value) {
  let raw = (value ?? '')
    .trim()
    .replace(/^\uFEFF/, '')
    .replace(/^['"]+|['"]+$/g, '');
  if (!raw) return PRODUCTION_ORIGIN;
  if (raw.startsWith('//')) raw = `https:${raw}`;
  else if (!/^[a-z][a-z\d+.-]*:/i.test(raw)) raw = `https://${raw}`;

  let url;
  try {
    url = new URL(raw);
  } catch {
    throw new Error(
      'SITE_URL must be an origin like https://example.com. Astro rejected the configured value (Invalid url).',
    );
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new Error(`SITE_URL must use http or https. Received protocol ${url.protocol}`);
  }
  return url.origin;
}

const siteUrl = resolveSiteUrl(process.env.SITE_URL);
const allowIndexing =
  process.env.ALLOW_INDEXING === 'true' ||
  (process.env.ALLOW_INDEXING !== 'false' && siteUrl === PRODUCTION_ORIGIN);

// Staging builds pass ALLOW_INDEXING=false; local/production default to indexable
// when the origin is the live domain. Exposed so pages can force noindex.
process.env.PUBLIC_ALLOW_INDEXING = allowIndexing ? 'true' : 'false';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  redirects: {
    '/treatments/retention/': '/treatments/retainers/',
    ...legacyBlogRedirects,
  },
  integrations: [
    mdx(),
    icon(),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        return !EXCLUDED_FROM_SITEMAP.some((excluded) => path.startsWith(excluded));
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
