import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { resolvePageSeo } from "@/lib/cms/content";
import { pageSeo, slugFromPath } from "@/lib/seo/pages";
import ContactSection from "./components/ContactSection";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await resolvePageSeo(
    pageSeo.contact,
    slugFromPath(pageSeo.contact.path),
  );
  return buildPageMetadata(seo);
}

export default function ContactPage() {
  return (
    <div id="top" className="bg-bg1 min-h-screen">
      <SiteHeader />
      <main className="">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
