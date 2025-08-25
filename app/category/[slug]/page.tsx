import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogCard from '@/components/blog-card'
import Link from 'next/link'
import { getPostsByCategory, getAllPosts } from '@/lib/sanity'
import { Post } from '@/lib/types'

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts()
    const categories = [...new Set(posts.map((post: Post) => post.category))] as string[]
    
    return categories.map((category: string) => ({
      slug: category.toLowerCase().replace(/\s+/g, '-'),
    }));
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug: categorySlug } = await params
  const categoryName = categorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

  return {
    title: `${categoryName} - Blog Posts`,
    description: `Browse all blog posts in the ${categoryName} category.`,
    openGraph: {
      title: `${categoryName} - Blog Posts`,
      description: `Browse all blog posts in the ${categoryName} category.`,
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug: categorySlug } = await params
  let posts = []

  try {
    posts = await getPostsByCategory(categorySlug)
  } catch (error) {
    console.error('Error fetching posts by category:', error)
  }

  if (posts.length === 0) {
    notFound()
  }

  const categoryName = categorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mb-6 sm:mb-8">
          <Link 
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base"
          >
            ← Back to Blog
          </Link>
        </div>

        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            {categoryName}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            {posts.length} post{posts.length !== 1 ? 's' : ''} in this category
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post: Post, index: number) => (
            <BlogCard 
              key={post._id} 
              post={post} 
              variant={index === 0 ? 'featured' : 'default'}
            />
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <Link 
            href="/blog"
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </div>
  )
}
