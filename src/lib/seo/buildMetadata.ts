import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "./site";
import type { PageSeo } from "./pages";

export function buildPageMetadata(page: PageSeo): Metadata {
  const url = `${SITE_URL}${page.path}`;
  const index = page.index !== false;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
      images: [{ url: DEFAULT_OG_IMAGE, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}
