import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { getPostBySlug, getAllPosts } from '@/lib/sanity'
import { urlFor } from '@/lib/sanityImage'
import { Facebook, Linkedin, Twitter } from 'lucide-react'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts()
    return posts.map((post: any) => ({
      slug: post.slug.current,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await getPostBySlug(slug)
    
    if (!post) {
      return {
        title: 'Post Not Found',
      }
    }

    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: post.mainImage ? [post.mainImage] : [],
        type: 'article',
        publishedTime: post.publishedAt,
        authors: [post.author],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: post.mainImage ? [post.mainImage] : [],
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Post Not Found',
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  let post = null

  try {
    post = await getPostBySlug(slug)
  } catch (error) {
    console.error('Error fetching post:', error)
  }

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <article className="container mx-auto px-4 py-20 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Link 
              href="/blog"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← Back to Blog
            </Link>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(post.publishedAt).toLocaleDateString()}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              {post.author.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                {post.author}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Author
              </p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.mainImage && (
          <div className="relative w-full h-64 md:h-96 mb-12 rounded-lg overflow-hidden">
            <Image
              src={post.mainImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.body ? (
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <PortableText 
                value={post.body}
                components={{
                  block: {
                    h1: ({children}) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
                    h2: ({children}) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
                    h3: ({children}) => <h3 className="text-xl font-bold mb-2">{children}</h3>,
                    normal: ({children}) => <p className="mb-4 leading-relaxed">{children}</p>,
                  },
                  list: {
                    bullet: ({children}) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
                    number: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
                  },
                  listItem: ({children}) => <li className="ml-4">{children}</li>,
                }}
              />
            </div>
          ) : (
            <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>{post.excerpt}</p>
              <p className="mt-6">
                This is a placeholder for the full blog post content. The actual content would 
                be fetched from Sanity CMS and rendered here.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Share this post:
              </span>
              <div className="flex gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug.current}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug.current}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug.current}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
            
            <Link 
              href="/blog"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← Back to Blog
            </Link>
          </div>
        </footer>
      </article>
    </div>
  )
}
