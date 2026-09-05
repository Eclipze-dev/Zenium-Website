import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import CTANetworkBackground from "./components/CTANetworkBackground";
import MetricsSection from "./components/MetricsSection";
import JourneySection from "./components/JourneySection";
import ZeniumEdgeSection from "./components/ZeniumEdgeSection";
import IndiaBuiltSection from "./components/IndiaBuiltSection";
import CustomerStorySection from "./components/CustomerStorySection";
import WhoWeServeSection from "./components/WhoWeServeSection";
import PartnersSection from "./components/PartnersSection";
import InsightsResourcesSection from "./components/InsightsResourcesSection";
import FinalCtaSection from "./components/FinalCtaSection";

export default function HomePage() {
  return (
    <div id="top" className="bg-bg1">
      <SiteHeader />
      <main className="overflow-x-clip">
        <HeroSection />
        <div className="bg-bg2">
          {/* <MetricsSection /> */}
          <JourneySection />
        </div>
        <ZeniumEdgeSection />
        <div className="bg-bg2">
          <IndiaBuiltSection/>
        </div>
        <CustomerStorySection />
        <div className="bg-bg2">
          <WhoWeServeSection />
        </div>
        <PartnersSection />
        <div className="bg-bg2">
          <InsightsResourcesSection />
        </div>
        <FinalCtaSection />
        <Footer />
      </main>
    </div>
  );
}
