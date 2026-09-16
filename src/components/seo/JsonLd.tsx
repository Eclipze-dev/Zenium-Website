import {
  breadcrumbListSchema,
  type BreadcrumbItem,
} from "@/lib/seo/jsonld";

export default function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PageJsonLd({
  trail,
  extra = [],
}: {
  trail: BreadcrumbItem[];
  extra?: object[];
}) {
  return (
    <JsonLd
      data={[breadcrumbListSchema(trail), ...(extra as Record<string, unknown>[])]}
    />
  );
}
