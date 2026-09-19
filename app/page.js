import BlogCard from "@/components/BlogCard";

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="max-w-5xl mx-auto px-6">
      <div className="py-14 md:py-20">
        <p className="font-mono-meta text-[11px] uppercase tracking-[0.08em] text-[#787774] mb-4">
          MyBlog — Lab 01
        </p>
        <h1 className="font-serif-ed text-[36px] md:text-[48px] text-[#111111]">
          Latest posts.
        </h1>
        <p className="mt-3 text-[14px] text-[#6F6E69]">
          A simple blog listing page built with Next.js and Tailwind CSS.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        {posts.slice(0, 12).map((post, idx) => (
          <BlogCard key={post.id} post={post} index={idx} />
        ))}
      </div>
    </main>
  );
}
