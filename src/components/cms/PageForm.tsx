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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { pageSchema } from "@/lib/cms/schemas";
import {
  createPageAction,
  updatePageAction,
} from "@/lib/cms/actions/pages";
import { cmsPageRegistry } from "@/lib/seo/pages";
import type { CmsPage } from "@/types/cms";

const KNOWN_PAGES = cmsPageRegistry();

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 255);
}

type PageFormValues = z.infer<typeof pageSchema>;

export default function PageForm({ page }: { page?: CmsPage }) {
  const router = useRouter();
  const form = useForm<PageFormValues>({
    resolver: zodResolver(pageSchema),
    defaultValues: {
      title: page?.title ?? "",
      slug: page?.slug ?? "",
      content: page?.content ?? "",
      status: page?.status ?? "draft",
      seo_title: page?.seo_title ?? "",
      seo_description: page?.seo_description ?? "",
    },
  });

  async function onSubmit(values: PageFormValues) {
    const result = page
      ? await updatePageAction(page.id, values)
      : await createPageAction(values);

    if (!result.ok) {
      toast.error(result.error);
      return;
    }

    toast.success(page ? "Page updated" : "Page created");
    router.push("/admin/pages");
    router.refresh();
  }

  function applyKnownPage(slug: string) {
    if (slug === "__custom__") return;
    const known = KNOWN_PAGES.find((entry) => entry.slug === slug);
    if (!known) return;
    form.setValue("slug", known.slug, { shouldValidate: true });
    if (!form.getValues("title")) {
      form.setValue("title", known.title, { shouldValidate: true });
    }
    if (!form.getValues("seo_title")) {
      form.setValue("seo_title", known.seo_title, { shouldValidate: true });
    }
    if (!form.getValues("seo_description")) {
      form.setValue("seo_description", known.seo_description, {
        shouldValidate: true,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-3xl space-y-5">
        <p className="rounded-md border border-border bg-muted/40 px-3 py-2 text-sm text-muted-foreground">
          Pages store SEO for existing site routes. Creating a row here does not
          create a public URL — add a React route under{" "}
          <code className="text-xs">src/app/</code> first, then use the matching
          slug (e.g. <code className="text-xs">company/about</code>; homepage is{" "}
          <code className="text-xs">home</code>). Blog posts use the Blog menu
          instead.
        </p>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onChange={(event) => {
                    field.onChange(event);
                    if (!page && !form.getValues("slug")) {
                      form.setValue("slug", slugify(event.target.value), {
                        shouldValidate: true,
                      });
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {!page ? (
          <FormItem>
            <FormLabel>Known site page</FormLabel>
            <Select onValueChange={applyKnownPage}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Pick a route to fill the slug…" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="__custom__">Custom slug</SelectItem>
                {KNOWN_PAGES.map((entry) => (
                  <SelectItem key={entry.slug} value={entry.slug}>
                    /{entry.slug === "home" ? "" : entry.slug}
                    {entry.slug === "home" ? " (home)" : ""}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormDescription>
              Optional shortcut — still editable below.
            </FormDescription>
          </FormItem>
        ) : null}
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="company/about"
                />
              </FormControl>
              <FormDescription>
                Must match the live route path without a leading slash. Homepage
                uses <code className="text-xs">home</code>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Only published rows override public title and meta description.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content (optional notes)</FormLabel>
              <FormControl>
                <Textarea className="min-h-[160px]" {...field} />
              </FormControl>
              <FormDescription>
                Not rendered on the marketing site yet — SEO fields below drive
                the live page.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="seo_title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SEO title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="seo_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SEO description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Saving…" : "Save"}
          </Button>
          <Button type="button" variant="outline" onClick={() => router.push("/admin/pages")}>
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}
