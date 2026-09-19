import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "MyBlog - Lab 1",
  description: "Blog listing page with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen text-gray-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
