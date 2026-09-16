import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/buildMetadata";
import { pageSeo } from "@/lib/seo/pages";
import ContactSection from "./components/ContactSection";

export const metadata: Metadata = buildPageMetadata(pageSeo.contact);

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
