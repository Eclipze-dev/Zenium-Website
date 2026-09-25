import type { Metadata } from "next";
import {
  ServeAudienceCapabilitiesSection,
  ServeAudienceCtaSection,
} from "../components/ServeAudienceSections";
import { commercialContent, commercialFaq } from "../components/serveData";
import FaqSection from "@/components/seo/FaqSection";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { resolvePageSeo } from "@/lib/cms/content";
import { breadcrumbTrails, faqPageSchema } from "@/lib/seo/jsonld";
import { pageSeo, slugFromPath } from "@/lib/seo/pages";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await resolvePageSeo(
    pageSeo.serveCommercial,
    slugFromPath(pageSeo.serveCommercial.path),
  );
  return buildPageMetadata(seo);
}

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
