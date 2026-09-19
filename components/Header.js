export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#FBFBFA]/90 backdrop-blur-sm border-b border-[#EAEAEA]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-baseline gap-2">
          <span className="font-serif-ed text-[22px] font-medium">MyBlog</span>
        </a>
        <nav className="space-x-6 hidden md:flex text-[14px] text-[#37352F]">
          <a href="/" className="hover:text-black transition-colors">Home</a>
          <a href="/articles" className="hover:text-black transition-colors">Articles</a>
          <a href="/about" className="hover:text-black transition-colors">About</a>
        </nav>
        <button className="bg-[#111111] text-white text-[13px] font-medium px-4 py-2 rounded-md hover:bg-[#333333] active:scale-[0.98] transition-all">
          Subscribe
        </button>
      </div>
    </header>
  );
}
