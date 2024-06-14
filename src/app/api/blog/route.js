import { Post } from "@/lib/models";
import { connectToDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDB();
    console.log("test");
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
