import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import FaqSection from "@/components/seo/FaqSection";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { breadcrumbTrails, faqPageSchema, solutionSchemas } from "@/lib/seo/jsonld";
import { pageSeo } from "@/lib/seo/pages";
import { mdmFaq } from "./components/mdmData";
import MdmHeroSection from "./components/MdmHeroSection";
import MdmOverviewSection from "./components/MdmOverviewSection";
import MdmCapabilitiesSection from "./components/MdmCapabilitiesSection";
import MdmInteroperabilitySection from "./components/MdmInteroperabilitySection";
import MdmOperationalVisibilitySection from "./components/MdmOperationalVisibilitySection";
import MdmArchitectureSection from "./components/MdmArchitectureSection";
import MdmAudienceSection from "./components/MdmAudienceSection";
import MdmWhoItIsForSection from "./components/MdmWhoItIsForSection";
import MdmFoundationSection from "./components/MdmFoundationSection";
import MdmFinalCtaSection from "./components/MdmFinalCtaSection";

export const metadata: Metadata = buildPageMetadata(pageSeo.mdm);

export default function MdmPage() {
  return (
    <div id="top" className="bg-bg1">
      <SiteHeader />
      <PageJsonLd
        trail={breadcrumbTrails.mdm}
        extra={[...solutionSchemas.mdm, faqPageSchema(mdmFaq)]}
      />
      <main className="overflow-x-clip">
        <MdmHeroSection />
        <MdmOverviewSection />
        <MdmCapabilitiesSection />
        <MdmInteroperabilitySection />
        <MdmOperationalVisibilitySection />
        <MdmAudienceSection />
        <MdmArchitectureSection />
        <MdmWhoItIsForSection />
        <MdmFoundationSection />
        <FaqSection items={mdmFaq} titleId="mdm-faq-title" />
        <MdmFinalCtaSection />
        <Footer />
      </main>
    </div>
  );
}
