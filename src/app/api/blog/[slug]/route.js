import { Post } from "@/lib/models";
import { connectToDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDB();
    console.log("test");
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDB();
    await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted.");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
