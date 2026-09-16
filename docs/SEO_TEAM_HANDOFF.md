# Zenium website — SEO & GEO briefing

**Site:** https://www.zenium.ai  
**Date:** 17 September 2026

This briefing summarises the technical SEO and GEO (AI-search) updates now on the Zenium website. Layout and product copy were not redesigned. Titles, descriptions, FAQs, and structured data use existing approved copy only.

Please send this document to the SEO team as the working reference.

---

## 1. How to verify the technical setup

Open these URLs:

| Check | URL | Expected |
| --- | --- | --- |
| robots.txt | https://www.zenium.ai/robots.txt | HTTP 200, plain text, `Allow: /`, sitemap listed |
| Sitemap | https://www.zenium.ai/sitemap.xml | HTTP 200, all indexable pages, `lastmod` present |
| AI crawler file | https://www.zenium.ai/llms.txt | HTTP 200, Markdown overview of Zenium, HES, MDM, Analytics & AI |

Canonical domain is **https://www.zenium.ai**. `https://zenium.ai` should 301 to www.

Security headers on HTML responses:

- `Strict-Transport-Security`
- `X-Content-Type-Options: nosniff`

---

## 2. Indexing

**Index these pages** (included in the sitemap):

- https://www.zenium.ai/
- https://www.zenium.ai/solutions/hes
- https://www.zenium.ai/solutions/mdm
- https://www.zenium.ai/solutions/ai-analytics
- https://www.zenium.ai/serve/utilities
- https://www.zenium.ai/serve/cities
- https://www.zenium.ai/serve/commercial
- https://www.zenium.ai/serve/microgrid
- https://www.zenium.ai/serve/prosumers
- https://www.zenium.ai/partners
- https://www.zenium.ai/company/about
- https://www.zenium.ai/company/careers
- https://www.zenium.ai/company/news
- https://www.zenium.ai/company/news/turning-utility-data-into-intelligent-action
- https://www.zenium.ai/contact
- https://www.zenium.ai/privacy
- https://www.zenium.ai/terms

**Do not index** (robots meta `noindex, nofollow`; not in the sitemap):

- https://www.zenium.ai/company/leadership
- https://www.zenium.ai/resources/case-studies
- https://www.zenium.ai/resources/brochures
- https://www.zenium.ai/resources/whitepapers
- https://www.zenium.ai/resources/blogs-insights
- https://www.zenium.ai/resources/webinars

`/home` permanently redirects to `/`. `/serve` redirects to `/serve/utilities`.

---

## 3. Titles and meta descriptions

Every public page has a unique title and description, plus matching Open Graph / Twitter tags and a self-referencing canonical.

| Page | Title | Meta description |
| --- | --- | --- |
| Home | Zenium \| Energy Intelligence Platform for Smart Utilities | Zenium is a utility intelligence company helping utilities turn metering and operational data into actionable intelligence, built on a trusted HES and MDM foundation. |
| HES | Head-End System (HES) for Smart Meters \| Zenium | Zenium Head-End System connects smart meters and communication networks to utility operations — automating data acquisition and enabling secure remote operations. |
| MDM | Meter Data Management (MDM) Platform \| Zenium | Zenium Meter Data Management System transforms meter data into trusted information for billing, prepaid operations, consumer services and downstream utility use. |
| Analytics & AI | Analytics & AI for Utility Operations \| Zenium | Zenium Analytics & AI turns meter, consumer, asset and network data into intelligence that helps utilities identify losses, protect revenue and make operational decisions. |
| Utilities | Intelligence for Electricity, Gas and Water \| Zenium | Zenium helps electricity, gas and water utilities connect infrastructure, manage trusted data and turn operational signals into actionable intelligence with HES, MDM and Analytics & AI. |
| Smart cities | Intelligence for Connected Urban Infrastructure \| Zenium | Zenium helps cities and infrastructure operators connect distributed assets, manage operational data and build greater visibility across connected urban environments. |
| C&I | C&I Energy Data and Business Intelligence \| Zenium | Zenium helps commercial and industrial organisations gain greater visibility into energy consumption across sites, meters and operations. |
| Microgrids | Intelligence for Distributed Energy Systems \| Zenium | Zenium helps bring distributed energy data together to create greater visibility into generation, storage, consumption and system performance. |
| Prosumers | Intelligence on Both Sides of the Meter \| Zenium | Zenium helps organisations bring consumption and generation data together to create a clearer view of their changing energy position. |
| Partners | Partners for AMI and Utility Solutions \| Zenium | Zenium works with AMISPs, meter manufacturers and system integrators to connect smart-meter infrastructure, manage trusted data and support evolution towards AMI 2.0. |
| About | About Zenium \| Utility Intelligence Company | Zenium is a utility intelligence company helping utilities and the wider energy ecosystem turn metering and operational data into actionable intelligence. |
| Careers | Careers in Energy Intelligence \| Zenium | Zenium combines deep utility expertise with smart-metering technology, analytics and AI. We look for people who want to help utilities turn data into intelligence. |
| News | News and Insights on Utility Intelligence \| Zenium | Perspectives, developments and ideas shaping the future of intelligent utility management from Zenium. |
| Article | Turning Utility Data Into Intelligent Action \| Zenium | Utilities generate enormous volumes of data every day. The real opportunity is turning that information into insight — and insight into action. |
| Contact | Contact Zenium \| Utility Intelligence Enquiries | Whether you are a utility, AMISP, meter manufacturer, technology partner or another organisation in the energy ecosystem, talk to Zenium about your requirements. |
| Privacy | Privacy Policy \| Zenium | This Privacy Policy explains how Zenix Data Private Limited, operating as Zenium, collects and uses information when you visit www.zenium.ai or contact us through the website. |
| Terms | Terms of Use \| Zenium | Terms of Use for www.zenium.ai, operated by Zenix Data Private Limited under the brand name Zenium. |

---

## 4. On-page changes (visible to crawlers and users)

- **One H1 per page.** Homepage hero is now a real H1. Each Who We Serve URL has its own audience H1.
- **Zenium by the Numbers** on the homepage, using existing published metrics only (no new dates or claims).
- **FAQs** (4–6 items, existing product copy) on:
  - About (existing FAQ, now with schema)
  - HES, MDM, Analytics & AI
  - Utilities, Smart cities, C&I, Microgrids, Prosumers
- **In-content links** (not only navigation):
  - HES → MDM and Analytics & AI
  - MDM → HES and Analytics & AI
  - Analytics & AI → HES and MDM
- **Image alt text** on logos, heroes, diagrams, and news cards.

---

## 5. Structured data (JSON-LD)

Validate with [Google Rich Results Test](https://search.google.com/test/rich-results).

| Schema | Where |
| --- | --- |
| Organization (Zenium / Zenix Data Private Limited) | Sitewide |
| SoftwareApplication + Product | HES, MDM, Analytics & AI |
| BreadcrumbList | Nested pages (solutions, who we serve, company, legal) |
| FAQPage | About, HES, MDM, Analytics & AI, all five Who We Serve pages |
| Article | Turning Utility Data Into Intelligent Action (publisher/author: Zenium organisation — no invented person or date) |

No review stars, prices, or unverified claims in schema.

---

## 6. GEO / AI search

- `/llms.txt` summarises Zenium, HES, MDM, Analytics & AI, and key URLs.
- Definition-style product copy sits in the first screen of each solution and Who We Serve page.
- Content is server-rendered HTML with a clear H1 → H2 structure.

---

## 7. Analytics

- Google Analytics 4 can load **after cookie consent** when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set.
- Google Tag Manager can load **after cookie consent** when `NEXT_PUBLIC_GTM_ID` is set. If GTM is set, use that container for GA4 rather than loading both.

SEO team: share the GTM container ID if tracking should run through GTM.

---

## 8. SEO team checklist

1. Confirm robots.txt, sitemap.xml, and llms.txt (section 1).
2. [Google Search Console](https://search.google.com/search-console) — verify `https://www.zenium.ai` and submit `https://www.zenium.ai/sitemap.xml`.
3. [Bing Webmaster Tools](https://www.bing.com/webmasters) — verify the same property and submit the same sitemap.
4. [PageSpeed Insights](https://pagespeed.web.dev/) — mobile and desktop for:
   - https://www.zenium.ai/
   - https://www.zenium.ai/solutions/hes
   - https://www.zenium.ai/solutions/mdm
5. [Rich Results Test](https://search.google.com/test/rich-results) — home, HES, MDM, Analytics & AI, About, and the news article.
6. Confirm `noindex` on the placeholder URLs in section 2.
7. Provide GTM ID if required (section 7).

---

## 9. Not in this release

- CMS or blog publishing (marketing still cannot publish articles without engineering).
- New product claims, authors, or dates that were not already on the site.
- Partner sub-pages (Meter Manufacturers / AMISPs / System Integrators remain sections on `/partners`, not separate URLs).
