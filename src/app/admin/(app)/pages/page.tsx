import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PagesTable from "@/components/cms/PagesTable";
import { listPages } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Pages" };

export default async function AdminPagesPage() {
  const pages = await listPages();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Pages</h1>
          <p className="text-sm text-muted-foreground">
            SEO registry for live site routes. Edit title and meta description
            here; the slug must match the public path (homepage ={" "}
            <code className="text-xs">home</code>). New URLs still need a React
            page in code — use Blog for article posts.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/pages/new">New page</Link>
        </Button>
      </div>
      <PagesTable pages={JSON.parse(JSON.stringify(pages))} />
    </div>
  );
}
