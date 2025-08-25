'use client'

import { Post } from '@/lib/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedList, AnimatedItem } from '@/components/ui/animated-section'

interface TopBlogsSectionProps {
  posts: Post[]
}

export default function TopBlogsSection({ posts }: TopBlogsSectionProps) {
  const defaultPosts: Post[] = [
    {
      _id: '1',
      title: '10 Content Writing Tips to Boost Your SEO Rankings',
      slug: { current: 'content-writing-tips-seo-rankings' },
      excerpt: 'Discover proven content writing strategies that will help improve your search engine rankings and drive more organic traffic to your website.',
      publishedAt: '2024-01-15',
      author: 'Viveka Massey',
      category: 'Content Writing',
      mainImage: '/api/placeholder/400/250'
    },
    {
      _id: '2',
      title: 'The Art of Storytelling in Marketing Copy',
      slug: { current: 'storytelling-marketing-copy' },
      excerpt: 'Learn how to weave compelling narratives into your marketing copy to connect with audiences and drive conversions.',
      publishedAt: '2024-01-10',
      author: 'Viveka Massey',
      category: 'Copywriting',
      mainImage: '/api/placeholder/400/250'
    },
    {
      _id: '3',
      title: 'Creating Engaging Email Marketing Campaigns',
      slug: { current: 'engaging-email-marketing-campaigns' },
      excerpt: 'Master the art of writing email campaigns that capture attention, nurture relationships, and drive action.',
      publishedAt: '2024-01-05',
      author: 'Viveka Massey',
      category: 'Email Marketing',
      mainImage: '/api/placeholder/400/250'
    }
  ]

  const displayPosts = posts.length > 0 ? posts : defaultPosts

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Blog Posts
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Personal Reflections, Creative Ideas, and Everything in Between
          </p>
        </motion.div>

        <AnimatedList className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {displayPosts.map((post) => (
            <AnimatedItem key={post._id}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    {post.mainImage ? (
                      <Image
                        src={post.mainImage}
                        alt={post.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-4xl mb-2">📝</div>
                          <p className="text-sm">Blog Image</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        By {post.author}
                      </span>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/blog/${post.slug.current}`}>
                          Read More
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedList>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button size="lg" variant="outline">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
