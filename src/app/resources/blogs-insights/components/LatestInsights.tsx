import BlogCard from "./BlogCard";
import type { BlogPost } from "./blogData";

export default function LatestInsights({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-[#F7F8FA] pb-[80px] pt-[50px]">
      <div className="container">
        <h2 className="m-0 text-[32px] font-semibold uppercase tracking-[0.04em] text-[#152D48]">
          Latest Insights
        </h2>
        <div className="mt-[50px] grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
