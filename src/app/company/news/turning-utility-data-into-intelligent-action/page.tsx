import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import BlogArticle from "./components/BlogArticle";
import LatestInsightsSection from "./components/LatestInsightsSection";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { resolvePageSeo } from "@/lib/cms/content";
import { articleSchema, breadcrumbTrails } from "@/lib/seo/jsonld";
import { pageSeo, slugFromPath } from "@/lib/seo/pages";
import { blogPost } from "./components/blogData";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await resolvePageSeo(
    pageSeo.newsArticle,
    slugFromPath(pageSeo.newsArticle.path),
  );
  return buildPageMetadata(seo);
}

export default function TurningUtilityDataPage() {
  return (
    <div id="top" className="min-h-screen bg-w2">
      <SiteHeader />
      <PageJsonLd
        trail={breadcrumbTrails.newsArticle}
        extra={[
          articleSchema({
            headline: `${blogPost.title} ${blogPost.accent}`,
            description: blogPost.intro,
            path: pageSeo.newsArticle.path,
            image: blogPost.image,
          }),
        ]}
      />
      <main className="overflow-x-clip bg-w2">
        <BlogArticle />
        <LatestInsightsSection />
      </main>
      <Footer />
    </div>
  );
}
