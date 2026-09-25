import type { MetadataRoute } from "next";
import { getPublishedPostsForPublic } from "@/lib/cms/content";
import { indexablePages } from "@/lib/seo/pages";
import { BLOG_INDEX_PATH } from "@/lib/seo/paths";
import { SITE_URL } from "@/lib/seo/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = indexablePages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified,
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.8,
  }));

  const posts = await getPublishedPostsForPublic();
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}${BLOG_INDEX_PATH}/${post.slug}`,
    lastModified: post.updated_at
      ? new Date(post.updated_at)
      : lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
