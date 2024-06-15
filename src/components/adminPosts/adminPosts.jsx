import { getPosts } from "@/lib/data";
import s from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/action";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className={s.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={s.post} key={post.id}>
          <div className={s.detail}>
            <Image
              src={post.image || "/noavatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className={s.postTitle}>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={s.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
