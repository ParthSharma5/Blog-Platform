# 📝 Blog Platform — Next.js

A modern blog platform built with Next.js that demonstrates 
the use of SSG and SSR rendering strategies.

## 🔗 Live Demo
[View Live]()

## ✨ Features
- SSG (Static Site Generation) for homepage — fast loading
- SSR (Server Side Rendering) for individual posts — dynamic
- Markdown files as content source
- Syntax highlighted code blocks
- Fully responsive design
- SEO optimized

## 🛠️ Tech Stack
- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Content:** Markdown + gray-matter
- **Markdown Parser:** remark + remark-html
- **Deployment:** Vercel

## 📂 Project Structure
```
blog-platform/
├── posts/          # Markdown blog posts
├── lib/
│   └── posts.js    # File system logic
├── pages/
│   ├── index.js    # Homepage (SSG)
│   └── posts/
│       └── [slug].js  # Post page (SSR)
```

## 🚀 Run Locally
```bash
git clone https://github.com/ParthSharma5/Blog-Platform.git
cd blog-platform
npm install
npm run dev
```

## 💡 Key Concepts Demonstrated
- **SSG** — `getStaticProps` builds homepage at build time
- **SSR** — `getServerSideProps` fetches post on every request
- **Dynamic Routing** — `[slug].js` for individual posts
- **File System API** — Reading markdown files with Node.js `fs`
```



Topics: nextjs react javascript ssg ssr markdown tailwindcss

Languages:  JavaScript 68%  CSS 24%  Other 8%