import { getUser } from "@/lib/data";
import s from "./postUser.module.css";
import Image from "next/image";

// const getData = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) throw new Error("Something went wrong");

//   return res.json();
// };

async function PostUser({ userID }) {
  const user = await getUser(userID);

  return (
    <div className={s.container}>
      <Image
        className={s.avatar}
        src={user.image ? user.image : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className={s.texts}>
        <span className={s.title}>Author</span>
        <span className={s.username}>{user?.username}</span>
      </div>
    </div>
  );
}

export default PostUser;
