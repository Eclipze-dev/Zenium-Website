import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { pageSeo } from "@/lib/seo/pages";

export const metadata: Metadata = buildPageMetadata(pageSeo.resourcesWebinars);

export default function WebinarsPage() {
  return (
    <div className="bg-zen-bg min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-h1 text-zen-text">Webinars</h1>
        <p className="mt-4 text-muted">Webinars page coming soon.</p>
      </main>
      <Footer />
    </div>
  );
}
