"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (prevState, formData) => {
  console.log(formData);
  const { title, desc, slug, userID } = Object.fromEntries(formData);
  console.log(userID);
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
    revalidatePath("/admin");
    console.log(`"${title}" post saved to DB`);
  } catch (err) {
    console.log(err);
    return { error: "Failed to connect to DB." };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await Post.findByIdAndDelete(id);
    console.log(`A post is deleted from DB`);
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong." };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, image } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newUser = new User({
      username,
      email,
      password,
      image,
    });

    await newUser.save();
    revalidatePath("/admin");
    console.log(`"A user saved to DB`);
  } catch (err) {
    console.log(err);
    return { error: "Failed to connect to DB." };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await Post.deleteMany({ userID: id });
    await User.findByIdAndDelete(id);
    console.log(`A user is deleted from DB`);
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong." };
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

export const register = async (prevState, formData) => {
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
    return { success: true };
  } catch (error) {
    console.log(error);
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password." };
    }
    throw error;
  }
};
