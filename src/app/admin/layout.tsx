import type { Metadata } from "next";
import CmsProviders from "@/components/cms/CmsProviders";

export const metadata: Metadata = {
  title: {
    default: "CMS",
    template: "%s · CMS",
  },
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CmsProviders>{children}</CmsProviders>;
}
