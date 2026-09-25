"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Copy, Trash2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { deleteMediaAction } from "@/lib/cms/actions/media";
import type { CmsMedia } from "@/types/cms";

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function MediaLibrary({ items }: { items: CmsMedia[] }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  async function onUpload(fileList: FileList | null) {
    const file = fileList?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const body = new FormData();
      body.append("file", file);
      const response = await fetch("/api/admin/media", { method: "POST", body });
      const payload = (await response.json()) as { message?: string };
      if (!response.ok) {
        toast.error(payload.message || "Upload failed");
        return;
      }
      toast.success("Image uploaded");
      router.refresh();
    } catch {
      toast.error("Upload failed");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  async function copyUrl(url: string) {
    const absolute = url.startsWith("http")
      ? url
      : `${window.location.origin}${url}`;
    await navigator.clipboard.writeText(absolute);
    toast.success("URL copied");
  }

  return (
    <div className="space-y-6">
      <div>
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml"
          className="hidden"
          onChange={(event) => onUpload(event.target.files)}
        />
        <Button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
        >
          <Upload className="h-4 w-4" />
          {uploading ? "Uploading…" : "Upload image"}
        </Button>
      </div>
      {items.length === 0 ? (
        <p className="text-sm text-muted-foreground">No media yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="flex h-40 items-center justify-center bg-secondary">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.url}
                    alt={item.original_name}
                    className="h-full w-full object-contain"
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-1 pt-4">
                <CardTitle className="truncate text-sm">{item.original_name}</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {formatBytes(item.size_bytes)}
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => copyUrl(item.url)}
                >
                  <Copy className="h-4 w-4" />
                  Copy URL
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={async () => {
                    if (!confirm(`Delete ${item.original_name}?`)) return;
                    const result = await deleteMediaAction(item.id);
                    if (!result.ok) {
                      toast.error(result.error);
                      return;
                    }
                    toast.success("Media deleted");
                    router.refresh();
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
