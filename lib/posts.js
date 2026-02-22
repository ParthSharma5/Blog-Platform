// // post logic

// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { remark } from "remark";
// import html from "remark-html";

// const postsDirectory = path.join(process.cwd(), "posts");

// // saare post ki list  (Home page ke liye)

// export function getAllPosts() {
//   const filename = fs.readdirSync(postsDirectory);

//   const allPosts = filename.map((filename) => {
//     const slug = filename.replace(/\.md$/, "");
//     const fullPath = path.join(postsDirectory, filename);
//     const fileContents = fs.readFileSync(fullPath, "utf8");
//     const { date } = matter(fileContents);
//     return {
//       slug,
//       title: data.title,
//       date: data.date,
//       description: data.description,
//     };
//   });
//   return allPosts.sort((a, b) => (a.data < b.data ? 1 : -1));
// }
// // markdown to html
// export async function getPostBySlug() {
//   const fullPath = path.join(postsDirectory, `${slug}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   const { data, content } = matter(fileContents);

//   const processedContent = await remark().use(html).process(content);
//   const contentHtml = processedContent.toString();

//   return {
//     slug,
//     title: data.title,
//     date: data.date,
//     description: data.description,
//     contentHtml,
//   };
// }

// export function getAllSlug() {
//   const filename = fs.readdirSync(postsDirectory);
//   return filename.map((filename) => ({
//     params: {
//       slug: filename.replace(/\.md$/,''),
//     },
//   }));
// }

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

// Saare posts ki list lao (Homepage ke liye)
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)
  
  const allPosts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
    }
  })

  // Date ke hisaab se sort karo (latest first)
  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

// Ek specific post ka poora content lao
export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // Markdown → HTML convert karo
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    contentHtml,
  }
}

// Saare slugs lao (SSR ke liye)
export function getAllSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => ({
    params: { slug: fileName.replace(/\.md$/, '') },
  }))
}