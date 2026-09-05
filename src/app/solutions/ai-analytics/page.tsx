import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import AiAnalyticsFinalCtaSection from "./components/AiAnalyticsFinalCtaSection";
import AiAnalyticsFoundationSection from "./components/AiAnalyticsFoundationSection";
import AiAnalyticsHeroSection from "./components/AiAnalyticsHeroSection";
import AiAnalyticsIntelligenceLayerSection from "./components/AiAnalyticsIntelligenceLayerSection";
import AiAnalyticsMaturitySection from "./components/AiAnalyticsMaturitySection";
import AiAnalyticsOutcomesSection from "./components/AiAnalyticsOutcomesSection";
import AiAnalyticsUtilityAnalyticsSection from "./components/AiAnalyticsUtilityAnalyticsSection";

export default function AiAnalyticsPage() {
  return (
    <div id="top" className="bg-bg1">
      <SiteHeader />
      <main className="overflow-x-clip">
        <AiAnalyticsHeroSection />
        <AiAnalyticsIntelligenceLayerSection />
        <AiAnalyticsUtilityAnalyticsSection />
        <AiAnalyticsMaturitySection />
        <AiAnalyticsOutcomesSection />
        <AiAnalyticsFoundationSection />
        <AiAnalyticsFinalCtaSection />
        <Footer />
      </main>
    </div>
  );
}
