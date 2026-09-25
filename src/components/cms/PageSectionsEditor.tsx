"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { pageSectionSchema } from "@/lib/cms/schemas";
import {
  createPageSectionAction,
  deletePageSectionAction,
  updatePageSectionAction,
} from "@/lib/cms/actions/sections";
import type { CmsPageSection } from "@/types/cms";

type SectionFormValues = z.infer<typeof pageSectionSchema>;

function SectionEditor({
  pageId,
  section,
}: {
  pageId: number;
  section?: CmsPageSection;
}) {
  const router = useRouter();
  const form = useForm<SectionFormValues>({
    resolver: zodResolver(pageSectionSchema),
    defaultValues: {
      section_key: section?.section_key ?? "",
      heading: section?.heading ?? "",
      body: section?.body ?? "",
      sort_order: section?.sort_order ?? 0,
      enabled: section ? Boolean(section.enabled) : true,
    },
  });

  async function onSubmit(values: SectionFormValues) {
    const result = section
      ? await updatePageSectionAction(section.id, values)
      : await createPageSectionAction(pageId, values);

    if (!result.ok) {
      toast.error(result.error);
      return;
    }

    toast.success(section ? "Section updated" : "Section added");
    form.reset(
      section
        ? values
        : {
            section_key: "",
            heading: "",
            body: "",
            sort_order: 0,
            enabled: true,
          },
    );
    router.refresh();
  }

  async function onDelete() {
    if (!section || !confirm("Delete this section?")) return;
    const result = await deletePageSectionAction(section.id);
    if (!result.ok) {
      toast.error(result.error);
      return;
    }
    toast.success("Section deleted");
    router.refresh();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 rounded-md border p-4"
      >
        <FormField
          control={form.control}
          name="section_key"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Section key</FormLabel>
              <FormControl>
                <Input {...field} placeholder="overview" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="heading"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Heading</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Body</FormLabel>
              <FormControl>
                <Textarea rows={4} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-wrap items-end gap-4">
          <FormField
            control={form.control}
            name="sort_order"
            render={({ field }) => (
              <FormItem className="w-28">
                <FormLabel>Order</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="enabled"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 space-y-0">
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel>Enabled</FormLabel>
              </FormItem>
            )}
          />
          <Button type="submit" size="sm">
            {section ? "Save" : "Add section"}
          </Button>
          {section ? (
            <Button type="button" size="sm" variant="destructive" onClick={onDelete}>
              Delete
            </Button>
          ) : null}
        </div>
      </form>
    </Form>
  );
}

export default function PageSectionsEditor({
  pageId,
  sections,
}: {
  pageId: number;
  sections: CmsPageSection[];
}) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Page sections</h2>
        <p className="text-sm text-muted-foreground">
          Optional content blocks managed in the CMS.
        </p>
      </div>
      {sections.map((section) => (
        <SectionEditor key={section.id} pageId={pageId} section={section} />
      ))}
      <SectionEditor pageId={pageId} />
    </div>
  );
}
