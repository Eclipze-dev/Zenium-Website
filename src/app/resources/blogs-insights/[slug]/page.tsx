import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import OptimizedImage from "@/components/OptimizedImage";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { getPublishedPostBySlugForPublic } from "@/lib/cms/content";
import { articleSchema, breadcrumbTrails } from "@/lib/seo/jsonld";
import { BLOG_INDEX_PATH } from "@/lib/seo/paths";
import { DEFAULT_OG_IMAGE } from "@/lib/seo/site";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPublishedPostBySlugForPublic(params.slug);
  if (!post) {
    return { robots: { index: false, follow: false } };
  }

  return buildPageMetadata({
    path: `${BLOG_INDEX_PATH}/${post.slug}`,
    title: post.meta_title?.trim() || `${post.title} | Zenium`,
    description:
      post.meta_description?.trim() ||
      post.excerpt?.trim() ||
      "Zenium blog and insights.",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPublishedPostBySlugForPublic(params.slug);
  if (!post) notFound();

  const path = `${BLOG_INDEX_PATH}/${post.slug}`;
  const trail = [
    ...breadcrumbTrails.blogs,
    { name: post.title, path },
  ];

  return (
    <div className="bg-bg1 min-h-screen">
      <SiteHeader />
      <PageJsonLd
        trail={trail}
        extra={[
          articleSchema({
            headline: post.title,
            description:
              post.meta_description || post.excerpt || post.title,
            path,
            image: post.featured_image_url || DEFAULT_OG_IMAGE,
          }),
        ]}
      />
      <main className="overflow-x-clip">
        <article className="container mx-auto max-w-3xl py-[80px] max-lg:py-[48px] max-md:pt-24">
          <p className="text-sm text-muted">
            {post.category || "Insight"}
            {post.published_at
              ? ` · ${new Date(post.published_at).toLocaleDateString()}`
              : ""}
          </p>
          <h1 className="text-h1 mt-3">{post.title}</h1>
          {post.excerpt ? (
            <p className="mt-4 text-p1 text-muted">{post.excerpt}</p>
          ) : null}
          {post.featured_image_url ? (
            <div className="relative mt-8 aspect-video overflow-hidden rounded-[16px]">
              <OptimizedImage
                src={post.featured_image_url}
                alt={post.alt_text || post.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          ) : null}
          {post.content ? (
            <div className="prose prose-neutral mt-10 max-w-none whitespace-pre-wrap text-p1 text-zen-text">
              {post.content}
            </div>
          ) : null}
        </article>
        <Footer />
      </main>
    </div>
  );
}
