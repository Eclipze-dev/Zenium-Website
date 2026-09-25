import type { Metadata } from "next";
import {
  ServeAudienceCapabilitiesSection,
  ServeAudienceCtaSection,
} from "../components/ServeAudienceSections";
import { microgridContent, microgridFaq } from "../components/serveData";
import FaqSection from "@/components/seo/FaqSection";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { resolvePageSeo } from "@/lib/cms/content";
import { breadcrumbTrails, faqPageSchema } from "@/lib/seo/jsonld";
import { pageSeo, slugFromPath } from "@/lib/seo/pages";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await resolvePageSeo(
    pageSeo.serveMicrogrid,
    slugFromPath(pageSeo.serveMicrogrid.path),
  );
  return buildPageMetadata(seo);
}

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
