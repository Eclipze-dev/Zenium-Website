import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import TermsContent from "./components/TermsContent";

export default function TermsPage() {
  return (
    <div id="top" className="min-h-screen bg-w2">
      <SiteHeader />
      <main className="overflow-x-clip bg-w2">
        <TermsContent />
      </main>
      <Footer />
    </div>
  );
}
