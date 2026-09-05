import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import ServeShell from "./components/ServeShell";

export default function ServeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="top" className="bg-bg1 min-h-screen">
      <SiteHeader />
      <main className="overflow-x-clip">
        <ServeShell>{children}</ServeShell>
      </main>
      <Footer />
    </div>
  );
}
