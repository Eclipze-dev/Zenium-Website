import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { getPublishedPostsForPublic } from "@/lib/cms/content";
import { articleSchema, breadcrumbTrails } from "@/lib/seo/jsonld";
import { BLOG_INDEX_PATH } from "@/lib/seo/paths";
import { DEFAULT_OG_IMAGE } from "@/lib/seo/site";
import BlogArticle from "../components/BlogArticle";
import LatestInsights from "../components/LatestInsights";
import { blogTitle, findBlogPost, mergeBlogPosts } from "../components/blogData";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cmsPosts = await getPublishedPostsForPublic();
  const post = findBlogPost(params.slug, cmsPosts);
  if (!post) {
    return { robots: { index: false, follow: false } };
  }

  const metaTitle = post.seoTable?.find((row) => row.parameter === "Meta Title");
  const metaDescription = post.seoTable?.find(
    (row) => row.parameter === "Meta Description",
  );
  const keywords = post.seoTable
    ?.find((row) => row.parameter === "Target Keywords")
    ?.specification.split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);

  return {
    ...buildPageMetadata({
      path: `${BLOG_INDEX_PATH}/${post.slug}`,
      title: metaTitle?.specification || `${blogTitle(post)} | Zenium`,
      description: metaDescription?.specification || post.excerpt,
    }),
    keywords,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const cmsPosts = await getPublishedPostsForPublic();
  const post = findBlogPost(params.slug, cmsPosts);
  if (!post) notFound();

  const path = `${BLOG_INDEX_PATH}/${post.slug}`;
  const title = blogTitle(post);
  const related = mergeBlogPosts(cmsPosts)
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <div id="top" className="min-h-screen bg-white">
      <SiteHeader />
      <PageJsonLd
        trail={[...breadcrumbTrails.blogs, { name: title, path }]}
        extra={[
          articleSchema({
            headline: title,
            description: post.excerpt || title,
            path,
            image: post.image || DEFAULT_OG_IMAGE,
          }),
        ]}
      />
      <main className="overflow-x-clip">
        <BlogArticle post={post} />
        <LatestInsights posts={related} />
      </main>
      <Footer />
    </div>
  );
}
