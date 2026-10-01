import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/cms/PageHeader";
import PagesTable from "@/components/cms/PagesTable";
import { toPlain } from "@/lib/cms/plain";
import { listPages } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Pages" };

export default async function AdminPagesPage() {
  const pages = await listPages();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Pages"
        subtitle={
          <>
            SEO registry for live site routes. Edit title and meta description
            here; the slug must match the public path (homepage ={" "}
            <code className="text-xs">home</code>). New URLs still need a React
            page in code — use Blog for article posts.
          </>
        }
        actions={
          <Button asChild>
            <Link href="/admin/pages/new">New page</Link>
          </Button>
        }
      />
      <PagesTable pages={toPlain(pages)} />
    </div>
  );
}
