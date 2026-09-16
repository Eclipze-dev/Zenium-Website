import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { breadcrumbTrails } from "@/lib/seo/jsonld";
import { pageSeo } from "@/lib/seo/pages";
import CareersCvCtaSection from "./components/CareersCvCtaSection";
import CareersHeroSection from "./components/CareersHeroSection";
import CareersOpportunitiesSection from "./components/CareersOpportunitiesSection";

export const metadata: Metadata = buildPageMetadata(pageSeo.careers);

export default function CareersPage() {
  return (
    <div id="top" className="bg-bg1 min-h-screen">
      <SiteHeader />
      <PageJsonLd trail={breadcrumbTrails.careers} />
      <main className="overflow-x-clip">
        <CareersHeroSection />
        <CareersOpportunitiesSection />
        <CareersCvCtaSection />
      </main>
      <Footer />
    </div>
  );
}
