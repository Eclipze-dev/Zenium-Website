import type { Metadata } from "next";
import { UtilitiesJourneySection } from "./components/UtilitiesContentSections";
import FaqSection from "@/components/seo/FaqSection";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { breadcrumbTrails, faqPageSchema } from "@/lib/seo/jsonld";
import { pageSeo } from "@/lib/seo/pages";
import { utilitiesFaq } from "../components/serveData";
import {
  UtilitiesAmiNextSection,
  UtilitiesPrioritiesSection,
  UtilitiesSolutionsSection,
} from "./components/UtilitiesClosingSections";

export const metadata: Metadata = buildPageMetadata(pageSeo.serveUtilities);

export default function UtilitiesPage() {
  return (
    <>
      <PageJsonLd
        trail={breadcrumbTrails.serveUtilities}
        extra={[faqPageSchema(utilitiesFaq)]}
      />
      <UtilitiesJourneySection />
      <UtilitiesSolutionsSection />
      <UtilitiesPrioritiesSection />
      <FaqSection items={utilitiesFaq} titleId="serve-utilities-faq-title" />
      <UtilitiesAmiNextSection />
    </>
  );
}
