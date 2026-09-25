import type { Metadata } from "next";
import {
  ServeAudienceCapabilitiesSection,
  ServeAudienceCtaSection,
} from "../components/ServeAudienceSections";
import { citiesContent, citiesFaq } from "../components/serveData";
import FaqSection from "@/components/seo/FaqSection";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { resolvePageSeo } from "@/lib/cms/content";
import { breadcrumbTrails, faqPageSchema } from "@/lib/seo/jsonld";
import { pageSeo, slugFromPath } from "@/lib/seo/pages";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await resolvePageSeo(
    pageSeo.serveCities,
    slugFromPath(pageSeo.serveCities.path),
  );
  return buildPageMetadata(seo);
}

export default function CitiesPage() {
  return (
    <>
      <PageJsonLd
        trail={breadcrumbTrails.serveCities}
        extra={[faqPageSchema(citiesFaq)]}
      />
      <ServeAudienceCapabilitiesSection content={citiesContent} />
      <FaqSection items={citiesFaq} titleId="serve-cities-faq-title" />
      <ServeAudienceCtaSection content={citiesContent} />
    </>
  );
}
