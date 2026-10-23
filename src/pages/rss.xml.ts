import type { APIRoute } from 'astro';
import { getPublished } from '../lib/blog';
import { pageSeo } from '../config/seo';
import { site } from '../config/site';

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

export const GET: APIRoute = async () => {
  const entries = await getPublished();
  const items = entries
    .map((entry) => {
      const link = new URL(`/blog/${entry.id}/`, site.url).href;
      return [
        '  <item>',
        `    <title>${escapeXml(entry.data.title)}</title>`,
        `    <link>${link}</link>`,
        `    <guid isPermaLink="true">${link}</guid>`,
        `    <pubDate>${entry.data.publishDate.toUTCString()}</pubDate>`,
        `    <description>${escapeXml(entry.data.description)}</description>`,
        '  </item>',
      ].join('\n');
    })
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    '<channel>',
    `  <title>${escapeXml(`${pageSeo.blog.title} | ${site.name}`)}</title>`,
    `  <link>${site.url}/blog/</link>`,
    `  <description>${escapeXml(pageSeo.blog.description)}</description>`,
    '  <language>en-us</language>',
    items,
    '</channel>',
    '</rss>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
