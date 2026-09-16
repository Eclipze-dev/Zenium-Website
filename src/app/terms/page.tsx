import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { breadcrumbTrails } from "@/lib/seo/jsonld";
import { pageSeo } from "@/lib/seo/pages";
import TermsContent from "./components/TermsContent";

export const metadata: Metadata = buildPageMetadata(pageSeo.terms);

export default function TermsPage() {
  return (
    <div id="top" className="min-h-screen bg-w2">
      <SiteHeader />
      <PageJsonLd trail={breadcrumbTrails.terms} />
      <main className="overflow-x-clip bg-w2">
        <TermsContent />
      </main>
      <Footer />
    </div>
  );
}
