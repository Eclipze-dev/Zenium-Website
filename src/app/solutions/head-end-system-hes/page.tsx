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
import HesHeroSection from "./components/HesHeroSection";
import HesOverviewSection from "./components/HesOverviewSection";
import HesCapabilitiesSection from "./components/HesCapabilitiesSection";
import HesInteroperabilitySection from "./components/HesInteroperabilitySection";
import HesArchitectureSection from "./components/HesArchitectureSection";
import HesAudienceSection from "./components/HesAudienceSection";
import HesFoundationSection from "./components/HesFoundationSection";
import HesFinalCtaSection from "./components/HesFinalCtaSection";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await resolvePageSeo(
    pageSeo.hes,
    slugFromPath(pageSeo.hes.path),
  );
  return buildPageMetadata(seo);
}

export default async function HesPage() {
  const faqs = await getFaqsForPage("hes");

  return (
    <div id="top" className="bg-bg1">
      <SiteHeader />
      <PageJsonLd
        trail={breadcrumbTrails.hes}
        extra={[...solutionSchemas.hes, faqPageSchema(faqs)]}
      />
      <main className="overflow-x-clip">
        <HesHeroSection />
        <HesOverviewSection />
        <HesCapabilitiesSection />
        <HesInteroperabilitySection />
        <HesArchitectureSection />
        <HesAudienceSection />
        <HesFoundationSection />
        <FaqSection items={faqs} titleId="hes-faq-title" />
        <HesFinalCtaSection />
        <Footer />
      </main>
    </div>
  );
}
