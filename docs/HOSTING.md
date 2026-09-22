# Hosting (cPanel)

Everything runs on your own infrastructure. The only external service is GitHub
(source + CI). Form delivery uses PHP on the same cPanel host — see
`docs/FORMS-AND-EMAIL.md`.

## URL shape — decided once, do not change casually

`astro.config.mjs` pins these together:

```js
trailingSlash: 'always',
build: { format: 'directory' },
```

That produces `/about/index.html`, which Apache serves at `/about/` via
`DirectoryIndex` with no redirect. Changing one without the other breaks URLs,
generates redirect chains, and splits your log analytics between two paths for
the same page.

**The 404 is the exception:** Astro emits it flat as `dist/404.html`, not
`dist/404/index.html`. `.htaccess` points `ErrorDocument` at `/404.html`.

## First-time server setup

Two cPanel hosts, two GitHub Environments — never one shared FTP account.

**Staging** is the hostname stored in that environment's `SITE_URL`. Every push
to `main` deploys here. **Production** is `https://hawaiiansmilesortho.com`. It
deploys only when you run the workflow by hand.

For each host:

1. Create the domain or subdomain in cPanel; note the document root.
2. Issue the SSL certificate (AutoSSL) **before** the first deploy — `.htaccess`
   force-redirects to HTTPS and will loop against a missing certificate.
3. Create an FTP account **scoped to that document root**. Staging and production
   must not share an account. The account home is the upload target (`./`).

### GitHub Environments

Create Environments named `staging` and `production` under
Settings → Environments. Put secrets **on the environment**, not at repository
level, so a job cannot pick up the other host's FTP account.

| Secret           | `staging`                | `production`                                |
| ---------------- | ------------------------ | ------------------------------------------- |
| `SITE_URL`       | Staging origin, no slash | `https://hawaiiansmilesortho.com`           |
| `ALLOW_INDEXING` | `false`                  | `true` when the live site should be indexed |
| `FTP_HOST`       | cPanel FTP hostname      | cPanel FTP hostname                         |
| `FTP_USER`       | Scoped FTP account       | Scoped FTP account                          |
| `FTP_PW`         | Its password             | Its password                                |

`SITE_URL` and `ALLOW_INDEXING` may be environment variables instead of secrets;
the workflow reads secrets first, then variables. FTP values should stay secrets.

`SITE_URL` is the build-time origin: canonicals, Open Graph, schema, and the
sitemap all follow it. `ALLOW_INDEXING=false` forces `noindex`, emits a
`Disallow: /` robots.txt, and skips analytics tags. `robots.txt` is generated
at build (`src/pages/robots.txt.ts`) — there is no static `public/robots.txt`.

On `production`, enable required reviewers so a promote cannot run without
approval.

## Deploying

`.github/workflows/deploy.yml`:

- **Push to `main`** → environment `staging` → FTPS upload of `dist/`.
- **Actions → Deploy → Run workflow** → choose `staging` or `production`. The
  dropdown defaults to `staging`.

Each run: install → `verify` → PHPMailer → `build` (with that environment's
`SITE_URL` / `ALLOW_INDEXING`) → FTP upload of `dist/`. A type error or malformed
frontmatter fails in CI instead of shipping.

### Promote to live (after staging looks right)

1. Open the Deploy workflow → Run workflow → target `production`.
2. Approve the environment if reviewers are required.
3. Confirm the live hostname, HTTPS, forms, and that `robots.txt` allows indexing.

Manual fallback:

```bash
SITE_URL=https://staging.example.com ALLOW_INDEXING=false npm run build
```

Then upload the contents of `dist/`. Use the real staging origin in place of the
example host.

## What `.htaccess` does

Lives at `public/.htaccess`, so it ends up at the document root:

- Forces HTTPS and non-www (swap two lines to prefer www)
- Adds trailing slashes in one hop so `mod_dir` cannot chain a second redirect
- `ErrorDocument 404 /404.html`
- gzip and brotli for text assets
- Immutable, one-year caching for fingerprinted assets; `must-revalidate` for HTML
  — without that split, a deploy is invisible until caches expire
- `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, HSTS

## Analytics from server logs

Log analytics is the baseline measurement layer. It costs the page nothing: no
JavaScript, no consent prompt, no ad-blocker loss.

Raw logs live under `~/logs/` (cPanel → Raw Access). Enable log archiving so they
survive the monthly rotation.

```bash
goaccess ~/logs/example.com-ssl_log \
  --log-format=COMBINED \
  --ignore-panel=REFERRING_SITES \
  --exclude-ip=YOUR.OFFICE.IP \
  -o ~/public_html/_reports/index.html
```

Cron it monthly, and protect `_reports/` with cPanel's Directory Privacy.

Two things the build does to keep reports honest, both worth preserving:

- **Stable URLs.** Changing `trailingSlash` splits one page across two log paths.
- **Clean 404s and redirects.** A redirect chain shows up as two hits.

Filter out asset paths (`/_astro/`) and known bots in the GoAccess config, and set
a log retention period.

**Limits worth naming before a client asks:** logs answer _how much traffic and to
which pages_, not _what people did on the page_. No scroll depth, no in-page events,
no cross-device attribution. When a client runs paid ads and needs conversion
attribution, add GA4/Meta/Bing tags in `src/config/site.ts` — that is what they are
for.
