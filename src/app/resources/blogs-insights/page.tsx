import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import {getPublishedPostsForPublic, resolvePageSeo} from "@/lib/cms/content";
import { breadcrumbTrails } from "@/lib/seo/jsonld";
import { pageSeo, slugFromPath } from "@/lib/seo/pages";
import { BLOG_INDEX_PATH } from "@/lib/seo/paths";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await resolvePageSeo(
    pageSeo.resourcesBlogs,
    slugFromPath(pageSeo.resourcesBlogs.path),
  );
  return buildPageMetadata(seo);
}

export default async function BlogsInsightsPage() {
  const posts = await getPublishedPostsForPublic();

  return (
    <div className="bg-bg1 min-h-screen">
      <SiteHeader />
      <PageJsonLd trail={breadcrumbTrails.blogs} />
      <main className="overflow-x-clip">
        <section className="pb-[80px] pt-[50px] max-lg:pb-[48px] max-lg:pt-[40px] max-md:pt-24">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-h1 text-zen-text">Blogs & Insights</h1>
            <p className="mt-4 text-p1 text-muted">
              Perspectives on Advanced Metering Infrastructure (AMI), Head-End
              System (HES), Meter Data Management System (MDMS) and utility
              analytics.
            </p>

            {posts.length === 0 ? (
              <p className="mt-10 text-p1 text-muted">
                Published articles will appear here. Draft posts are not indexed.
              </p>
            ) : (
              <ul className="mt-10 space-y-8">
                {posts.map((post) => (
                  <li key={post.id} className="border-b border-black/10 pb-8">
                    <p className="text-sm text-muted">
                      {post.category || "Insight"}
                      {post.published_at
                        ? ` · ${new Date(post.published_at).toLocaleDateString()}`
                        : ""}
                    </p>
                    <h2 className="text-h3 m-0 mt-2">
                      <Link
                        href={`${BLOG_INDEX_PATH}/${post.slug}`}
                        className="hover:underline"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    {post.excerpt ? (
                      <p className="mt-2 text-p2 text-muted">{post.excerpt}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
