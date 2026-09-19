import Link from "next/link";

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const posts = await res.json();
  return posts.map((post) => ({ id: String(post.id) }));
}

export default async function BlogDetail({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <main className="max-w-3xl mx-auto px-6 py-14">
      <Link
        href="/"
        className="inline-block mb-8 border border-[#EAEAEA] bg-white text-[#37352F] px-4 py-2 rounded-md text-[13px] font-medium hover:border-[#111111] transition-colors"
      >
        Back to Blog
      </Link>
      <p className="font-mono-meta text-[11px] uppercase tracking-[0.08em] text-[#787774] mb-3">
        {post.category || `Note ${String(post.id).padStart(2, "0")}`} · User {post.userId}
      </p>
      <h1 className="font-serif-ed text-[32px] md:text-[40px] text-[#111111] mb-6">
        {post.title}
      </h1>
      <div className="border-t border-[#EAEAEA] pt-6">
        <p className="text-[15px] leading-7 text-[#37352F]">{post.body}</p>
      </div>
    </main>
  );
}
