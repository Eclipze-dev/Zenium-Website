# Zenium SEO & GEO audit

Date: 17 September 2026  
Canonical domain: https://www.zenium.ai  
Build: `npm run build` passed after each implementation phase.

CMS/blog publishing was out of scope. No Sanity, Contentful, MDX workflow, or admin panel was added.

---

## SEO

### robots status — done

- [`src/app/robots.ts`](../src/app/robots.ts) serves `/robots.txt`
- HTTP 200, `content-type: text/plain`
- Allows all crawlers (`User-Agent: *`, `Allow: /`)
- Disallows `/api/`
- Sitemap: `https://www.zenium.ai/sitemap.xml`

### sitemap status — done

- [`src/app/sitemap.ts`](../src/app/sitemap.ts) serves `/sitemap.xml`
- HTTP 200, includes `lastmod`
- Indexable URLs included: `/`, solutions (HES, MDM, AI Analytics), all `/serve/*` audiences, partners, about, careers, news, news article, contact, privacy, terms
- Excluded: `/resources/*`, `/company/leadership`, `/home`, `/serve` redirect

### canonical status — done

- `metadataBase` = `https://www.zenium.ai` in [`src/app/layout.tsx`](../src/app/layout.tsx)
- Every page sets `alternates.canonical` via [`src/lib/seo/buildMetadata.ts`](../src/lib/seo/buildMetadata.ts)
- Apex `zenium.ai` → `www.zenium.ai` (301) in [`src/middleware.ts`](../src/middleware.ts); localhost is not redirected
- `/home` → `/` is a permanent redirect in [`next.config.mjs`](../next.config.mjs)
- Stub pages keep a canonical and `noindex, nofollow`

### metadata status — done

Unique titles and descriptions (from existing page copy) in [`src/lib/seo/pages.ts`](../src/lib/seo/pages.ts). Open Graph and Twitter tags are generated with the same copy.

Examples:

- Home: `Zenium | Energy Intelligence Platform for Smart Utilities`
- HES: `Head-End System (HES) for Smart Meters | Zenium`
- Serve utilities: `Intelligence for Electricity, Gas and Water | Zenium`
- Whitepapers stub: `noindex, nofollow`

### schema status — done

JSON-LD via [`src/components/seo/JsonLd.tsx`](../src/components/seo/JsonLd.tsx) and [`src/lib/seo/jsonld.ts`](../src/lib/seo/jsonld.ts):

| Schema | Coverage |
| --- | --- |
| Organization | All pages (root layout). Legal name Zenix Data Private Limited, brand Zenium |
| SoftwareApplication + Product | `/solutions/hes`, `/solutions/mdm`, `/solutions/ai-analytics` |
| BreadcrumbList | Nested routes (solutions, serve, company, legal) |
| Article | Existing news article; author/publisher is Organization (Zenium). No invented person, role, or date |
| FAQPage | About + HES, MDM, AI Analytics + all five serve audience pages |

No prices, ratings, or unverified claims in schema.

### security headers — done

- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `X-Content-Type-Options: nosniff`

### headings, alts, internal links — done

- Homepage hero is a single `<h1>` (was a styled `<p>`)
- Serve pages: shared intro is visual-only; audience title is the unique `<h1>`
- Image alts filled for hero, news cards, logos, diagrams; remaining `<img>` tags converted to `OptimizedImage`
- In-body links: HES → MDM + Analytics; MDM → HES + Analytics; Analytics → HES + MDM
- Homepage metrics section enabled as **Zenium by the Numbers** using existing `homeData` figures only

---

## GEO

### llms.txt status — done

- [`public/llms.txt`](../public/llms.txt)
- HTTP 200
- Markdown overview of Zenium, HES, MDM, Analytics & AI, and public URLs, taken from existing site copy

### AI-readable content — done

- One H1 per page
- Product/audience definition already in the first-screen hero/overview copy (not duplicated with new claims)
- H2 section structure unchanged
- FAQ accordion at the bottom of required solution and serve pages, answers copied from existing capabilities/overviews
- Main copy remains server-rendered

### structured data coverage — done

See schema table above. FAQ JSON-LD matches visible FAQ text.

---

## Performance

### image optimisation — done

- `next/image` via `OptimizedImage`; AVIF/WebP already enabled in `next.config.mjs`
- Below-fold images lazy by default; LCP heroes use `priority` (home cover, about intro, serve hero media)
- Converted heavy above-fold PNGs to WebP:
  - `about-1.png` 1.6MB → `about-1.webp` 72KB
  - `about-2.png` 742KB → `about-2.webp` 389KB
  - `zenium-hes.png` 618KB → `zenium-hes.webp` 241KB
  - `zenium-mdm.png` 571KB → `zenium-mdm.webp` 226KB
- Remaining news/serve PNGs still go through Next image optimization at request time (not bulk-converted)

### bundle improvements

- No new client wrappers for metadata/JSON-LD
- FAQ accordion is the only new client island, reused from About
- `@supabase/supabase-js` is unused in `src/` but was **not removed** (constraint: do not drop dependencies unless unused and separately build-tested for removal)

First Load JS shared by all remains ~87.4 kB after these changes.

### Core Web Vitals recommendations

Run PageSpeed Insights for `/`, `/solutions/hes`, `/solutions/mdm`.

Likely follow-ups (not done here to avoid redesign):

- Compress remaining large `/public/news/*.png` sources (several are 1.6–2.4MB)
- Confirm LCP element is the WebP/AVIF derivative, not a raw PNG
- Keep client islands limited (header, consent, forms, FAQ, typewriter, serve tabs)

---

## Analytics & CMS

| Item | Status |
| --- | --- |
| GTM | Code ready: `NEXT_PUBLIC_GTM_ID` in `.env.example`, loaded only after analytics consent |
| GA4 | Still supported as fallback via `NEXT_PUBLIC_GA_MEASUREMENT_ID` if GTM is unset |
| Search Console | SEO team: verify property and submit sitemap |
| Bing Webmaster | SEO team: verify property and submit sitemap |
| Marketing admin access | SEO team |
| CMS / blog system | **Not implemented** (explicitly out of scope) |
| Article author / date | **Not invented**; Article schema uses Organization |

---

## Guide checklist

- [x] robots.txt working
- [x] sitemap.xml generated
- [x] All public indexable pages HTTP 200
- [x] Canonical URLs implemented
- [x] HTTPS headers added
- [ ] PageSpeed mobile 90+ (PageSpeed Insights)
- [ ] Mobile friendly test passed
- [x] Unique titles
- [x] Unique descriptions
- [x] One H1 per page
- [x] All images have alt text
- [x] Internal links added
- [ ] Schema validation passed (Rich Results Test)
- [ ] FAQ schema passed (Rich Results Test)
- [x] llms.txt created
- [x] GTM installed (env-gated, consent-aware; container ID not configured)
- [x] GA4 installed (existing consent-aware path kept as fallback)
- [ ] Search Console verified
- [ ] Bing Webmaster verified
- [x] Placeholder resource/leadership pages `noindex`
- [x] Zenium by the Numbers (existing metrics, no invented dates)
- [ ] CMS/blog (out of scope)

---

## Remaining SEO-platform checks

1. **PageSpeed Insights** — mobile and desktop for `/`, `/solutions/hes`, `/solutions/mdm` on https://www.zenium.ai
2. **Google Search Console** — verify property, submit `https://www.zenium.ai/sitemap.xml`
3. **Bing Webmaster Tools** — verify property, submit the same sitemap
4. **Rich Results Test** — https://search.google.com/test/rich-results for home (Organization), HES/MDM/AI (SoftwareApplication/Product + FAQ), About (FAQ), news article (Article)
5. Set `NEXT_PUBLIC_GTM_ID` if GA4 should run through GTM; grant marketing admin access
6. Confirm DNS: `zenium.ai` → `www.zenium.ai` and TLS
