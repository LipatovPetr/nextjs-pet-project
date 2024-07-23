import PostCard from "@/components/postCard/postCard";
import s from "./blog.module.css";
// import { getPosts } from "@/lib/data";

export const metadata = {
  title: "Blog Page",
  description: "Next.js 14 pet project, 2024",
};

const getData = async () => {
  // const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`/api/blog`);

  if (!res.ok) throw new Error("Something went wrong");

  return res.json();
};

const Blog = async () => {
  const posts = await getData();

  return (
    <div className={s.container}>
      {posts.map((post) => (
        <div className={s.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
