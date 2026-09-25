import { query, queryOne } from "@/lib/cms/db";
import type {
  CmsActivity,
  CmsAdmin,
  CmsAdminPublic,
  CmsBlogPost,
  CmsEnquiry,
  CmsFaq,
  CmsMedia,
  CmsPage,
  CmsPageSection,
  CmsSetting,
  CmsSmartMeterGuideEntry,
  FaqPageKey,
} from "@/types/cms";

const ADMIN_PUBLIC_FIELDS =
  "id, email, name, role, status, last_login_at, created_at, updated_at";

export async function countPages() {
  const row = await queryOne<{ total: number }>(
    "SELECT COUNT(*) AS total FROM pages",
  );
  return Number(row?.total ?? 0);
}

export async function countAdmins() {
  const row = await queryOne<{ total: number }>(
    "SELECT COUNT(*) AS total FROM admins",
  );
  return Number(row?.total ?? 0);
}

export async function countMedia() {
  const row = await queryOne<{ total: number }>(
    "SELECT COUNT(*) AS total FROM media",
  );
  return Number(row?.total ?? 0);
}

export async function listRecentActivity(limit = 8): Promise<CmsActivity[]> {
  const safeLimit = Math.min(Math.max(Math.trunc(limit) || 8, 1), 50);
  return query<CmsActivity>(
    `SELECT a.id, a.admin_id, a.action, a.entity, a.entity_id, a.created_at,
            adm.name AS admin_name, adm.email AS admin_email
     FROM activity_log a
     LEFT JOIN admins adm ON adm.id = a.admin_id
     ORDER BY a.created_at DESC
     LIMIT ${safeLimit}`,
  );
}

export async function listPages(): Promise<CmsPage[]> {
  return query<CmsPage>(
    `SELECT id, title, slug, content, status, seo_title, seo_description,
            created_by, updated_by, created_at, updated_at
     FROM pages
     ORDER BY updated_at DESC`,
  );
}

export async function getPageById(id: number): Promise<CmsPage | null> {
  return queryOne<CmsPage>(
    `SELECT id, title, slug, content, status, seo_title, seo_description,
            created_by, updated_by, created_at, updated_at
     FROM pages
     WHERE id = ?
     LIMIT 1`,
    [id],
  );
}

export async function getPageBySlug(
  slug: string,
  excludeId?: number,
): Promise<CmsPage | null> {
  if (excludeId) {
    return queryOne<CmsPage>(
      "SELECT id, slug FROM pages WHERE slug = ? AND id <> ? LIMIT 1",
      [slug, excludeId],
    );
  }
  return queryOne<CmsPage>(
    "SELECT id, slug FROM pages WHERE slug = ? LIMIT 1",
    [slug],
  );
}

export async function listMedia(): Promise<CmsMedia[]> {
  return query<CmsMedia>(
    `SELECT id, filename, original_name, mime_type, size_bytes, url, uploaded_by, created_at
     FROM media
     ORDER BY created_at DESC`,
  );
}

export async function getMediaById(id: number): Promise<CmsMedia | null> {
  return queryOne<CmsMedia>(
    `SELECT id, filename, original_name, mime_type, size_bytes, url, uploaded_by, created_at
     FROM media
     WHERE id = ?
     LIMIT 1`,
    [id],
  );
}

export async function listAdmins(): Promise<CmsAdminPublic[]> {
  return query<CmsAdminPublic>(
    `SELECT ${ADMIN_PUBLIC_FIELDS} FROM admins ORDER BY created_at DESC`,
  );
}

export async function getAdminById(id: number): Promise<CmsAdmin | null> {
  return queryOne<CmsAdmin>(
    `SELECT id, email, password_hash, name, role, status, last_login_at, created_at, updated_at
     FROM admins
     WHERE id = ?
     LIMIT 1`,
    [id],
  );
}

export async function getAdminByEmail(
  email: string,
  excludeId?: number,
): Promise<CmsAdminPublic | null> {
  if (excludeId) {
    return queryOne<CmsAdminPublic>(
      `SELECT ${ADMIN_PUBLIC_FIELDS} FROM admins WHERE email = ? AND id <> ? LIMIT 1`,
      [email, excludeId],
    );
  }
  return queryOne<CmsAdminPublic>(
    `SELECT ${ADMIN_PUBLIC_FIELDS} FROM admins WHERE email = ? LIMIT 1`,
    [email],
  );
}

export async function listSettings(): Promise<CmsSetting[]> {
  return query<CmsSetting>("SELECT `key`, `value`, updated_at FROM settings ORDER BY `key`");
}

export async function getPublishedPageBySlug(
  slug: string,
): Promise<CmsPage | null> {
  return queryOne<CmsPage>(
    `SELECT id, title, slug, content, status, seo_title, seo_description,
            created_by, updated_by, created_at, updated_at
     FROM pages
     WHERE slug = ? AND status = 'published'
     LIMIT 1`,
    [slug],
  );
}

export async function listPageSections(pageId: number): Promise<CmsPageSection[]> {
  return query<CmsPageSection>(
    `SELECT id, page_id, section_key, heading, body, sort_order, enabled,
            created_at, updated_at
     FROM page_sections
     WHERE page_id = ?
     ORDER BY sort_order ASC, id ASC`,
    [pageId],
  );
}

export async function getPageSectionById(
  id: number,
): Promise<CmsPageSection | null> {
  return queryOne<CmsPageSection>(
    `SELECT id, page_id, section_key, heading, body, sort_order, enabled,
            created_at, updated_at
     FROM page_sections
     WHERE id = ?
     LIMIT 1`,
    [id],
  );
}

export async function listEnquiries(): Promise<CmsEnquiry[]> {
  return query<CmsEnquiry>(
    `SELECT id, first_name, last_name, email, company, phone, interest, message, created_at
     FROM enquiries
     ORDER BY created_at DESC, id DESC`,
  );
}

export async function getEnquiryById(id: number): Promise<CmsEnquiry | null> {
  return queryOne<CmsEnquiry>(
    `SELECT id, first_name, last_name, email, company, phone, interest, message, created_at
     FROM enquiries
     WHERE id = ?
     LIMIT 1`,
    [id],
  );
}

export async function listFaqs(pageKey?: FaqPageKey): Promise<CmsFaq[]> {
  if (pageKey) {
    return query<CmsFaq>(
      `SELECT id, page_key, question, answer, sort_order, enabled, created_at, updated_at
       FROM faqs
       WHERE page_key = ?
       ORDER BY sort_order ASC, id ASC`,
      [pageKey],
    );
  }
  return query<CmsFaq>(
    `SELECT id, page_key, question, answer, sort_order, enabled, created_at, updated_at
     FROM faqs
     ORDER BY page_key ASC, sort_order ASC, id ASC`,
  );
}

export async function listEnabledFaqs(pageKey: FaqPageKey): Promise<CmsFaq[]> {
  return query<CmsFaq>(
    `SELECT id, page_key, question, answer, sort_order, enabled, created_at, updated_at
     FROM faqs
     WHERE page_key = ? AND enabled = 1
     ORDER BY sort_order ASC, id ASC`,
    [pageKey],
  );
}

export async function getFaqById(id: number): Promise<CmsFaq | null> {
  return queryOne<CmsFaq>(
    `SELECT id, page_key, question, answer, sort_order, enabled, created_at, updated_at
     FROM faqs
     WHERE id = ?
     LIMIT 1`,
    [id],
  );
}

export async function listGuideEntries(): Promise<CmsSmartMeterGuideEntry[]> {
  return query<CmsSmartMeterGuideEntry>(
    `SELECT id, image_url, display_code, description, manufacturer_model_notes,
            category, sort_order, enabled, alt_text, created_at, updated_at
     FROM smart_meter_guide_entries
     ORDER BY sort_order ASC, id ASC`,
  );
}

export async function listEnabledGuideEntries(): Promise<
  CmsSmartMeterGuideEntry[]
> {
  return query<CmsSmartMeterGuideEntry>(
    `SELECT id, image_url, display_code, description, manufacturer_model_notes,
            category, sort_order, enabled, alt_text, created_at, updated_at
     FROM smart_meter_guide_entries
     WHERE enabled = 1
     ORDER BY sort_order ASC, id ASC`,
  );
}

export async function getGuideEntryById(
  id: number,
): Promise<CmsSmartMeterGuideEntry | null> {
  return queryOne<CmsSmartMeterGuideEntry>(
    `SELECT id, image_url, display_code, description, manufacturer_model_notes,
            category, sort_order, enabled, alt_text, created_at, updated_at
     FROM smart_meter_guide_entries
     WHERE id = ?
     LIMIT 1`,
    [id],
  );
}

export async function listBlogPosts(): Promise<CmsBlogPost[]> {
  return query<CmsBlogPost>(
    `SELECT id, title, slug, excerpt, content, featured_image_url, alt_text,
            category, tags, meta_title, meta_description, status,
            created_by, updated_by, published_at, created_at, updated_at
     FROM blog_posts
     ORDER BY updated_at DESC`,
  );
}

export async function listPublishedBlogPosts(): Promise<CmsBlogPost[]> {
  return query<CmsBlogPost>(
    `SELECT id, title, slug, excerpt, content, featured_image_url, alt_text,
            category, tags, meta_title, meta_description, status,
            created_by, updated_by, published_at, created_at, updated_at
     FROM blog_posts
     WHERE status = 'published'
     ORDER BY COALESCE(published_at, created_at) DESC`,
  );
}

export async function getBlogPostById(id: number): Promise<CmsBlogPost | null> {
  return queryOne<CmsBlogPost>(
    `SELECT id, title, slug, excerpt, content, featured_image_url, alt_text,
            category, tags, meta_title, meta_description, status,
            created_by, updated_by, published_at, created_at, updated_at
     FROM blog_posts
     WHERE id = ?
     LIMIT 1`,
    [id],
  );
}

export async function getBlogPostBySlug(
  slug: string,
  excludeId?: number,
): Promise<CmsBlogPost | null> {
  if (excludeId) {
    return queryOne<CmsBlogPost>(
      `SELECT id, title, slug, excerpt, content, featured_image_url, alt_text,
              category, tags, meta_title, meta_description, status,
              created_by, updated_by, published_at, created_at, updated_at
       FROM blog_posts
       WHERE slug = ? AND id <> ?
       LIMIT 1`,
      [slug, excludeId],
    );
  }
  return queryOne<CmsBlogPost>(
    `SELECT id, title, slug, excerpt, content, featured_image_url, alt_text,
            category, tags, meta_title, meta_description, status,
            created_by, updated_by, published_at, created_at, updated_at
     FROM blog_posts
     WHERE slug = ?
     LIMIT 1`,
    [slug],
  );
}

export async function getPublishedBlogPostBySlug(
  slug: string,
): Promise<CmsBlogPost | null> {
  return queryOne<CmsBlogPost>(
    `SELECT id, title, slug, excerpt, content, featured_image_url, alt_text,
            category, tags, meta_title, meta_description, status,
            created_by, updated_by, published_at, created_at, updated_at
     FROM blog_posts
     WHERE slug = ? AND status = 'published'
     LIMIT 1`,
    [slug],
  );
}

export async function countFaqs() {
  const row = await queryOne<{ total: number }>(
    "SELECT COUNT(*) AS total FROM faqs",
  );
  return Number(row?.total ?? 0);
}

export async function countBlogPosts() {
  const row = await queryOne<{ total: number }>(
    "SELECT COUNT(*) AS total FROM blog_posts",
  );
  return Number(row?.total ?? 0);
}

export async function countEnquiries() {
  const row = await queryOne<{ total: number }>(
    "SELECT COUNT(*) AS total FROM enquiries",
  );
  return Number(row?.total ?? 0);
}

export async function countGuideEntries() {
  const row = await queryOne<{ total: number }>(
    "SELECT COUNT(*) AS total FROM smart_meter_guide_entries",
  );
  return Number(row?.total ?? 0);
}

export type EnquiryDayCount = { day: string; total: number };
export type EnquiryInterestCount = { interest: string; total: number };

export async function listEnquiryCountsByDay(days = 14): Promise<EnquiryDayCount[]> {
  const span = Math.min(Math.max(Math.trunc(days) || 14, 1), 90);
  const rows = await query<{ day: Date | string; total: number }>(
    `SELECT DATE(created_at) AS day, COUNT(*) AS total
     FROM enquiries
     WHERE created_at >= DATE_SUB(UTC_DATE(), INTERVAL ${span - 1} DAY)
     GROUP BY DATE(created_at)
     ORDER BY day ASC`,
  );
  return rows.map((row) => ({
    day: row.day instanceof Date ? row.day.toISOString().slice(0, 10) : String(row.day).slice(0, 10),
    total: Number(row.total ?? 0),
  }));
}

export async function listEnquiryCountsByInterest(): Promise<EnquiryInterestCount[]> {
  const rows = await query<{ interest: string; total: number }>(
    `SELECT interest, COUNT(*) AS total
     FROM enquiries
     GROUP BY interest
     ORDER BY total DESC, interest ASC`,
  );
  return rows.map((row) => ({
    interest: row.interest,
    total: Number(row.total ?? 0),
  }));
}

export async function getDashboardData() {
  const [pages, users, media, activity, faqs, posts, enquiries, guide, enquiryDays, enquiryInterests] =
    await Promise.all([
      countPages(),
      countAdmins(),
      countMedia(),
      listRecentActivity(),
      countFaqs(),
      countBlogPosts(),
      countEnquiries(),
      countGuideEntries(),
      listEnquiryCountsByDay(14),
      listEnquiryCountsByInterest(),
    ]);
  return {
    pages,
    users,
    media,
    activity,
    faqs,
    posts,
    enquiries,
    guide,
    enquiryDays,
    enquiryInterests,
  };
}
