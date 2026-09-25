export type AdminRole = "admin" | "editor";
export type AdminStatus = "active" | "disabled";
export type PageStatus = "draft" | "published";
export type FaqPageKey = "ami" | "hes" | "mdms";

export type CmsAdmin = {
  id: number;
  email: string;
  password_hash: string;
  name: string;
  role: AdminRole;
  status: AdminStatus;
  last_login_at: Date | string | null;
  created_at: Date | string;
  updated_at: Date | string;
};

export type CmsAdminPublic = Omit<CmsAdmin, "password_hash">;

export type CmsPage = {
  id: number;
  title: string;
  slug: string;
  content: string | null;
  status: PageStatus;
  seo_title: string | null;
  seo_description: string | null;
  created_by: number | null;
  updated_by: number | null;
  created_at: Date | string;
  updated_at: Date | string;
};

export type CmsPageSection = {
  id: number;
  page_id: number;
  section_key: string;
  heading: string | null;
  body: string | null;
  sort_order: number;
  enabled: boolean | number;
  created_at: Date | string;
  updated_at: Date | string;
};

export type CmsFaq = {
  id: number;
  page_key: FaqPageKey;
  question: string;
  answer: string;
  sort_order: number;
  enabled: boolean | number;
  created_at: Date | string;
  updated_at: Date | string;
};

export type CmsSmartMeterGuideEntry = {
  id: number;
  image_url: string | null;
  display_code: string | null;
  description: string | null;
  manufacturer_model_notes: string | null;
  category: string | null;
  sort_order: number;
  enabled: boolean | number;
  alt_text: string | null;
  created_at: Date | string;
  updated_at: Date | string;
};

export type CmsBlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  featured_image_url: string | null;
  alt_text: string | null;
  category: string | null;
  tags: string | null;
  meta_title: string | null;
  meta_description: string | null;
  status: PageStatus;
  created_by: number | null;
  updated_by: number | null;
  published_at: Date | string | null;
  created_at: Date | string;
  updated_at: Date | string;
};

export type CmsMedia = {
  id: number;
  filename: string;
  original_name: string;
  mime_type: string;
  size_bytes: number;
  url: string;
  uploaded_by: number | null;
  created_at: Date | string;
};

export type CmsSetting = {
  key: string;
  value: string | null;
  updated_at: Date | string;
};

export type CmsEnquiry = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
  created_at: Date | string;
};

export type CmsActivity = {
  id: number;
  admin_id: number | null;
  action: string;
  entity: string;
  entity_id: string | null;
  created_at: Date | string;
  admin_name?: string | null;
  admin_email?: string | null;
};
