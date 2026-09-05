import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import AboutDecisionsSection from "./components/AboutDecisionsSection";
import AboutDirectionSection from "./components/AboutDirectionSection";
import AboutExperienceSection from "./components/AboutExperienceSection";
import AboutFaqSection from "./components/AboutFaqSection";
import AboutFinalCtaSection from "./components/AboutFinalCtaSection";
import AboutIntroSection from "./components/AboutIntroSection";

export default function AboutPage() {
  return (
    <div id="top" className="bg-zen-bg min-h-screen">
      <SiteHeader />
      <main className="overflow-x-clip">
        <AboutIntroSection />
        <AboutDecisionsSection />
        <AboutExperienceSection />
        <AboutDirectionSection />
        <AboutFaqSection />
        <AboutFinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
