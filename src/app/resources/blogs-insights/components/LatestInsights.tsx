import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import BlogCard from "./BlogCard";
import ScrollReveal from "@/components/animations/ScrollReveal";
import type { BlogPost } from "./blogData";

export default function LatestInsights({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-[#F7F8FA] pb-[80px] pt-[50px]">
      <div className="container">
        <ScrollReveal as="h2" className="m-0 text-[32px] font-semibold uppercase tracking-[0.04em] text-[#152D48]">
          Latest Insights
        </ScrollReveal>
        <StaggerContainer className="mt-[50px] grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {posts.map((post) => (
            <StaggerItem key={post.slug} className="h-full">
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
