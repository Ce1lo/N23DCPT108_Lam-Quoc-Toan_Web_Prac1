import Badge from "./Badge";
import Reveal from "./Reveal";

export default function BlogCard({ post, index = 0 }) {
  return (
    <Reveal delay={(index % 3) * 80} className="h-full">
      <article className="h-full flex flex-col bg-white border border-[#EAEAEA] rounded-xl p-6 transition-shadow duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <div className="rounded-lg overflow-hidden border border-[#EAEAEA] mb-5 bg-[#F7F6F3]">
          <img
            src={`https://picsum.photos/seed/lab1-${post.id}/800/500`}
            alt={post.title}
            loading="lazy"
            className="w-full h-44 object-cover saturate-[0.82] contrast-[1.02]"
          />
        </div>

        <div className="flex items-center gap-2 mb-3">
          <Badge label={post.category || `Note ${String(post.id).padStart(2, "0")}`} />
          <span className="font-mono-meta text-[11px] text-[#787774]">
            User {post.userId}
          </span>
        </div>

        <h2 className="font-serif-ed text-[21px] text-[#111111] mb-2 line-clamp-2">
          {post.title}
        </h2>
        <p className="text-[14px] leading-6 text-[#6F6E69] line-clamp-3 mb-6">
          {post.body}
        </p>

        <div className="mt-auto pt-4 border-t border-[#EAEAEA] flex justify-between items-center">
          <span className="font-mono-meta text-[11px] text-[#787774]">
            #{String(post.id).padStart(2, "0")}
          </span>
          <a
            href={`/blog/${post.id}`}
            className="bg-[#111111] text-white px-3 py-1.5 rounded-md text-[13px] font-medium hover:bg-[#333333] active:scale-[0.98] transition-all"
          >
            Read More
          </a>
        </div>
      </article>
    </Reveal>
  );
}
