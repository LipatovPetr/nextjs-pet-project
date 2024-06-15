"use client";

import { addPost } from "@/lib/action";
import s from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userID }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className={s.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userID" value={userID} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea type="text" name="desc" placeholder="desc" rows={10} />
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
