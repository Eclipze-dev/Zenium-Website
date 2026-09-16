import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import FaqSection from "@/components/seo/FaqSection";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { breadcrumbTrails, faqPageSchema, solutionSchemas } from "@/lib/seo/jsonld";
import { pageSeo } from "@/lib/seo/pages";
import { hesFaq } from "./components/hesData";
import HesHeroSection from "./components/HesHeroSection";
import HesOverviewSection from "./components/HesOverviewSection";
import HesCapabilitiesSection from "./components/HesCapabilitiesSection";
import HesInteroperabilitySection from "./components/HesInteroperabilitySection";
import HesArchitectureSection from "./components/HesArchitectureSection";
import HesAudienceSection from "./components/HesAudienceSection";
import HesFoundationSection from "./components/HesFoundationSection";
import HesFinalCtaSection from "./components/HesFinalCtaSection";

export const metadata: Metadata = buildPageMetadata(pageSeo.hes);

export default function HesPage() {
  return (
    <div id="top" className="bg-bg1">
      <SiteHeader />
      <PageJsonLd
        trail={breadcrumbTrails.hes}
        extra={[...solutionSchemas.hes, faqPageSchema(hesFaq)]}
      />
      <main className="overflow-x-clip">
        <HesHeroSection />
        <HesOverviewSection />
        <HesCapabilitiesSection />
        <HesInteroperabilitySection />
        <HesArchitectureSection />
        <HesAudienceSection />
        <HesFoundationSection />
        <FaqSection items={hesFaq} titleId="hes-faq-title" />
        <HesFinalCtaSection />
        <Footer />
      </main>
    </div>
  );
}
