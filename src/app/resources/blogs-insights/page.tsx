import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { getPublishedPostsForPublic, resolvePageSeo } from "@/lib/cms/content";
import { breadcrumbTrails } from "@/lib/seo/jsonld";
import { pageSeo, slugFromPath } from "@/lib/seo/pages";
import { mergeBlogPosts } from "./components/blogData";
import BlogsListing from "./components/BlogsListing";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await resolvePageSeo(
    pageSeo.resourcesBlogs,
    slugFromPath(pageSeo.resourcesBlogs.path),
  );
  return buildPageMetadata(seo);
}

export default async function BlogsInsightsPage() {
  const cmsPosts = await getPublishedPostsForPublic();
  const posts = mergeBlogPosts(cmsPosts);

  return (
    <div id="top" className="min-h-screen bg-white">
      <SiteHeader />
      <PageJsonLd trail={breadcrumbTrails.blogs} />
      <main className="overflow-x-clip">
        <BlogsListing posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
