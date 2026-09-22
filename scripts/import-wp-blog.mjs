/**
 * One-time importer: WordPress WXR export → src/content/blog markdown.
 *
 * Usage: node scripts/import-wp-blog.mjs <path-to-export.xml>
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const xmlPath = process.argv[2];
if (!xmlPath) {
  console.error('Usage: node scripts/import-wp-blog.mjs <export.xml>');
  process.exit(1);
}

const blogDir = path.join(root, 'src/content/blog');
const imageDir = path.join(root, 'src/assets/blog');
const redirectsPath = path.join(root, 'src/config/legacyBlogRedirects.json');

/** WordPress page paths → this site. Blog post slugs are rewritten separately. */
const PAGE_MAP = {
  '': '/',
  'financial-information': '/about/financial/',
  'contact-us': '/contact/',
  contact: '/contact/',
  'appointment-request': '/appointment/',
  'meet-the-doctors': '/about/doctors/',
  'our-doctors': '/about/doctors/',
  doctors: '/about/doctors/',
  'our-team': '/about/staff/',
  staff: '/about/staff/',
  about: '/about/',
  'about-us': '/about/',
  'adult-treatment': '/treatments/adult-treatment/',
  'early-treatment': '/treatments/early-treatment/',
  emergency: '/treatments/emergency/',
  braces: '/treatments/braces/',
  invisalign: '/treatments/invisalign/',
  retainers: '/treatments/retainers/',
  retention: '/treatments/retainers/',
  'teeth-whitening': '/treatments/teeth-whitening/',
  airway: '/treatments/airway/',
  'orthodontist-in-kaneohe': '/locations/kaneohe/',
  kaneohe: '/locations/kaneohe/',
  'kailua-kona': '/locations/kailua-kona/',
  kamuela: '/locations/kamuela/',
  waimea: '/locations/kamuela/',
  hilo: '/locations/hilo/',
  locations: '/locations/',
  'why-choose-us': '/why-choose-us/',
  privacy: '/privacy/',
  'privacy-policy': '/privacy/',
  policies: '/policies/',
  'patient-forms': '/patients/forms/',
  forms: '/patients/forms/',
  'new-patients': '/patients/first-visit/',
  'first-visit': '/patients/first-visit/',
  referrals: '/patients/referrals/',
  patients: '/patients/',
  'common-problems': '/treatments/emergency/',
  treatments: '/treatments/',
  'adult-orthodontics': '/treatments/adult-treatment/',
  faq: '/patients/first-visit/',
  'invisalign-adult': '/treatments/invisalign/adult/',
  'invisalign-faqs': '/treatments/invisalign/',
  'invisalign-first': '/treatments/invisalign/',
  'meet-the-staff': '/about/staff/',
  'orthodontic-care': '/treatments/',
  'registration-forms': '/patients/forms/',
  'self-ligating-brackets': '/treatments/braces/',
  blog: '/blog/',
  'invisalign-for-adults': '/treatments/invisalign/adult/',
  'invisalign-for-teens': '/treatments/invisalign/teen/',
  'invisalign-for-children': '/treatments/invisalign/children/',
};

const SITE_HOSTS = new Set(['hawaiiansmilesortho.com', 'www.hawaiiansmilesortho.com']);

function field(block, tag) {
  const re = new RegExp(
    `<${tag}(?:\\s[^>]*)?>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([^<]*))</${tag}>`,
  );
  const match = block.match(re);
  if (!match) return '';
  return (match[1] ?? match[2] ?? '').replace(/\r\n/g, '\n').trim();
}

function metas(block) {
  const map = new Map();
  const re =
    /<wp:postmeta>\s*<wp:meta_key>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([^<]*))<\/wp:meta_key>\s*<wp:meta_value>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([^<]*))<\/wp:meta_value>\s*<\/wp:postmeta>/g;
  for (const match of block.matchAll(re)) {
    const key = (match[1] ?? match[2] ?? '').trim();
    const value = match[3] ?? match[4] ?? '';
    if (!map.has(key)) map.set(key, value);
  }
  return map;
}

function categories(block) {
  return [
    ...block.matchAll(
      /<category domain="category" nicename="([^"]+)"><!\[CDATA\[([\s\S]*?)\]\]><\/category>/g,
    ),
  ].map((match) => ({ slug: match[1], name: decodeBasic(match[2].trim()) }));
}

function decodeBasic(value) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)));
}

function attr(tag, name) {
  const match = tag.match(new RegExp(`${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, 'i'));
  return match ? decodeBasic(match[1] ?? match[2] ?? '') : '';
}

const unmapped = new Set();

function rewriteHref(href, postSlugs) {
  if (!href) return href;
  const trimmed = href.trim();
  if (trimmed.startsWith('#') || trimmed.startsWith('mailto:') || trimmed.startsWith('tel:')) {
    return trimmed;
  }

  let url;
  try {
    url = trimmed.startsWith('/')
      ? new URL(trimmed, 'https://hawaiiansmilesortho.com')
      : new URL(trimmed);
  } catch {
    return trimmed;
  }

  if (!SITE_HOSTS.has(url.hostname)) return trimmed;

  const parts = url.pathname.split('/').filter(Boolean);
  const hash = url.hash || '';
  if (parts.length === 0) return `/${hash}`;

  if (postSlugs.has(parts[0]) && parts.length === 1) return `/blog/${parts[0]}/${hash}`;

  const joined = parts.join('/');
  if (PAGE_MAP[joined]) return `${PAGE_MAP[joined]}${hash}`;

  const last = parts[parts.length - 1];
  if (PAGE_MAP[last] && parts.length > 1) return `${PAGE_MAP[last]}${hash}`;
  if (PAGE_MAP[parts[0]]) return `${PAGE_MAP[parts[0]]}${hash}`;

  unmapped.add(url.pathname);
  return `${url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`}${hash}`;
}

function inline(html, postSlugs) {
  let source = html;
  for (let pass = 0; pass < 8; pass += 1) {
    const next = source
      .replace(
        /<a\b[^>]*href\s*=\s*(?:"([^"]*)"|'([^']*)')[^>]*>([\s\S]*?)<\/a>/gi,
        (_, hrefA, hrefB, text) => {
          const label = inline(text, postSlugs).replace(/\s+/g, ' ').trim();
          const href = rewriteHref(decodeBasic(hrefA ?? hrefB ?? ''), postSlugs);
          if (!label) return href;
          return `[${label}](${href})`;
        },
      )
      .replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, text) => {
        const inner = inline(text, postSlugs).trim();
        return inner ? `**${inner}**` : '';
      })
      .replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, text) => {
        const inner = inline(text, postSlugs).trim();
        return inner ? `*${inner}*` : '';
      });
    if (next === source) break;
    source = next;
  }

  return decodeBasic(source.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, ''))
    .replace(/[ \t]+\n/g, '\n')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}

function markdownTable(inner, postSlugs) {
  const rows = [...inner.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map((row) =>
    [...row[1].matchAll(/<(th|td)\b[^>]*>([\s\S]*?)<\/\1>/gi)].map((cell) =>
      inline(cell[2], postSlugs).replace(/\|/g, '\\|').replace(/\n+/g, ' ').trim(),
    ),
  );
  if (rows.length === 0) return '';
  const width = Math.max(...rows.map((row) => row.length));
  const normalized = rows.map((row) => {
    while (row.length < width) row.push('');
    return row;
  });
  const [header, ...body] = normalized;
  const lines = [
    `| ${header.join(' | ')} |`,
    `| ${header.map(() => '---').join(' | ')} |`,
    ...body.map((row) => `| ${row.join(' | ')} |`),
  ];
  return `\n\n${lines.join('\n')}\n\n`;
}

function blocks(html, postSlugs) {
  let source = html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');

  source = source.replace(/<table\b[^>]*>([\s\S]*?)<\/table>/gi, (_, inner) =>
    markdownTable(inner, postSlugs),
  );
  source = source.replace(/<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/gi, (_, text) => {
    const caption = inline(text, postSlugs);
    return caption ? `\n\n*${caption}*\n\n` : '';
  });
  source = source.replace(/<\/?figure\b[^>]*>/gi, '');
  source = source.replace(/<img\b[^>]*>/gi, (tag) => {
    const src = attr(tag, 'src');
    const alt = attr(tag, 'alt');
    if (!src) return '';
    return `\n\n![${alt.replace(/[\[\]]/g, '')}](${src})\n\n`;
  });

  for (let pass = 0; pass < 6; pass += 1) {
    const next = source.replace(/<(ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, type, inner) => {
      if (/<(ul|ol)\b/i.test(inner)) return _;
      const items = [...inner.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)];
      if (items.length === 0) return '';
      const lines = items.map((item, index) => {
        const body = blocks(item[1], postSlugs).trim().replace(/\n+/g, ' ');
        const prefix = type.toLowerCase() === 'ol' ? `${index + 1}. ` : '- ';
        return `${prefix}${body}`;
      });
      return `\n\n${lines.join('\n')}\n\n`;
    });
    if (next === source) break;
    source = next;
  }

  source = source.replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_, level, text) => {
    const depth = Math.min(4, Math.max(2, Number(level)));
    const heading = inline(text, postSlugs).replace(/\s+/g, ' ').trim();
    return heading ? `\n\n${'#'.repeat(depth)} ${heading}\n\n` : '';
  });
  source = source.replace(/<hr\b[^>]*>/gi, '\n\n---\n\n');
  source = source.replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, (_, text) => {
    const paragraph = inline(text, postSlugs);
    return paragraph ? `\n\n${paragraph}\n\n` : '';
  });
  source = source.replace(/<\/?(div|span|section|article)\b[^>]*>/gi, '');

  let text = inline(source, postSlugs);
  text = text
    .replace(/\u00a0/g, ' ')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  return text;
}

function yamlString(value) {
  return JSON.stringify(value.replace(/\s+/g, ' ').trim());
}

function plainText(markdown) {
  return markdown
    .replace(/!\[[^\]]*]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function descriptionFor(metaDesc, markdown, title) {
  const source = (metaDesc || plainText(markdown) || title).replace(/\s+/g, ' ').trim();
  if (source.length <= 180) return source;
  const cut = source.slice(0, 177);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}

function dateOnly(value) {
  return (value || '').slice(0, 10);
}

const downloaded = new Map();

async function downloadImage(url, id) {
  if (!url) return null;
  if (downloaded.has(url)) return downloaded.get(url);

  const pending = (async () => {
    const existing = fs.existsSync(imageDir)
      ? fs.readdirSync(imageDir).find((name) => name.startsWith(`${id}-`))
      : null;
    if (existing) return `../../assets/blog/${existing}`;

    let response;
    try {
      response = await fetch(url);
    } catch (error) {
      console.warn(`image failed: ${url} (${error.cause?.code || error.message})`);
      return null;
    }
    if (!response.ok) {
      console.warn(`image ${response.status}: ${url}`);
      return null;
    }
    const bytes = Buffer.from(await response.arrayBuffer());
    const fromUrl = path.basename(new URL(url).pathname);
    const safe = fromUrl.replace(/[^a-zA-Z0-9._-]/g, '-').slice(0, 80);
    const filename = `${id}-${safe}`;
    fs.mkdirSync(imageDir, { recursive: true });
    fs.writeFileSync(path.join(imageDir, filename), bytes);
    return `../../assets/blog/${filename}`;
  })();

  downloaded.set(url, pending);
  return pending;
}

function rewriteBodyImages(markdown, urlToPath) {
  return markdown.replace(/!\[([^\]]*)]\((https?:\/\/[^)]+)\)/g, (full, alt, url) => {
    const local = urlToPath.get(url);
    return local ? `![${alt}](${local})` : full;
  });
}

const xml = fs.readFileSync(xmlPath, 'utf8');
const itemBlocks = xml
  .split('<item>')
  .slice(1)
  .map((chunk) => chunk.split('</item>')[0]);

const attachments = new Map();
const posts = [];

for (const block of itemBlocks) {
  const type = field(block, 'wp:post_type');
  const id = field(block, 'wp:post_id');
  if (type === 'attachment') {
    const meta = metas(block);
    attachments.set(id, {
      url: field(block, 'wp:attachment_url'),
      alt: meta.get('_wp_attachment_image_alt') || field(block, 'title'),
    });
    continue;
  }
  if (type !== 'post') continue;

  const status = field(block, 'wp:status');
  const slug = field(block, 'wp:post_name');
  const title = decodeBasic(field(block, 'title'));
  if (status !== 'publish') {
    console.log(`skip ${status}: ${slug || title}`);
    continue;
  }

  const meta = metas(block);
  posts.push({
    id,
    slug,
    title,
    date: dateOnly(field(block, 'wp:post_date')),
    modified: dateOnly(field(block, 'wp:post_modified')),
    html: field(block, 'content:encoded'),
    description: meta.get('_yoast_wpseo_metadesc') || '',
    thumbId: meta.get('_thumbnail_id') || '',
    categories: categories(block),
    creator: field(block, 'dc:creator'),
  });
}

const postSlugs = new Set(posts.map((post) => post.slug));
fs.mkdirSync(blogDir, { recursive: true });

const kept = new Set();
const redirects = {};
const imageJobs = [];

for (const post of posts) {
  let markdown = blocks(post.html, postSlugs);
  const imageUrls = [...markdown.matchAll(/!\[[^\]]*]\((https?:\/\/[^)]+)\)/g)].map(
    (match) => match[1],
  );
  for (const url of imageUrls) {
    imageJobs.push({ url, id: `inline-${post.id}` });
  }

  const attachment = attachments.get(post.thumbId);
  if (attachment?.url) {
    imageJobs.push({ url: attachment.url, id: post.thumbId, post });
  } else if (post.thumbId) {
    console.warn(`missing attachment ${post.thumbId} for ${post.slug}`);
  }

  post.markdown = markdown;
  kept.add(`${post.slug}.md`);
  redirects[`/${post.slug}/`] = `/blog/${post.slug}/`;
}

const urlToPath = new Map();
await Promise.all(
  imageJobs.map(async (job) => {
    const local = await downloadImage(job.url, job.id);
    if (local) urlToPath.set(job.url, local);
    if (job.post && local) {
      job.post.heroImage = local;
      job.post.heroAlt = attachments.get(job.post.thumbId)?.alt || job.post.title;
    }
  }),
);

for (const post of posts) {
  const body = `${rewriteBodyImages(post.markdown, urlToPath)}\n`;
  const category = post.categories[0]?.name;
  const tags = post.categories.slice(1).map((item) => item.name);
  const lines = [
    '---',
    `title: ${yamlString(post.title)}`,
    `description: ${yamlString(descriptionFor(decodeBasic(post.description), body, post.title))}`,
    `publishDate: ${post.date}`,
  ];
  if (post.modified && post.modified !== post.date) lines.push(`updatedDate: ${post.modified}`);
  lines.push('draft: false');
  lines.push('author: Hawaiian Smiles Orthodontics');
  if (category) lines.push(`category: ${yamlString(category)}`);
  if (tags.length > 0) {
    lines.push('tags:');
    for (const tag of tags) lines.push(`  - ${yamlString(tag)}`);
  }
  if (post.heroImage) {
    lines.push(`heroImage: ${post.heroImage}`);
    lines.push(`heroImageAlt: ${yamlString(post.heroAlt || post.title)}`);
  }
  lines.push('---', '', body);
  fs.writeFileSync(path.join(blogDir, `${post.slug}.md`), lines.join('\n'));
}

for (const file of fs.readdirSync(blogDir)) {
  if (file.endsWith('.md') && !kept.has(file)) {
    fs.unlinkSync(path.join(blogDir, file));
    console.log(`removed placeholder ${file}`);
  }
}

fs.writeFileSync(`${redirectsPath}`, `${JSON.stringify(redirects, null, 2)}\n`);

console.log(`wrote ${posts.length} posts`);
console.log(`images ${urlToPath.size}`);
if (unmapped.size > 0) {
  console.log('unmapped internal links:');
  for (const item of [...unmapped].sort()) console.log(`  ${item}`);
}
