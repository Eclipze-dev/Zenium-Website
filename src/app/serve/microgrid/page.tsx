import type { Metadata } from "next";
import {
  ServeAudienceCapabilitiesSection,
  ServeAudienceCtaSection,
} from "../components/ServeAudienceSections";
import { microgridContent, microgridFaq } from "../components/serveData";
import FaqSection from "@/components/seo/FaqSection";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { breadcrumbTrails, faqPageSchema } from "@/lib/seo/jsonld";
import { pageSeo } from "@/lib/seo/pages";

export const metadata: Metadata = buildPageMetadata(pageSeo.serveMicrogrid);

export default function MicrogridPage() {
  return (
    <>
      <PageJsonLd
        trail={breadcrumbTrails.serveMicrogrid}
        extra={[faqPageSchema(microgridFaq)]}
      />
      <ServeAudienceCapabilitiesSection content={microgridContent} />
      <FaqSection items={microgridFaq} titleId="serve-microgrid-faq-title" />
      <ServeAudienceCtaSection content={microgridContent} />
    </>
  );
}
