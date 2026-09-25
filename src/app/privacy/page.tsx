import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { resolvePageSeo } from "@/lib/cms/content";
import { breadcrumbTrails } from "@/lib/seo/jsonld";
import { pageSeo, slugFromPath } from "@/lib/seo/pages";
import PrivacyPolicyContent from "./components/PrivacyPolicyContent";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await resolvePageSeo(
    pageSeo.privacy,
    slugFromPath(pageSeo.privacy.path),
  );
  return buildPageMetadata(seo);
}

export default function PrivacyPage() {
  return (
    <div id="top" className="min-h-screen bg-w2">
      <SiteHeader />
      <PageJsonLd trail={breadcrumbTrails.privacy} />
      <main className="overflow-x-clip bg-w2">
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </div>
  );
}
