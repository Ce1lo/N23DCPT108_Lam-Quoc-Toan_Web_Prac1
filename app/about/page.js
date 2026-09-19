export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6">
      <div className="py-14 md:py-20">
        <p className="font-mono-meta text-[11px] uppercase tracking-[0.08em] text-[#787774] mb-4">
          About
        </p>
        <h1 className="font-serif-ed text-[36px] md:text-[48px] text-[#111111]">
          About this blog.
        </h1>
      </div>

      <div className="pb-20 space-y-10">
        <section className="bg-white border border-[#EAEAEA] rounded-xl p-8">
          <h2 className="font-serif-ed text-[22px] text-[#111111] mb-3">
            What it is
          </h2>
          <p className="text-[14px] leading-7 text-[#37352F]">
            MyBlog is a lab exercise: a blog listing page built with Next.js
            App Router and Tailwind CSS. Posts are fetched from a public REST
            API and rendered as server components in a responsive grid.
          </p>
        </section>

        <section className="bg-white border border-[#EAEAEA] rounded-xl p-8">
          <h2 className="font-serif-ed text-[22px] text-[#111111] mb-3">
            How it is built
          </h2>
          <ul className="text-[14px] leading-7 text-[#37352F] space-y-2">
            <li>
              <span className="font-mono-meta text-[12px] text-[#111111]">app/page.js</span>
              {" — "}fetches posts and renders the home page.
            </li>
            <li>
              <span className="font-mono-meta text-[12px] text-[#111111]">app/articles/page.js</span>
              {" — "}the full article archive.
            </li>
            <li>
              <span className="font-mono-meta text-[12px] text-[#111111]">app/blog/[id]/page.js</span>
              {" — "}detail page for a single post.
            </li>
            <li>
              <span className="font-mono-meta text-[12px] text-[#111111]">components/</span>
              {" — "}Header, Badge and BlogCard reused across pages.
            </li>
          </ul>
        </section>

        <section className="bg-white border border-[#EAEAEA] rounded-xl p-8">
          <h2 className="font-serif-ed text-[22px] text-[#111111] mb-3">
            Author
          </h2>
          <p className="text-[14px] leading-7 text-[#37352F]">
            Lam Quoc Toan — N23DCPT108
          </p>
        </section>
      </div>
    </main>
  );
}
