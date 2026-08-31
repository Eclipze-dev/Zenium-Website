import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
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

export default function MdmPage() {
  return (
    <div id="top" className="bg-zen-bg">
      <SiteHeader />
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
        <MdmFinalCtaSection />
        <Footer />
      </main>
    </div>
  );
}
