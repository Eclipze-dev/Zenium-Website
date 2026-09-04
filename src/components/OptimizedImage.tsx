import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/cn";

type OptimizedImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  /** Use for above-the-fold heroes; defaults to lazy. */
  priority?: boolean;
};

/** Shared next/image wrapper — WebP sources + responsive sizing without raw <img>. */
const OptimizedImage = ({
  className,
  alt,
  sizes = "100vw",
  priority = false,
  ...props
}: OptimizedImageProps) => {
  return (
    <Image
      alt={alt}
      sizes={sizes}
      priority={priority}
      className={cn(className)}
      {...props}
    />
  );
};

export default OptimizedImage;
