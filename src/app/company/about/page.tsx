import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { breadcrumbTrails, faqPageSchema } from "@/lib/seo/jsonld";
import { pageSeo } from "@/lib/seo/pages";
import { aboutFaq } from "./components/aboutData";
import AboutDecisionsSection from "./components/AboutDecisionsSection";
import AboutDirectionSection from "./components/AboutDirectionSection";
import AboutExperienceSection from "./components/AboutExperienceSection";
import AboutFaqSection from "./components/AboutFaqSection";
import AboutFinalCtaSection from "./components/AboutFinalCtaSection";
import AboutIntroSection from "./components/AboutIntroSection";
import AboutLeadershipSection from "./components/AboutLeadershipSection";

export const metadata: Metadata = buildPageMetadata(pageSeo.about);

export default function AboutPage() {
  return (
    <div id="top" className="bg-bg2 min-h-screen">
      <SiteHeader />
      <PageJsonLd
        trail={breadcrumbTrails.about}
        extra={[faqPageSchema(aboutFaq.items)]}
      />
      <main className="overflow-x-clip">
        <AboutIntroSection />
        <AboutDecisionsSection />
        <AboutExperienceSection />
        <AboutDirectionSection />
        {/* <AboutLeadershipSection /> */}
        <AboutFaqSection />
        <AboutFinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
