import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import PartnersConnectedSection from "./components/PartnersConnectedSection";
import PartnersEcosystemSection from "./components/PartnersEcosystemSection";
import PartnersFinalCtaSection from "./components/PartnersFinalCtaSection";
import PartnersHeroSection from "./components/PartnersHeroSection";
import PartnersStatsSection from "./components/PartnersStatsSection";
import PartnersWhySection from "./components/PartnersWhySection";

export default function PartnersPage() {
  return (
    <div id="top" className="bg-zen-bg min-h-screen">
      <SiteHeader />
      <main className="overflow-x-clip">
        <PartnersHeroSection />
        <PartnersStatsSection />
        <PartnersWhySection />
        <PartnersEcosystemSection />
        <PartnersConnectedSection />
        <PartnersFinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
