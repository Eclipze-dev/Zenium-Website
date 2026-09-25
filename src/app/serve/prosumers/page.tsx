import type { Metadata } from "next";
import {
  ServeAudienceCapabilitiesSection,
  ServeAudienceCtaSection,
} from "../components/ServeAudienceSections";
import { prosumersContent, prosumersFaq } from "../components/serveData";
import FaqSection from "@/components/seo/FaqSection";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { resolvePageSeo } from "@/lib/cms/content";
import { breadcrumbTrails, faqPageSchema } from "@/lib/seo/jsonld";
import { pageSeo, slugFromPath } from "@/lib/seo/pages";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await resolvePageSeo(
    pageSeo.serveProsumers,
    slugFromPath(pageSeo.serveProsumers.path),
  );
  return buildPageMetadata(seo);
}

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
