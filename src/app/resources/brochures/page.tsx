import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { resolvePageSeo } from "@/lib/cms/content";
import { pageSeo, slugFromPath } from "@/lib/seo/pages";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await resolvePageSeo(
    pageSeo.resourcesBrochures,
    slugFromPath(pageSeo.resourcesBrochures.path),
  );
  return buildPageMetadata(seo);
}

export default function BrochuresPage() {
  return (
    <div className="bg-zen-bg min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-h1 text-zen-text">Brochures</h1>
        <p className="mt-4 text-muted">Brochures page coming soon.</p>
      </main>
      <Footer />
    </div>
  );
}
