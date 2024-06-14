import Image from "next/image";
import s from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) throw new Error("Something went wrong");

  return res.json();
};

const SinglePost = async ({ params }) => {
  const { slug } = params;

  const post = await getData(slug);

  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Image src={post.image} alt="" fill className={s.image} />
      </div>
      <div className={s.textContainer}>
        <h3 className={s.title}>{post.title}</h3>
        <div className={s.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userID={post.userID} />
            </Suspense>
          )}
          <div className={s.detailText}>
            <span className={s.detailTitle}>Published</span>
            <span className={s.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={s.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePost;
