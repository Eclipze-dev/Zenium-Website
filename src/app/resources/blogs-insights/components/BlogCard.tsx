import Link from "next/link";
import OptimizedImage from "@/components/OptimizedImage";
import { BLOG_INDEX_PATH } from "@/lib/seo/paths";
import { blogTitle, type BlogPost } from "./blogData";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[12px] bg-white p-5 shadow-[0_8px_30px_rgba(21,45,72,0.08)]">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[8px]">
        <OptimizedImage
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <p className="mb-0 mt-5 text-[13px] font-semibold uppercase tracking-[0.04em] text-[#5A6B7C]">
        {post.label}
      </p>
      <h2 className="m-0 mt-5 text-[22px] font-semibold leading-[1.25] text-[#152D48]">
        <Link href={`${BLOG_INDEX_PATH}/${post.slug}`}>{blogTitle(post)}</Link>
      </h2>
      <p className="mb-0 mt-5 line-clamp-3 text-[15px] leading-[1.55] text-[#5A6B7C]">
        {post.excerpt}
      </p>
      <Link
        href={`${BLOG_INDEX_PATH}/${post.slug}`}
        className="mt-auto pt-5 text-[15px] font-medium !text-[#F07F25]"
      >
        {post.cta} →
      </Link>
    </article>
  );
}
