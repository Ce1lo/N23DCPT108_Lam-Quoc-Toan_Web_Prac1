# N23DCPT108_Lam-Quoc-Toan_Web_Prac1

**Họ tên:** Lâm Quốc Toản
**MSV:** N23DCPT108
**Môn:** Thực hành Lập trình Web — Thực hành 1: Blog Listing Page (NextJS & Tailwind)

Trang blog liệt kê bài viết, fetch dữ liệu thật từ REST API, layout responsive
Mobile / Tablet / Desktop, kèm trang chi tiết từng bài viết.

**Demo:** https://ce1lo.github.io/N23DCPT108_Lam-Quoc-Toan_Web_Prac1/

## Chạy dự án

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem trang chủ.

Build bản production:

```bash
npm run build
```

## Trang

- `/` — Trang chủ: hero giới thiệu bài viết mới nhất + lưới 6 bài viết tiếp theo.
- `/articles` — Danh sách đầy đủ 12 bài viết, grid `1 → 2 → 3 cột`
  (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`).
- `/about` — Giới thiệu blog, cách tổ chức code và tác giả.
- `/blog/[id]` — Trang chi tiết bài viết theo id, có nút `Back to Blog`.

## Cấu trúc

- `app/page.js` — Server Component, fetch bài viết từ JSONPlaceholder.
- `app/articles/page.js` — Trang danh sách đầy đủ.
- `app/about/page.js` — Trang giới thiệu.
- `app/blog/[id]/page.js` — Trang chi tiết + `generateStaticParams()` để
  pre-render 100 trang tĩnh khi export.
- `components/Header.js` — Header dùng chung.
- `components/Badge.js` — Component tái sử dụng.
- `components/BlogCard.js` — Thẻ bài viết (dùng `line-clamp` cắt tóm tắt dài).
- `.github/workflows/nextjs.yml` — CI build và deploy lên GitHub Pages.

## Công nghệ

- Next.js 16 (App Router) + Tailwind CSS 4 + ESLint.
- Dữ liệu: [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts).
- Deploy: GitHub Actions → GitHub Pages (static export).

## Ghi chú kỹ thuật

- Link nội bộ dùng `next/link` để tương thích `basePath` khi deploy
  project site lên GitHub Pages.
