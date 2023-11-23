import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();
  try {
    //lambda function, stop after ending. needs each time to connect
    await connectToDB();

    const newPrompt = new Prompt({ creator: userId, prompt, tag });
    await newPrompt.save();

    res.setHeader(
      "Cache-Control",
      "no-cache, no-store, max-age=0, must-revalidate"
    );
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create new form", { status: 500 });
  }
};
