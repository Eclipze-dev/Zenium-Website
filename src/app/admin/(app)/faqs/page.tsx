import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FaqsTable from "@/components/cms/FaqsTable";
import { PageHeader } from "@/components/cms/PageHeader";
import { toPlain } from "@/lib/cms/plain";
import { listFaqs } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "FAQs" };

export default async function AdminFaqsPage() {
  const faqs = await listFaqs();

  return (
    <div className="space-y-6">
      <PageHeader
        title="FAQs"
        subtitle="AMI, HES, and MDMS FAQ content for public SEO pages."
        actions={
          <Button asChild>
            <Link href="/admin/faqs/new">New FAQ</Link>
          </Button>
        }
      />
      <FaqsTable faqs={toPlain(faqs)} />
    </div>
  );
}
