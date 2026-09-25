# Zenium SEO & GEO Implementation Tasks (Cursor Development Guide)

## Project Context

-   Website: Zenium Website
-   Framework: Next.js App Router
-   Deployment: Vercel
-   Goal: Complete SEO and GEO requirements for search engines, AI
    search engines, and technical SEO compliance.

Reference requirements include robots.txt, sitemap generation, canonical
handling, performance, metadata, structured data, CMS readiness, AI
crawler support, analytics, and final validation.
fileciteturn0file0L8-L18

------------------------------------------------------------------------

# Implementation Instructions

## 1. robots.txt

### Task

Create or update:

    /app/robots.ts

or equivalent root robots implementation.

Requirements:

-   Allow all crawlers.
-   Add sitemap reference:

```{=html}
<!-- -->
```
    https://www.zenium.ai/sitemap.xml

Verification: - Open `/robots.txt` - Confirm HTTP 200 - Confirm plain
text response - Confirm no 404

------------------------------------------------------------------------

# 2. sitemap.xml

## Task

Implement automatic sitemap generation using:

-   Next.js `app/sitemap.ts`

or

-   next-sitemap package

The sitemap must rebuild automatically during deployment.

Include:

    /
     /solutions/hes
     /solutions/mdm
     /solutions/ai-analytics
     /serve/utilities
     /serve/cities
     /serve/commercial
     /serve/microgrid
     /serve/prosumers
     /partners
     /company/about
     /company/careers
     /company/news
     /contact

Requirements:

-   Include lastModified / lastmod.
-   Ensure every public page returns HTTP 200.

------------------------------------------------------------------------

# 3. Canonical Domain

## Task

Confirm production domain.

Implement:

-   Canonical URL metadata on every page.
-   Redirect Vercel domain to production domain.
-   Redirect non-canonical www/non-www version.

Example:

    <link rel="canonical" href="https://www.zenium.ai/page" />

------------------------------------------------------------------------

# 4. Security Headers

Update:

    next.config.js

Add:

    Strict-Transport-Security
    X-Content-Type-Options

Verify:

-   HTTPS enforced.
-   Headers visible in browser/network response.

------------------------------------------------------------------------

# 5. Performance Optimisation

Target metrics:

    LCP < 2.5s
    CLS < 0.1
    INP < 200ms
    Mobile PageSpeed score 90+

Tasks:

## Images

-   Add lazy loading below fold images.
-   Convert images to WebP/AVIF.
-   Use Next.js Image component.

Example:

``` tsx
<Image
 src="/image.webp"
 loading="lazy"
/>
```

## JavaScript

-   Remove unused dependencies.
-   Reduce client-side JavaScript.
-   Convert unnecessary client components to server components.

Run:

-   PageSpeed Insights
-   Mobile and Desktop tests

Pages:

    /
     /solutions/hes
     /solutions/mdm

------------------------------------------------------------------------

# 6. Mobile SEO

Run:

Google Mobile Friendly Test

Check every page template.

Fix:

-   Overflow issues
-   Touch target issues
-   Responsive layout problems

------------------------------------------------------------------------

# 7. Placeholder Pages

Review:

    Partners
     ├── Meter Manufacturers
     ├── AMI Service Providers
     └── System Integrators

Action:

Either:

1.  Build complete pages

OR

2.  Add:

``` html
<meta name="robots" content="noindex">
```

until content exists.

------------------------------------------------------------------------

# 8. Page Titles

Create unique titles.

Rules:

-   50-60 characters.
-   No duplicates.

Examples:

Homepage:

    Zenium | Energy Intelligence Platform for Smart Utilities

HES:

    Head-End System (HES) for Smart Meters | Zenium

Apply:

    <Page Keyword> | Zenium

------------------------------------------------------------------------

# 9. Meta Descriptions

Requirements:

-   Unique per page.
-   140-160 characters.
-   Remove repeated generic description.

Every page requires:

``` tsx
export const metadata = {
 description:"Unique page description"
}
```

------------------------------------------------------------------------

# 10. Heading Structure

Every page:

Rules:

-   Exactly one H1.
-   H2 follows H1.
-   H3 only inside relevant H2 sections.
-   No skipped heading levels.

Verify using browser DOM inspection.

------------------------------------------------------------------------

# 11. Image Alt Text

Every image requires meaningful alt text.

Required:

-   Logo
-   Hero images
-   Diagrams
-   Customer logos

Avoid:

    alt=""
    alt="image"
    alt="logo"

------------------------------------------------------------------------

# 12. Internal Linking

Solution pages must contain at least two contextual links.

Examples:

    HES → /solutions/hes
    MDM → /solutions/mdm
    AI Analytics → /solutions/ai-analytics

Links must exist inside page content, not only navigation.

------------------------------------------------------------------------

# 13. Schema.org JSON-LD

Implement structured data.

Required schemas:

## Homepage

Organization schema.

## Product pages

Add:

-   SoftwareApplication
-   Product schema

Pages:

    /solutions/hes
    /solutions/mdm
    /solutions/ai-analytics

## All nested pages

Add:

BreadcrumbList.

## Content pages

Add:

-   Article schema
-   FAQPage schema where FAQs exist

Validate:

https://search.google.com/test/rich-results

Expected:

Zero errors.

------------------------------------------------------------------------

# 14. CMS / Blog Setup

Implement either:

-   Sanity
-   Contentful
-   MDX blog system

Requirement:

Marketing team should publish articles without developer deployment.

Test:

Create and publish one article end-to-end.

------------------------------------------------------------------------

# 15. GEO Definition Content

Add plain-language definition sentences near the top of:

    /solutions/hes
    /solutions/mdm
    /solutions/ai-analytics
    /serve/*

Purpose:

Improve AI search understanding.

Example:

"A Head-End System (HES) is software that connects and manages
communication between smart meters and utility back-office systems."

------------------------------------------------------------------------

# 16. FAQ Sections

Create FAQ blocks with:

4-6 questions each.

Pages:

    /solutions/hes
    /solutions/mdm
    /solutions/ai-analytics
    /serve/utilities
    /serve/cities
    /serve/commercial
    /serve/microgrid
    /serve/prosumers

Each FAQ requires:

-   Visible FAQ content
-   FAQPage JSON-LD schema

------------------------------------------------------------------------

# 17. Zenium Statistics

Create:

    Zenium by the Numbers

Include existing metrics:

-   MDM meter points
-   Meter onboarding numbers

Each statistic requires:

-   Number
-   Description
-   Date/context

------------------------------------------------------------------------

# 18. Content Metadata

For:

-   Whitepapers
-   Case studies
-   Insight articles

Add:

    Author
    Author role
    Publish date

------------------------------------------------------------------------

# 19. llms.txt

Create:

    /llms.txt

Format:

Markdown.

Include:

-   Zenium overview
-   HES
-   MDM
-   AI Analytics
-   Important page links

Purpose:

Improve AI crawler understanding.

------------------------------------------------------------------------

# 20. Analytics Setup

Install:

-   Google Tag Manager
-   Google Analytics 4 through GTM

Configure:

-   Google Search Console
-   Sitemap submission
-   Bing Webmaster Tools
-   Sitemap submission

Provide marketing team admin access.

------------------------------------------------------------------------

# Cursor Execution Checklist

Before completing:

-   Inspect existing Next.js structure.
-   Do not break existing UI.
-   Keep components reusable.
-   Use server components where possible.
-   Keep SEO metadata centralized.
-   Validate every change.

------------------------------------------------------------------------

# Final QA Checklist

    [ ] robots.txt working
    [ ] sitemap.xml generated
    [ ] All pages HTTP 200
    [ ] Canonical URLs implemented
    [ ] HTTPS headers added
    [ ] PageSpeed mobile 90+
    [ ] Mobile friendly test passed
    [ ] Unique titles
    [ ] Unique descriptions
    [ ] One H1 per page
    [ ] All images have alt text
    [ ] Internal links added
    [ ] Schema validation passed
    [ ] FAQ schema passed
    [ ] llms.txt created
    [ ] GTM installed
    [ ] GA4 installed
    [ ] Search Console verified
    [ ] Bing Webmaster verified
