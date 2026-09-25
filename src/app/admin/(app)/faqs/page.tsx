import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FaqsTable from "@/components/cms/FaqsTable";
import { listFaqs } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "FAQs" };

export default async function AdminFaqsPage() {
  const faqs = await listFaqs();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">FAQs</h1>
          <p className="text-sm text-muted-foreground">
            AMI, HES, and MDMS FAQ content for public SEO pages.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/faqs/new">New FAQ</Link>
        </Button>
      </div>
      <FaqsTable faqs={JSON.parse(JSON.stringify(faqs))} />
    </div>
  );
}
