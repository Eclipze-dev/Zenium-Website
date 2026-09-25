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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { faqSchema } from "@/lib/cms/schemas";
import { createFaqAction, updateFaqAction } from "@/lib/cms/actions/faqs";
import type { CmsFaq } from "@/types/cms";

type FaqFormValues = z.infer<typeof faqSchema>;

export default function FaqForm({ faq }: { faq?: CmsFaq }) {
  const router = useRouter();
  const form = useForm<FaqFormValues>({
    resolver: zodResolver(faqSchema),
    defaultValues: {
      page_key: faq?.page_key ?? "ami",
      question: faq?.question ?? "",
      answer: faq?.answer ?? "",
      sort_order: faq?.sort_order ?? 0,
      enabled: faq ? Boolean(faq.enabled) : true,
    },
  });

  async function onSubmit(values: FaqFormValues) {
    const result = faq
      ? await updateFaqAction(faq.id, values)
      : await createFaqAction(values);

    if (!result.ok) {
      toast.error(result.error);
      return;
    }

    toast.success(faq ? "FAQ updated" : "FAQ created");
    router.push("/admin/faqs");
    router.refresh();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-3xl space-y-5">
        <FormField
          control={form.control}
          name="page_key"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Page</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ami">AMI</SelectItem>
                  <SelectItem value="hes">HES</SelectItem>
                  <SelectItem value="mdms">MDMS</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Answer</FormLabel>
              <FormControl>
                <Textarea rows={8} {...field} />
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
          {faq ? "Save FAQ" : "Create FAQ"}
        </Button>
      </form>
    </Form>
  );
}
