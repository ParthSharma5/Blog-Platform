
// import { getPostBySlug } from '@/lib/posts'
// import Head from 'next/head'
// import Link from 'next/link'

// export default function Post({ post }) {
//   return (
//     <>
//       <Head>
//         <title>{post.title}</title>
//       </Head>

//       <main className="max-w-3xl mx-auto px-4 py-10">
//         {/* Back Button */}
//         <Link href="/">
//           <span className="text-blue-500 text-sm cursor-pointer hover:underline">
//             ← Back to all posts
//           </span>
//         </Link>

//         {/* Post Header */}
//         <div className="mt-6 mb-8">
//           <p className="text-sm text-gray-400">{post.date}</p>
//           <h1 className="text-3xl font-bold text-gray-900 mt-2">
//             {post.title}
//           </h1>
//           <p className="text-gray-500 mt-2">{post.description}</p>
//         </div>

//         <hr className="mb-8" />

//         {/* Post Content */}
//         <article
//           className="prose prose-gray max-w-none"
//           dangerouslySetInnerHTML={{ __html: post.contentHtml }}
//         />
//       </main>
//     </>
//   )
// }

// // ⭐ SSR — Har request pe server se data aayega
// export async function getServerSideProps({ params }) {
//   const post = await getPostBySlug(params.slug)
//   return {
//     props: { post },
//   }
// }

import { getPostBySlug } from '@/lib/posts'
import Head from 'next/head'
import Link from 'next/link'

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} | My Dev Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Animated background blobs (same as index) */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-300/30 dark:bg-purple-600/20 blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-300/30 dark:bg-blue-600/20 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-pink-300/20 dark:bg-pink-600/10 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium mb-8 group"
              style={{ color: 'var(--foreground)', opacity: 0.7 }}>
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all posts
        </Link>

        {/* Post Header */}
        <div className="mb-10">
          <time className="text-sm font-mono" style={{ color: 'var(--foreground)', opacity: 0.5 }}>
            {post.date}
          </time>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
            {post.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            {post.description}
          </p>
        </div>

        {/* Decorative divider */}
        <div className="h-px w-full mb-10 bg-gradient-to-r from-transparent via-current to-transparent" style={{ color: 'var(--foreground)', opacity: 0.1 }}></div>

        {/* Post Content - Glass card */}
        <article 
          className="prose prose-lg md:prose-xl max-w-none backdrop-blur-sm bg-white/50 dark:bg-black/50 rounded-2xl border border-white/20 dark:border-gray-800/50 shadow-xl p-6 md:p-10"
          style={{ 
            backgroundColor: 'var(--background)', 
            backdropFilter: 'blur(8px)',
            color: 'var(--foreground)'
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            className="prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-500 hover:prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-current"
          />
        </article>
      </main>

      {/* Custom animations (same as index) */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
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
  )
}

// ⭐ SSR — Har request pe server se data aayega
export async function getServerSideProps({ params }) {
  const post = await getPostBySlug(params.slug)
  return {
    props: { post },
  }
}