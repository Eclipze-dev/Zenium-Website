import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import HesHeroSection from "./components/HesHeroSection";
import HesOverviewSection from "./components/HesOverviewSection";
import HesCapabilitiesSection from "./components/HesCapabilitiesSection";
import HesInteroperabilitySection from "./components/HesInteroperabilitySection";
import HesArchitectureSection from "./components/HesArchitectureSection";
import HesAudienceSection from "./components/HesAudienceSection";
import HesFoundationSection from "./components/HesFoundationSection";
import HesFinalCtaSection from "./components/HesFinalCtaSection";

export default function HesPage() {
  return (
    <div id="top" className="bg-bg1">
      <SiteHeader />
      <main className="overflow-x-clip">
        <HesHeroSection />
        <HesOverviewSection />
        <HesCapabilitiesSection />
        <HesInteroperabilitySection />
        <HesArchitectureSection />
        <HesAudienceSection />
        <HesFoundationSection />
        <HesFinalCtaSection />
        <Footer />
      </main>
    </div>
  );
}
