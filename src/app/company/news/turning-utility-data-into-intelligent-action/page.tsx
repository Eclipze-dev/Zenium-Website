import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import BlogArticle from "./components/BlogArticle";
import LatestInsightsSection from "./components/LatestInsightsSection";

export const metadata: Metadata = {
  title: "Turning Utility Data Into Intelligent Action | Zenium",
  description:
    "Utilities generate enormous volumes of data every day. The real opportunity is turning that information into insight — and insight into action.",
};

export default function TurningUtilityDataPage() {
  return (
    <div id="top" className="min-h-screen bg-[#F7F7F7]">
      <SiteHeader />
      <main className="overflow-x-clip bg-[#F7F7F7]">
        <BlogArticle />
        <LatestInsightsSection />
      </main>
      <Footer />
    </div>
  );
}
