import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import FaqSection from "@/components/seo/FaqSection";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { getFaqsForPage, resolvePageSeo } from "@/lib/cms/content";
import {
  breadcrumbTrails,
  faqPageSchema,
  solutionSchemas,
} from "@/lib/seo/jsonld";
import { pageSeo, slugFromPath } from "@/lib/seo/pages";
import AmiHeroSection from "./components/AmiHeroSection";
import AmiOverviewSection from "./components/AmiOverviewSection";
import AmiFinalCtaSection from "./components/AmiFinalCtaSection";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await resolvePageSeo(
    pageSeo.ami,
    slugFromPath(pageSeo.ami.path),
  );
  return buildPageMetadata(seo);
}

export default async function AmiPage() {
  const faqs = await getFaqsForPage("ami");

  return (
    <div id="top" className="bg-bg1">
      <SiteHeader />
      <PageJsonLd
        trail={breadcrumbTrails.ami}
        extra={[...solutionSchemas.ami, faqPageSchema(faqs)]}
      />
      <main className="overflow-x-clip">
        <AmiHeroSection />
        <AmiOverviewSection />
        <FaqSection items={faqs} titleId="ami-faq-title" />
        <AmiFinalCtaSection />
        <Footer />
      </main>
    </div>
  );
}
