import PostCard from "@/components/postCard/postCard";
import s from "./blog.module.css";
import { getPosts } from "@/lib/data";

export const metadata = {
  title: "Blog Page",
  description: "Next.js 14 pet project, 2024",
};

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//   if (!res.ok) throw new Error("Something went wrong");

//   return res.json();
// };

const Blog = async () => {
  const posts = await getPosts();

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
