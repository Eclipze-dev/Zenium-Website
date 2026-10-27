import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/cms/PageHeader";
import PageForm from "@/components/cms/PageForm";
import PageSectionsEditor from "@/components/cms/PageSectionsEditor";
import { toPlain } from "@/lib/cms/plain";
import { getPageById, listPageSections } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Edit page" };

export default async function EditPagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: rawId } = await params;
  const id = Number(rawId);
  if (!Number.isInteger(id) || id < 1) notFound();
  const page = await getPageById(id);
  if (!page) notFound();
  const sections = await listPageSections(id);

  return (
    <div className="space-y-8">
      <PageHeader title="Edit page" subtitle={page.title} />
      <PageForm page={toPlain(page)} />
      <PageSectionsEditor
        pageId={id}
        sections={toPlain(sections)}
      />
    </div>
  );
}
