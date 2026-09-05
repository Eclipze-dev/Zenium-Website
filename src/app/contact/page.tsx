import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import ContactSection from "./components/ContactSection";

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
