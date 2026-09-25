import type { Metadata } from "next";
import MediaLibrary from "@/components/cms/MediaLibrary";
import { listMedia } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Media Library" };

export default async function AdminMediaPage() {
  const items = await listMedia();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Media Library</h1>
        <p className="text-sm text-muted-foreground">
          Upload images to public/uploads. Preserve that folder on Hostinger ZIP redeploys.
        </p>
      </div>
      <MediaLibrary items={JSON.parse(JSON.stringify(items))} />
    </div>
  );
}
