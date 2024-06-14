"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

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
    return { error: "Failed to connect to DB." };
  }
};

export const handleGitHubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (formData) => {
  const { username, email, image, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match." };
  }

  try {
    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists." };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      image,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("A user saved to DB");
  } catch (error) {
    console.log(error);
  }
};

export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
  }
};
