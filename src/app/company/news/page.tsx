import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import NewsSection from "./components/NewsSection";

export default function NewsPage() {
  return (
    <div id="top" className="min-h-screen">
      <SiteHeader />
      <main className="overflow-x-clip bg-[#F7F7F7]">
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
