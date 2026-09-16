import type { Metadata } from "next";
import {
  ServeAudienceCapabilitiesSection,
  ServeAudienceCtaSection,
} from "../components/ServeAudienceSections";
import { citiesContent, citiesFaq } from "../components/serveData";
import FaqSection from "@/components/seo/FaqSection";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { breadcrumbTrails, faqPageSchema } from "@/lib/seo/jsonld";
import { pageSeo } from "@/lib/seo/pages";

export const metadata: Metadata = buildPageMetadata(pageSeo.serveCities);

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
