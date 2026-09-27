import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { getGuideEntriesForPublic, resolvePageSeo } from "@/lib/cms/content";
import { breadcrumbTrails } from "@/lib/seo/jsonld";
import { pageSeo, slugFromPath } from "@/lib/seo/pages";
import GuideCtaSection from "./components/GuideCtaSection";
import GuideEntriesSection from "./components/GuideEntriesSection";
import GuideHeroSection from "./components/GuideHeroSection";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await resolvePageSeo(
    pageSeo.smartMeterGuide,
    slugFromPath(pageSeo.smartMeterGuide.path),
  );
  return buildPageMetadata(seo);
}

export default async function SmartMeterDisplayGuidePage() {
  const entries = await getGuideEntriesForPublic();

  return (
    <div id="top" className="bg-bg1">
      <SiteHeader />
      <PageJsonLd trail={breadcrumbTrails.smartMeterGuide} />
      <main className="overflow-x-clip">
        <GuideHeroSection />
        <GuideEntriesSection entries={entries} />
        <GuideCtaSection />
        <Footer />
      </main>
    </div>
  );
}
