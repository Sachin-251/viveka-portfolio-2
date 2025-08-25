import { NextRequest, NextResponse } from 'next/server'
import { searchPosts } from '@/lib/sanity'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')

    if (!query || query.trim() === '') {
      return NextResponse.json(
        { error: 'Search query is required' },
        { status: 400 }
      )
    }

    const posts = await searchPosts(query.trim())

    return NextResponse.json(
      { 
        posts,
        query: query.trim(),
        total: posts.length
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'Something went wrong while searching.'
      },
      { status: 500 }
    )
  }
}
