import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { resolvePageSeo } from "@/lib/cms/content";
import { breadcrumbTrails } from "@/lib/seo/jsonld";
import { pageSeo, slugFromPath } from "@/lib/seo/pages";
import CalculatorSection from "./components/CalculatorSection";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await resolvePageSeo(
    pageSeo.wattsToKwhCalculator,
    slugFromPath(pageSeo.wattsToKwhCalculator.path),
  );
  return buildPageMetadata(seo);
}

export default function WattsToKwhCalculatorPage() {
  return (
    <div id="top" className="bg-bg1">
      <SiteHeader />
      <PageJsonLd trail={breadcrumbTrails.wattsToKwhCalculator} />
      <main className="overflow-x-clip">
        <CalculatorSection />
        <Footer />
      </main>
    </div>
  );
}
