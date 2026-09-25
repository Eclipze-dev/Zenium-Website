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

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await resolvePageSeo(
    pageSeo.mdm,
    slugFromPath(pageSeo.mdm.path),
  );
  return buildPageMetadata(seo);
}

export default async function MdmPage() {
  const faqs = await getFaqsForPage("mdms");

  return (
    <div id="top" className="bg-bg1">
      <SiteHeader />
      <PageJsonLd
        trail={breadcrumbTrails.mdm}
        extra={[...solutionSchemas.mdm, faqPageSchema(faqs)]}
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
        <FaqSection items={faqs} titleId="mdm-faq-title" />
        <MdmFinalCtaSection />
        <Footer />
      </main>
    </div>
  );
}
