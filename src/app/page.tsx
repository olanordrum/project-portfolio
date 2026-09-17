"use client";
import { PostList } from "../components/post-list";
import { usePosts } from "../hooks/usePosts";
import WaveAnimation from "../components/WaveAnimation";
import BoogieAnimation from "../components/BoogieAnimation";

export default function Home() {
  const { posts, loading, error } = usePosts();

  if (error)
    return (
      <p className="text-sm text-red-500 p-8">Failed to load posts: {error}</p>
    );
  if (!loading || !posts)
    return (
      <div className="min-h-screen flex flex-1 items-center justify-center">
        <BoogieAnimation />
      </div>
    );

  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="w-full">
      {/*About*/}
      <section className="relative w-full bg-white min-h-[100vh] flex flex-row items-center justify-center">
        <div className="w-full md:max-w-2xl lg:max-w-3xl px-10 py-16">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl mb-2">
            Hey there!
          </h1>
          <p className="lg:text-2xl">
            My name is Ola, as a curious creative and critical thinker, I love
            to explore the world around me, understand how things work, and
            brainstorm ways to improve people's lives through innovation and
            creative problem-solving. With my varied background, I bring a
            unique set of skill sets and perspective into my work. Take a look
            at work below and feel free to contact me with any questions!
          </p>
        </div>
        <img
          src={"../../Smiling_Dude.png"}
          alt="backflip animation"
          className="absolute bottom-0 left-[80%] h-15 md:h-25 lg:h-25 w-auto object-contain"
        />
      </section>

      {/*Projects*/}
      <section
        id="projects"
        className="w-full min-h-[100vh] md:max-w-2xl lg:max-w-2xl mx-auto px-10 py-30 flex flex-col gap-12"
      >
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">
            Featured work
          </h1>
          <p className="text-sm text-neutral-500">Current and previous work</p>
        </div>

        {featured.length > 0 && <PostList posts={featured} title="Ongoing" />}

        {rest.length > 0 && <PostList posts={rest} title="All Projects" />}

        {posts.length === 0 && (
          <p className="text-sm text-neutral-400">No posts yet.</p>
        )}
      </section>
    </div>
  );
}
