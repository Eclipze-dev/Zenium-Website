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
import { guideEntrySchema } from "@/lib/cms/schemas";
import {
  createGuideEntryAction,
  updateGuideEntryAction,
} from "@/lib/cms/actions/guide";
import type { CmsSmartMeterGuideEntry } from "@/types/cms";

type GuideFormValues = z.infer<typeof guideEntrySchema>;

export default function GuideEntryForm({
  entry,
}: {
  entry?: CmsSmartMeterGuideEntry;
}) {
  const router = useRouter();
  const form = useForm<GuideFormValues>({
    resolver: zodResolver(guideEntrySchema),
    defaultValues: {
      image_url: entry?.image_url ?? "",
      display_code: entry?.display_code ?? "",
      description: entry?.description ?? "",
      manufacturer_model_notes: entry?.manufacturer_model_notes ?? "",
      category: entry?.category ?? "",
      sort_order: entry?.sort_order ?? 0,
      enabled: entry ? Boolean(entry.enabled) : true,
      alt_text: entry?.alt_text ?? "",
    },
  });

  async function onSubmit(values: GuideFormValues) {
    const result = entry
      ? await updateGuideEntryAction(entry.id, values)
      : await createGuideEntryAction(values);

    if (!result.ok) {
      toast.error(result.error);
      return;
    }

    toast.success(entry ? "Entry updated" : "Entry created");
    router.push("/admin/guide");
    router.refresh();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-3xl space-y-5">
        <FormField
          control={form.control}
          name="display_code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Display code</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Only use real codes you have verified" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea rows={5} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="manufacturer_model_notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Manufacturer / model notes</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input {...field} placeholder="/uploads/..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="alt_text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alt text</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sort_order"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sort order</FormLabel>
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
            <FormItem className="flex items-center justify-between rounded-md border p-3">
              <FormLabel>Enabled</FormLabel>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {entry ? "Save entry" : "Create entry"}
        </Button>
      </form>
    </Form>
  );
}
