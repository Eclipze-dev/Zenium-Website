import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import FaqSection from "@/components/seo/FaqSection";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { breadcrumbTrails, faqPageSchema, solutionSchemas } from "@/lib/seo/jsonld";
import { pageSeo } from "@/lib/seo/pages";
import { aiAnalyticsFaq } from "./components/aiAnalyticsData";
import AiAnalyticsFinalCtaSection from "./components/AiAnalyticsFinalCtaSection";
import AiAnalyticsFoundationSection from "./components/AiAnalyticsFoundationSection";
import AiAnalyticsHeroSection from "./components/AiAnalyticsHeroSection";
import AiAnalyticsIntelligenceLayerSection from "./components/AiAnalyticsIntelligenceLayerSection";
import AiAnalyticsMaturitySection from "./components/AiAnalyticsMaturitySection";
import AiAnalyticsOutcomesSection from "./components/AiAnalyticsOutcomesSection";
import AiAnalyticsUtilityAnalyticsSection from "./components/AiAnalyticsUtilityAnalyticsSection";

export const metadata: Metadata = buildPageMetadata(pageSeo.aiAnalytics);

export default function AiAnalyticsPage() {
  return (
    <div id="top" className="bg-bg1">
      <SiteHeader />
      <PageJsonLd
        trail={breadcrumbTrails.aiAnalytics}
        extra={[...solutionSchemas.aiAnalytics, faqPageSchema(aiAnalyticsFaq)]}
      />
      <main className="overflow-x-clip">
        <AiAnalyticsHeroSection />
        <AiAnalyticsIntelligenceLayerSection />
        <AiAnalyticsUtilityAnalyticsSection />
        <AiAnalyticsMaturitySection />
        <AiAnalyticsOutcomesSection />
        <AiAnalyticsFoundationSection />
        <FaqSection items={aiAnalyticsFaq} titleId="ai-analytics-faq-title" />
        <AiAnalyticsFinalCtaSection />
        <Footer />
      </main>
    </div>
  );
}
