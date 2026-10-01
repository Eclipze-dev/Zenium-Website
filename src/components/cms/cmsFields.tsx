"use client";

import * as React from "react";
import { cn } from "@/lib/cn";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SelectTrigger } from "@/components/ui/select";
import { FormLabel } from "@/components/ui/form";

export const fieldClass =
  "h-11 rounded-xl border-border bg-background px-4 text-[15px] shadow-none placeholder:text-muted-foreground focus-visible:ring-ring md:text-[15px]";

export const areaClass =
  "min-h-28 resize-y rounded-xl border-border bg-background px-4 py-3 text-[15px] shadow-none placeholder:text-muted-foreground focus-visible:ring-ring md:text-[15px]";

const triggerClass =
  "h-11 rounded-xl border-border bg-background px-4 text-[15px] shadow-none focus:ring-ring";

const labelClass = "text-[13px] font-medium text-foreground";

export const formShellClass =
  "max-w-3xl space-y-5 rounded-2xl bg-card p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] sm:p-8";

export const submitClass = "h-11 rounded-xl px-5 text-[15px]";

export const CmsInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => (
  <Input ref={ref} className={cn(fieldClass, className)} {...props} />
));
CmsInput.displayName = "CmsInput";

export const CmsTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<typeof Textarea>
>(({ className, ...props }, ref) => (
  <Textarea ref={ref} className={cn(areaClass, className)} {...props} />
));
CmsTextarea.displayName = "CmsTextarea";

export const CmsSelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectTrigger>,
  React.ComponentPropsWithoutRef<typeof SelectTrigger>
>(({ className, ...props }, ref) => (
  <SelectTrigger ref={ref} className={cn(triggerClass, className)} {...props} />
));
CmsSelectTrigger.displayName = "CmsSelectTrigger";

export const CmsFormLabel = React.forwardRef<
  React.ElementRef<typeof FormLabel>,
  React.ComponentPropsWithoutRef<typeof FormLabel>
>(({ className, ...props }, ref) => (
  <FormLabel ref={ref} className={cn(labelClass, className)} {...props} />
));
CmsFormLabel.displayName = "CmsFormLabel";
