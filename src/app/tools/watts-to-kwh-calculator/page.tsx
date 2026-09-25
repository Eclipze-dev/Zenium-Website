import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { resolvePageSeo } from "@/lib/cms/content";
import { breadcrumbTrails } from "@/lib/seo/jsonld";
import { pageSeo, slugFromPath } from "@/lib/seo/pages";
import WattsToKwhCalculator from "./WattsToKwhCalculator";

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
        <section className="pb-[80px] pt-[50px] max-lg:pb-[48px] max-lg:pt-[40px] max-md:pt-24 max-md:pb-[70px]">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#F07F25]">
              Tools
            </p>
            <h1 className="text-h1 m-0 mt-3">Watts to kWh calculator</h1>
            <p className="mt-5 text-p1 text-muted">
              Convert power (watts or kilowatts) and usage time into kilowatt-hours.
              On electricity bills in many markets,{" "}
              <strong>1 unit = 1 kWh</strong>.
            </p>
          </div>
          <div className="container mt-10">
            <WattsToKwhCalculator />
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
