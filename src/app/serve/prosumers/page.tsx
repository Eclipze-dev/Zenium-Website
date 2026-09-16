import type { Metadata } from "next";
import {
  ServeAudienceCapabilitiesSection,
  ServeAudienceCtaSection,
} from "../components/ServeAudienceSections";
import { prosumersContent, prosumersFaq } from "../components/serveData";
import FaqSection from "@/components/seo/FaqSection";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { breadcrumbTrails, faqPageSchema } from "@/lib/seo/jsonld";
import { pageSeo } from "@/lib/seo/pages";

export const metadata: Metadata = buildPageMetadata(pageSeo.serveProsumers);

export default function ProsumersPage() {
  return (
    <>
      <PageJsonLd
        trail={breadcrumbTrails.serveProsumers}
        extra={[faqPageSchema(prosumersFaq)]}
      />
      <ServeAudienceCapabilitiesSection
        content={prosumersContent}
        layout="wide-bottom"
      />
      <FaqSection items={prosumersFaq} titleId="serve-prosumers-faq-title" />
      <ServeAudienceCtaSection content={prosumersContent} />
    </>
  );
}
