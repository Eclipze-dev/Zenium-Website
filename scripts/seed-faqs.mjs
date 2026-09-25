/**
 * Seed FAQs when the faqs table is empty.
 * Requires DB_* env vars. Prefer: public pages already fall back to
 * src/lib/seo/faqContent.ts without this script.
 *
 * Run: node scripts/seed-faqs.mjs
 * (FAQ rows must be inserted via admin UI or SQL if this script is not used.)
 */
console.log(
  "Use the CMS /admin/faqs UI to manage FAQs, or import from docs/FAQ.md.",
);
console.log(
  "Public pages fall back to src/lib/seo/faqContent.ts when the DB has no FAQs.",
);
