import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import Badge from "@/components/Badge";
import Reveal from "@/components/Reveal";

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();
  const [latest, ...rest] = posts;

  return (
    <main className="max-w-5xl mx-auto px-6">
      {/* Hero — newest post */}
      <div className="py-14 md:py-20">
        <Reveal>
          <p className="font-mono-meta text-[11px] uppercase tracking-[0.08em] text-[#787774] mb-6">
            MyBlog — Lab 01
          </p>
        </Reveal>

        {latest && (
          <Reveal>
            <article className="bg-white border border-[#EAEAEA] rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-[#F7F6F3] min-h-64 md:min-h-full">
                  <img
                    src={`https://picsum.photos/seed/lab1-${latest.id}/1000/700`}
                    alt={latest.title}
                    className="w-full h-64 md:h-full object-cover saturate-[0.82] contrast-[1.02]"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge label="Latest" />
                    <span className="font-mono-meta text-[11px] text-[#787774]">
                      User {latest.userId}
                    </span>
                  </div>
                  <h1 className="font-serif-ed text-[30px] md:text-[38px] text-[#111111] mb-4 line-clamp-3">
                    {latest.title}
                  </h1>
                  <p className="text-[14px] leading-6 text-[#6F6E69] line-clamp-3 mb-8">
                    {latest.body}
                  </p>
                  <div>
                    <Link
                      href={`/blog/${latest.id}`}
                      className="inline-block bg-[#111111] text-white px-5 py-2.5 rounded-md text-[13px] font-medium hover:bg-[#333333] active:scale-[0.98] transition-all"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        )}
      </div>

      {/* More posts */}
      <div className="pb-20">
        <Reveal>
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif-ed text-[26px] text-[#111111]">More posts</h2>
            <Link
              href="/articles"
              className="text-[13px] font-medium text-[#37352F] hover:text-black transition-colors"
            >
              View all articles
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.slice(0, 6).map((post, idx) => (
            <BlogCard key={post.id} post={post} index={idx} />
          ))}
        </div>
      </div>
    </main>
  );
}
