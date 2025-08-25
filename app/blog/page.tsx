import { Metadata } from 'next'
import BlogCard from '@/components/blog-card'
import { getAllPosts } from '@/lib/sanity'
import { Post } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Blog - Content Writing & Marketing Insights',
  description: 'Read my latest thoughts on content writing, copywriting, and digital marketing strategies including SEO, email marketing, and more.',
  openGraph: {
    title: 'Blog - Content Writing & Marketing Insights',
    description: 'Read my latest thoughts on content writing, copywriting, and digital marketing strategies.',
  },
}

export default async function BlogPage() {
  let posts = []

  try {
    posts = await getAllPosts()
  } catch (error) {
    console.error('Error fetching posts:', error)
    // Fallback to empty array - will show no posts
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Blog
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Personal Reflections, Creative Ideas, and Everything in Between
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.map((post: Post, index: number) => (
              <BlogCard 
                key={post._id} 
                post={post} 
                variant={index === 0 ? 'featured' : 'default'}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-20">
            <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">📝</div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-4">
              No posts yet
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Check back soon for new content!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
