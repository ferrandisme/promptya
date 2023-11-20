import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        PromptYa is a modern AI prompting tool. You can create, share, and find
        a lot of creative prompts. It's 100% free.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
