import Image from "next/image";
import s from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={s.container}>
      <div className={s.top}>
        <div className={s.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/20721303/pexels-photo-20721303.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            fill
            className={s.image}
          />
        </div>
        <span className={s.date}>01.01.2024</span>
      </div>
      <div className={s.bottom}>
        <h3 className={s.title}>{post.title}</h3>
        <p className={s.desc}>{post.body}</p>
        <Link className={s.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
