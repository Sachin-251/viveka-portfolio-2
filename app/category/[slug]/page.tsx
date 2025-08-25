import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogCard from '@/components/blog-card'
import Link from 'next/link'
import { getPostsByCategory, getAllPosts } from '@/lib/sanity'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts()
    const categories = [...new Set(posts.map((post: any) => post.category))] as string[]
    
    return categories.map((category: string) => ({
      slug: category.toLowerCase().replace(/\s+/g, '-'),
    }));
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categorySlug = params.slug
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
  const categorySlug = params.slug
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
      <div className="container mx-auto px-4 py-20">
        <div className="mb-8">
          <Link 
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {categoryName}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {posts.length} post{posts.length !== 1 ? 's' : ''} in this category
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any, index: number) => (
            <BlogCard 
              key={post._id} 
              post={post} 
              variant={index === 0 ? 'featured' : 'default'}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </div>
  )
}
