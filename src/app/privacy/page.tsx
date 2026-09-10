import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import PrivacyPolicyContent from "./components/PrivacyPolicyContent";

export default function PrivacyPage() {
  return (
    <div id="top" className="min-h-screen bg-w2">
      <SiteHeader />
      <main className="overflow-x-clip bg-w2">
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </div>
  );
}
