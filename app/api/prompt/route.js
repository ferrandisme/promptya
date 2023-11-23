import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, response) => {
  try {
    //lambda function, stop after ending. needs each time to connect
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator").lean().exec();

    const headers = new Headers();
    headers.append(
      "Cache-Control",
      "no-cache, no-store, max-age=0, must-revalidate"
    );

    return new Response(JSON.stringify(prompts), {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    return new Response("Failed to fetch all prompts: " + error, {
      status: 500,
    });
  }
};
