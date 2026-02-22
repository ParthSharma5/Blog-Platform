// import { getAllPosts } from '../lib/posts'
// import Link from 'next/link'
// import Head from 'next/head'

// export default function Home({ posts }) {
//   return (
//     <>
//       <Head>
//         <title>My Dev Blog</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>

//       {/* Main container inherits body background/foreground from global CSS */}
//       <main className="max-w-3xl mx-auto px-4 py-6 md:py-10">
//         {/* Header */}
//         <div className="mb-8 md:mb-10">
//           <h1 className="text-3xl md:text-4xl font-bold"
//               style={{ color: 'var(--foreground)' }}>
//             My Dev Blog
//           </h1>
//           <p className="mt-2 text-sm sm:text-base"
//              style={{ color: 'var(--foreground)', opacity: 0.7 }}>
//             Writing about JavaScript, React, and Frontend Development
//           </p>
//         </div>

//         {/* Posts List */}
//         <div className="space-y-4 md:space-y-6">
//           {posts.map((post) => (
//             <Link href={`/posts/${post.slug}`} key={post.slug}>
//               <div className="border rounded-xl p-4 md:p-6 transition cursor-pointer active:bg-black/5 dark:active:bg-white/5"
//                    style={{
//                      borderColor: 'var(--foreground)',
//                      borderOpacity: 0.1,
//                      backgroundColor: 'var(--background)'
//                    }}>
//                 <p className="text-xs sm:text-sm mb-1"
//                    style={{ color: 'var(--foreground)', opacity: 0.5 }}>
//                   {post.date}
//                 </p>
//                 <h2 className="text-lg sm:text-xl font-semibold"
//                     style={{ color: 'var(--foreground)' }}>
//                   {post.title}
//                 </h2>
//                 <p className="mt-2 text-sm sm:text-base"
//                    style={{ color: 'var(--foreground)', opacity: 0.7 }}>
//                   {post.description}
//                 </p>
//                 <span className="text-xs sm:text-sm mt-3 inline-block"
//                       style={{ color: 'var(--foreground)', opacity: 0.8 }}>
//                   Read more →
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </main>
//     </>
//   )
// }

// export async function getStaticProps() {
//   const posts = getAllPosts()
//   console.log('First Posts:', posts[0])
//   return {
//     props: { posts },
//   }
// }

import { getAllPosts } from "../lib/posts";
import Link from "next/link";
import Head from "next/head";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>My Dev Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-300/30 dark:bg-purple-600/20 blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-300/30 dark:bg-blue-600/20 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-pink-300/20 dark:bg-pink-600/10 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
        {/* Hero section */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
            My Dev Blog
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: "var(--foreground)", opacity: 0.8 }}
          >
            Sharing insights on web development and modern tech
          </p>
          <div className="mt-8 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
        </div>

        <div className="space-y-6 md:space-y-8">
          {posts.map((post, index) => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <div
                className="group relative backdrop-blur-sm bg-white/50 dark:bg-black/50 rounded-2xl border border-white/20 dark:border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{
                  backgroundColor: "var(--background)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <time
                        className="text-sm font-mono"
                        style={{ color: "var(--foreground)", opacity: 0.5 }}
                      >
                        {post.date}
                      </time>
                      <h2
                        className="text-2xl md:text-3xl font-bold mt-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all"
                        style={{ color: "var(--foreground)" }}
                      >
                        {post.title}
                      </h2>
                      <p
                        className="mt-3 text-base md:text-lg leading-relaxed"
                        style={{ color: "var(--foreground)", opacity: 0.7 }}
                      >
                        {post.description}
                      </p>
                    </div>
                    <div className="md:self-center">
                      <span
                        className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-current/20 hover:border-current/40 transition-colors"
                        style={{ color: "var(--foreground)", opacity: 0.8 }}
                      >
                        Read article
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  // console.log("First Posts:", posts[0]);
  return {
    props: { posts },
  };
}
