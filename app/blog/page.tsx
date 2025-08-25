import { Metadata } from 'next'
import BlogCard from '@/components/blog-card'
import { getAllPosts } from '@/lib/sanity'

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
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Personal Reflections, Creative Ideas, and Everything in Between
           </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any, index: number) => (
              <BlogCard 
                key={post._id} 
                post={post} 
                variant={index === 0 ? 'featured' : 'default'}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              No posts yet
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Check back soon for new content!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
