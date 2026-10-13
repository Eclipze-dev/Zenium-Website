import ScrollReveal from "@/components/animations/ScrollReveal";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { ArticleByline } from "@/components/seo/ArticleByline";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { resolvePageSeo } from "@/lib/cms/content";
import { articleSchema } from "@/lib/seo/jsonld";
import { pageSeo, slugFromPath } from "@/lib/seo/pages";
import { DEFAULT_OG_IMAGE } from "@/lib/seo/site";

const PUBLISHED = {
  authorName: "Zenium",
  authorRole: "Utility intelligence",
  publishedAt: "2026-09-17",
} as const;

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await resolvePageSeo(
    pageSeo.resourcesCaseStudies,
    slugFromPath(pageSeo.resourcesCaseStudies.path),
  );
  return buildPageMetadata(seo);
}

export default function CaseStudiesPage() {
  return (
    <div className="bg-zen-bg min-h-screen">
      <SiteHeader />
      <JsonLd
        data={articleSchema({
          headline: "Case Studies",
          description: pageSeo.resourcesCaseStudies.description,
          path: pageSeo.resourcesCaseStudies.path,
          image: DEFAULT_OG_IMAGE,
          authorName: PUBLISHED.authorName,
          authorRole: PUBLISHED.authorRole,
          datePublished: PUBLISHED.publishedAt,
        })}
      />
      <ScrollReveal as="main" className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-h1 text-zen-text">Case Studies</h1>
        <ArticleByline
          authorName={PUBLISHED.authorName}
          authorRole={PUBLISHED.authorRole}
          publishedAt={PUBLISHED.publishedAt}
        />
        <p className="mt-4 text-muted">Case studies page coming soon.</p>
      </ScrollReveal>
      <Footer />
    </div>
  );
}
