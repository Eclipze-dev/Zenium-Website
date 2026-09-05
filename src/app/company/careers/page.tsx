import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import CareersCvCtaSection from "./components/CareersCvCtaSection";
import CareersHeroSection from "./components/CareersHeroSection";
import CareersOpportunitiesSection from "./components/CareersOpportunitiesSection";

export default function CareersPage() {
  return (
    <div id="top" className="bg-bg1 min-h-screen">
      <SiteHeader />
      <main className="overflow-x-clip">
        <CareersHeroSection />
        <CareersOpportunitiesSection />
        <CareersCvCtaSection />
      </main>
      <Footer />
    </div>
  );
}
