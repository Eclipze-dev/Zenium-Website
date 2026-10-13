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

/** Guide asks for 4–6 public questions on HES and MDMS. AMI keeps its full set. */
const RANGED_FAQ_KEYS = new Set<FaqPageKey>(["hes", "mdms"]);

function faqsInPublicRange(pageKey: FaqPageKey, items: FaqItem[]): FaqItem[] {
  if (!RANGED_FAQ_KEYS.has(pageKey)) return items;
  const capped = items.slice(0, 6);
  if (capped.length >= 4) return capped;
  const extras = faqContentByPage[pageKey].filter(
    (item) => !capped.some((row) => row.question === item.question),
  );
  return [...capped, ...extras].slice(0, 6);
}

/** Enabled FAQs from CMS, falling back to docs/FAQ.md content. */
export async function getFaqsForPage(pageKey: FaqPageKey): Promise<FaqItem[]> {
  if (!isDbConfigured()) {
    return faqsInPublicRange(pageKey, [...faqContentByPage[pageKey]]);
  }

  try {
    const rows = await listEnabledFaqs(pageKey);
    if (rows.length === 0) {
      return faqsInPublicRange(pageKey, [...faqContentByPage[pageKey]]);
    }
    return faqsInPublicRange(
      pageKey,
      rows.map((row) => ({
        question: row.question,
        answer: row.answer,
      })),
    );
  } catch {
    return faqsInPublicRange(pageKey, [...faqContentByPage[pageKey]]);
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
