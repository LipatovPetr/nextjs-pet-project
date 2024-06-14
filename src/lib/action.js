"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDB } from "./utils";

export const addPost = async (formData) => {
  //   const title = formData.get("title");
  //   const desc = formData.get("desc");
  //   const slug = formData.get("slug");
  //   const userID = formData.get("userID");

  const { title, desc, slug, userID } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newPost = new Post({
      title,
      desc,
      slug,
      userID,
    });

    await newPost.save();
    revalidatePath("/blog");
    console.log(`"${title}" post saved to DB`);
  } catch (err) {
    console.log(err);
  }
};
