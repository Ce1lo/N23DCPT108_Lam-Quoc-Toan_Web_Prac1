import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "MyBlog",
  description: "Blog Listing Page - NextJS & Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
