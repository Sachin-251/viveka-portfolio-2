'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import BlogCard from '@/components/blog-card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import Link from 'next/link'

interface SearchResult {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  publishedAt: string
  author: string
  category: string
  mainImage: string
}

function SearchPageContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [searchTerm, setSearchTerm] = useState(query)
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      setHasSearched(false)
      return
    }

    setIsLoading(true)
    setHasSearched(true)

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
      if (response.ok) {
        const data = await response.json()
        setResults(data.posts || [])
      } else {
        setResults([])
      }
    } catch (error) {
      console.error('Search error:', error)
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (query) {
      performSearch(query)
    }
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    performSearch(searchTerm)
  }

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
            Search Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find the content you&apos;re looking for
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Searching...' : 'Search'}
            </Button>
          </form>
        </div>

        {/* Search Results */}
        {hasSearched && (
          <div>
            {isLoading ? (
              <div className="text-center py-20">
                <div className="text-2xl mb-4">🔍</div>
                <p className="text-gray-600 dark:text-gray-300">Searching...</p>
              </div>
            ) : results.length > 0 ? (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    Search Results
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Found {results.length} result{results.length !== 1 ? 's' : ''} for &quot;{query}&quot;
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {results.map((post, index) => (
                    <BlogCard 
                      key={post._id} 
                      post={post} 
                      variant={index === 0 ? 'featured' : 'default'}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  No results found
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  No posts found for &quot;{query}&quot;
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Try searching with different keywords or browse all posts:
                  </p>
                  <Link 
                    href="/blog"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    View All Posts
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Initial State */}
        {!hasSearched && !query && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Start searching
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Enter a search term above to find blog posts
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center py-20">
            <div className="text-2xl mb-4">🔍</div>
            <p className="text-gray-600 dark:text-gray-300">Loading search...</p>
          </div>
        </div>
      </div>
    }>
      <SearchPageContent />
    </Suspense>
  )
}
