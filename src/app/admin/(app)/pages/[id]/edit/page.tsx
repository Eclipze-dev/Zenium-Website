import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageForm from "@/components/cms/PageForm";
import PageSectionsEditor from "@/components/cms/PageSectionsEditor";
import { getPageById, listPageSections } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Edit page" };

export default async function EditPagePage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (!Number.isInteger(id) || id < 1) notFound();
  const page = await getPageById(id);
  if (!page) notFound();
  const sections = await listPageSections(id);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Edit page</h1>
        <p className="text-sm text-muted-foreground">{page.title}</p>
      </div>
      <PageForm page={JSON.parse(JSON.stringify(page))} />
      <PageSectionsEditor
        pageId={id}
        sections={JSON.parse(JSON.stringify(sections))}
      />
    </div>
  );
}
