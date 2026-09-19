import Link from "next/link";

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
}

export default async function BlogDetail({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Link
        href="/"
        className="inline-block mb-6 bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-300"
      >
        Back to Blog
      </Link>
      <span className="block text-xs text-indigo-500 font-semibold uppercase tracking-wide mb-2">
        {post.category}
      </span>
      <h1 className="font-bold text-2xl md:text-3xl mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">User #{post.userId}</p>
      <p className="text-gray-600 leading-7">{post.body}</p>
    </main>
  );
}
