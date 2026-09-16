import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { breadcrumbTrails } from "@/lib/seo/jsonld";
import { pageSeo } from "@/lib/seo/pages";
import NewsSection from "./components/NewsSection";

export const metadata: Metadata = buildPageMetadata(pageSeo.news);

export default function NewsPage() {
  return (
    <div id="top" className="min-h-screen">
      <SiteHeader />
      <PageJsonLd trail={breadcrumbTrails.news} />
      <main className="overflow-x-clip bg-w2">
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
