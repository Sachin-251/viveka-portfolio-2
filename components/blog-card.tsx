'use client'

import { Post } from '@/lib/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  post: Post
  variant?: 'default' | 'featured'
}

export default function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  const isFeatured = variant === 'featured'

  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${
      isFeatured ? 'sm:col-span-2 lg:col-span-2' : ''
    }`}>
      <div className={`relative overflow-hidden ${
        isFeatured ? 'h-48 sm:h-64 lg:h-80' : 'h-40 sm:h-48 lg:h-56'
      }`}>
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
        <CardTitle className={`font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
          isFeatured ? 'text-lg sm:text-xl lg:text-2xl' : 'text-base sm:text-lg lg:text-xl'
        } line-clamp-2 leading-tight`}>
          {post.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">
        <CardDescription className={`text-gray-600 dark:text-gray-300 leading-relaxed ${
          isFeatured ? 'line-clamp-3 sm:line-clamp-4' : 'line-clamp-2 sm:line-clamp-3'
        } text-sm sm:text-base`}>
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
  )
}
