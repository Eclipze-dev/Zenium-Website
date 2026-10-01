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
import { settingsSchema } from "@/lib/cms/schemas";
import { updateSettingsAction } from "@/lib/cms/actions/settings";

type SettingsValues = z.infer<typeof settingsSchema>;

const fieldClass =
  "h-11 rounded-xl border-border bg-background px-4 text-[15px] shadow-none placeholder:text-muted-foreground focus-visible:ring-ring md:text-[15px]";

const areaClass =
  "min-h-28 resize-y rounded-xl border-border bg-background px-4 py-3 text-[15px] shadow-none placeholder:text-muted-foreground focus-visible:ring-ring md:text-[15px]";

export default function SettingsForm({ values }: { values: SettingsValues }) {
  const router = useRouter();
  const form = useForm<SettingsValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: values,
  });

  async function onSubmit(data: SettingsValues) {
    const result = await updateSettingsAction(data);
    if (!result.ok) {
      toast.error(result.error);
      return;
    }
    toast.success("Settings saved");
    router.refresh();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-2xl space-y-5 rounded-2xl bg-card p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] sm:p-8"
      >
        <FormField
          control={form.control}
          name="site_name"
          render={({ field }) => (
            <FormItem className="space-y-1.5">
              <FormLabel className="text-[13px] font-medium text-foreground">Site name</FormLabel>
              <FormControl>
                <Input {...field} className={fieldClass} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="logo"
          render={({ field }) => (
            <FormItem className="space-y-1.5">
              <FormLabel className="text-[13px] font-medium text-foreground">Logo URL</FormLabel>
              <FormControl>
                <Input {...field} className={fieldClass} placeholder="https://" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="favicon"
          render={({ field }) => (
            <FormItem className="space-y-1.5">
              <FormLabel className="text-[13px] font-medium text-foreground">Favicon URL</FormLabel>
              <FormControl>
                <Input {...field} className={fieldClass} placeholder="https://" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact_email"
          render={({ field }) => (
            <FormItem className="space-y-1.5">
              <FormLabel className="text-[13px] font-medium text-foreground">Contact email</FormLabel>
              <FormControl>
                <Input type="email" {...field} className={fieldClass} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact_phone"
          render={({ field }) => (
            <FormItem className="space-y-1.5">
              <FormLabel className="text-[13px] font-medium text-foreground">Contact phone</FormLabel>
              <FormControl>
                <Input {...field} className={fieldClass} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact_address"
          render={({ field }) => (
            <FormItem className="space-y-1.5">
              <FormLabel className="text-[13px] font-medium text-foreground">Contact address</FormLabel>
              <FormControl>
                <Textarea {...field} className={areaClass} rows={4} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="h-11 rounded-xl px-5 text-[15px]"
        >
          {form.formState.isSubmitting ? "Saving…" : "Save settings"}
        </Button>
      </form>
    </Form>
  );
}
