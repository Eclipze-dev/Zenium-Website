import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { resolvePageSeo } from "@/lib/cms/content";
import { pageSeo, slugFromPath } from "@/lib/seo/pages";
import PartnersAlliancesSection from "./components/PartnersAlliancesSection";
import PartnersConnectedSection from "./components/PartnersConnectedSection";
import PartnersEcosystemSection from "./components/PartnersEcosystemSection";
import PartnersFinalCtaSection from "./components/PartnersFinalCtaSection";
import PartnersHeroSection from "./components/PartnersHeroSection";
import PartnersWhySection from "./components/PartnersWhySection";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await resolvePageSeo(
    pageSeo.partners,
    slugFromPath(pageSeo.partners.path),
  );
  return buildPageMetadata(seo);
}

export default function PartnersPage() {
  return (
    <div id="top" className="bg-bg1 min-h-screen">
      <SiteHeader />
      <main className="overflow-x-clip">
        <PartnersHeroSection />
        <PartnersAlliancesSection />
        <PartnersWhySection />
        <PartnersEcosystemSection />
        <PartnersConnectedSection />
        <PartnersFinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
