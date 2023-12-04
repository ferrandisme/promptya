import Feed from "@components/Feed";
import Link from "next/link";
import { connectToDB } from "@utils/database";

const Home = async () => {
  //This is need. First case if we don't have this, BD connection is not build.
  await connectToDB();
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        PromptYa is a modern AI prompting tool. You can create, share, and find
        a lot of creative prompts. It's 100% free.{" "}
        <Link
          href="https://github.com/ferrandisme/promptya"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Check Github repository
        </Link>
      </p>
      <Feed />
    </section>
  );
};

export default Home;
