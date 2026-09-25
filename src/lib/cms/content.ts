import type { FaqItem } from "@/lib/seo/jsonld";
import { faqContentByPage } from "@/lib/seo/faqContent";
import {
  getPublishedPageBySlug,
  listEnabledFaqs,
  listEnabledGuideEntries,
  listPublishedBlogPosts,
  getPublishedBlogPostBySlug,
} from "@/lib/cms/queries";
import type { FaqPageKey, CmsBlogPost, CmsSmartMeterGuideEntry } from "@/types/cms";
import type { PageSeo } from "@/lib/seo/pages";

function isDbConfigured() {
  return Boolean(process.env.DB_HOST && process.env.DB_USER);
}

/** Enabled FAQs from CMS, falling back to docs/FAQ.md content. */
export async function getFaqsForPage(pageKey: FaqPageKey): Promise<FaqItem[]> {
  if (!isDbConfigured()) {
    return [...faqContentByPage[pageKey]];
  }

  try {
    const rows = await listEnabledFaqs(pageKey);
    if (rows.length === 0) {
      return [...faqContentByPage[pageKey]];
    }
    return rows.map((row) => ({
      question: row.question,
      answer: row.answer,
    }));
  } catch {
    return [...faqContentByPage[pageKey]];
  }
}

export async function getGuideEntriesForPublic(): Promise<
  CmsSmartMeterGuideEntry[]
> {
  if (!isDbConfigured()) return [];
  try {
    return await listEnabledGuideEntries();
  } catch {
    return [];
  }
}

export async function getPublishedPostsForPublic(): Promise<CmsBlogPost[]> {
  if (!isDbConfigured()) return [];
  try {
    return await listPublishedBlogPosts();
  } catch {
    return [];
  }
}

export async function getPublishedPostBySlugForPublic(
  slug: string,
): Promise<CmsBlogPost | null> {
  if (!isDbConfigured()) return null;
  try {
    return await getPublishedBlogPostBySlug(slug);
  } catch {
    return null;
  }
}

/** Prefer CMS SEO when a published page exists for the slug. */
export async function resolvePageSeo(
  fallback: PageSeo,
  slug: string,
): Promise<PageSeo> {
  if (!isDbConfigured()) return fallback;

  try {
    const page = await getPublishedPageBySlug(slug);
    if (!page) return fallback;
    return {
      path: fallback.path,
      title: page.seo_title?.trim() || page.title || fallback.title,
      description:
        page.seo_description?.trim() || fallback.description,
      index: fallback.index,
    };
  } catch {
    return fallback;
  }
}
