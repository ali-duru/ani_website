import Blog from "@/components/blog";
import blogs from "../blogs.json";

export default function Page() {
  const blog = blogs.find((b) => b.slug === "yeni-yatirimlar-2023");
  if (!blog) return <div>Blog not found</div>;
  return <Blog title={blog.title} date={blog.date} content={blog.content} />;
}
