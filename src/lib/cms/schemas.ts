import { z } from "zod";

export const pageSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(255),
  slug: z
    .string()
    .trim()
    .min(1, "Slug is required")
    .max(255)
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*$/,
      "Use lowercase letters, numbers, hyphens, and optional path segments",
    ),
  content: z.string().optional(),
  status: z.enum(["draft", "published"]),
  seo_title: z.string().trim().max(255).optional(),
  seo_description: z.string().trim().max(512).optional(),
});

export const pageStatusSchema = z.object({
  id: z.number().int().positive(),
  status: z.enum(["draft", "published"]),
});

export const pageSectionSchema = z.object({
  section_key: z
    .string()
    .trim()
    .min(1, "Section key is required")
    .max(128)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers, and hyphens"),
  heading: z.string().trim().max(255).optional(),
  body: z.string().optional(),
  sort_order: z.number().int().min(0),
  enabled: z.boolean(),
});

export const faqSchema = z.object({
  page_key: z.enum(["ami", "hes", "mdms"]),
  question: z.string().trim().min(1, "Question is required").max(512),
  answer: z.string().trim().min(1, "Answer is required"),
  sort_order: z.number().int().min(0),
  enabled: z.boolean(),
});

export const guideEntrySchema = z.object({
  image_url: z.string().trim().max(512).optional(),
  display_code: z.string().trim().max(128).optional(),
  description: z.string().optional(),
  manufacturer_model_notes: z.string().trim().max(512).optional(),
  category: z.string().trim().max(128).optional(),
  sort_order: z.number().int().min(0),
  enabled: z.boolean(),
  alt_text: z.string().trim().max(512).optional(),
});

export const blogPostSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(255),
  slug: z
    .string()
    .trim()
    .min(1, "Slug is required")
    .max(255)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers, and hyphens"),
  excerpt: z.string().optional(),
  content: z.string().optional(),
  featured_image_url: z.string().trim().max(512).optional(),
  alt_text: z.string().trim().max(512).optional(),
  category: z.string().trim().max(128).optional(),
  tags: z.string().optional(),
  meta_title: z.string().trim().max(255).optional(),
  meta_description: z.string().trim().max(512).optional(),
  status: z.enum(["draft", "published"]),
});

export const userCreateSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(255),
  email: z.email("Enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["admin", "editor"]),
  status: z.enum(["active", "disabled"]),
});

export const userUpdateSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().trim().min(1, "Name is required").max(255),
  email: z.email("Enter a valid email"),
  password: z
    .union([z.string().min(8, "Password must be at least 8 characters"), z.literal("")])
    .optional(),
  role: z.enum(["admin", "editor"]),
  status: z.enum(["active", "disabled"]),
});

export const settingsSchema = z.object({
  site_name: z.string().trim().max(255),
  logo: z.string().trim().max(512),
  favicon: z.string().trim().max(512),
  contact_email: z.string().trim().max(255),
  contact_phone: z.string().trim().max(64),
  contact_address: z.string().trim().max(512),
});

export type PageInput = z.infer<typeof pageSchema>;
export type PageSectionInput = z.infer<typeof pageSectionSchema>;
export type FaqInput = z.infer<typeof faqSchema>;
export type GuideEntryInput = z.infer<typeof guideEntrySchema>;
export type BlogPostInput = z.infer<typeof blogPostSchema>;
export type UserCreateInput = z.infer<typeof userCreateSchema>;
export type UserUpdateInput = z.infer<typeof userUpdateSchema>;
export type SettingsInput = z.infer<typeof settingsSchema>;
