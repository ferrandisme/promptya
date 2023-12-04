export const dynamic = "force-dynamic";
export const revalidate = 1;

import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, response) => {
  try {
    //lambda function, stop after ending. needs each time to connect
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all prompts: " + error, {
      status: 500,
    });
  }
};
