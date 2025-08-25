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
  const displayPosts = posts.slice(0, 3)

  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Latest Blog Posts
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Read my latest thoughts on content writing, marketing, and digital strategy
          </p>
        </motion.div>

        {displayPosts.length > 0 ? (
          <AnimatedList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.1}>
            {displayPosts.map((post, index) => (
              <AnimatedItem key={post._id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <div className="relative overflow-hidden h-40 sm:h-48 lg:h-56">
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
                            <div className="text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2">📝</div>
                            <p className="text-xs sm:text-sm">Blog Image</p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                      </div>
                      <CardTitle className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-base sm:text-lg lg:text-xl line-clamp-2 leading-tight">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">
                      <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2 sm:line-clamp-3 text-sm sm:text-base">
                        {post.excerpt}
                      </CardDescription>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          By {post.author}
                        </span>
                        <Button size="sm" variant="outline" asChild className="w-full sm:w-auto text-xs sm:text-sm">
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
        ) : (
          <div className="text-center py-16 sm:py-20">
            <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">📝</div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-4">
              No posts yet
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
              Check back soon for new content!
            </p>
          </div>
        )}

        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button size="lg" variant="outline" asChild className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
            <Link href="/blog">
              View All Posts
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
