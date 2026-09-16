import type { Metadata } from "next";
import {
  ServeAudienceCapabilitiesSection,
  ServeAudienceCtaSection,
} from "../components/ServeAudienceSections";
import { commercialContent, commercialFaq } from "../components/serveData";
import FaqSection from "@/components/seo/FaqSection";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { breadcrumbTrails, faqPageSchema } from "@/lib/seo/jsonld";
import { pageSeo } from "@/lib/seo/pages";

export const metadata: Metadata = buildPageMetadata(pageSeo.serveCommercial);

export default function CommercialPage() {
  return (
    <>
      <PageJsonLd
        trail={breadcrumbTrails.serveCommercial}
        extra={[faqPageSchema(commercialFaq)]}
      />
      <ServeAudienceCapabilitiesSection content={commercialContent} />
      <FaqSection items={commercialFaq} titleId="serve-commercial-faq-title" />
      <ServeAudienceCtaSection content={commercialContent} />
    </>
  );
}
