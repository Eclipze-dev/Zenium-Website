import OptimizedImage from "@/components/OptimizedImage";
import { cn } from "@/lib/cn";

/**
 * Solution panel illustration.
 * - bounded={false} (default): desktop fills column with object-cover;
 *   tablet/mobile uses 16:9 frame + cover so landscape art is full-bleed and rounded
 * - bounded={true}: inset frame with object-contain so the full image stays visible
 */
export default function SolutionPanelImage({
  src,
  alt,
  bounded = false,
  sizes = "(max-width: 1280px) 100vw, 640px",
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  bounded?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  if (bounded) {
    return (
      <div
        className={cn(
          "w-full self-center overflow-hidden rounded-[16px] bg-[#0A1725] p-3 sm:p-4",
          className,
        )}
      >
        <OptimizedImage
          src={src}
          alt={alt}
          width={1200}
          height={1200}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full rounded-[16px] object-contain"
        />
      </div>
    );
  }

  return (
    <>
      {/* Tablet / mobile (stacked): 16:9 full-bleed + rounded (matches HES/MDM/analytics art) */}
      <div
        className={cn(
          "relative aspect-video w-full overflow-hidden rounded-[16px] xl:hidden",
          className,
        )}
      >
        <OptimizedImage
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="rounded-[16px] object-cover object-center"
        />
      </div>

      {/* Desktop (side-by-side): fill column height */}
      <div
        className={cn(
          "relative hidden min-h-[280px] w-full overflow-hidden rounded-[16px] xl:block xl:h-full",
          className,
        )}
      >
        <OptimizedImage
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="rounded-[16px] object-cover object-center"
        />
      </div>
    </>
  );
}
