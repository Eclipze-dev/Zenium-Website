import type { MetadataRoute } from "next";
import { getPublishedPostsForPublic } from "@/lib/cms/content";
import { indexablePages } from "@/lib/seo/pages";
import { BLOG_INDEX_PATH } from "@/lib/seo/paths";
import { SITE_CONTENT_UPDATED, SITE_URL } from "@/lib/seo/site";

function asDate(value: Date | string | null | undefined): Date | undefined {
  if (!value) return undefined;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticLastModified = new Date(SITE_CONTENT_UPDATED);

  const staticEntries: MetadataRoute.Sitemap = indexablePages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: staticLastModified,
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.8,
  }));

  const posts = await getPublishedPostsForPublic();
  const blogEntries: MetadataRoute.Sitemap = posts.flatMap((post) => {
    const lastModified = asDate(
      post.updated_at || post.published_at || post.created_at,
    );
    if (!lastModified) return [];
    return [
      {
        url: `${SITE_URL}${BLOG_INDEX_PATH}/${post.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      },
    ];
  });

  return [...staticEntries, ...blogEntries];
}
