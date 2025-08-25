import { createClient } from 'next-sanity'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)

// Helper function to get all posts
export async function getAllPosts() {
  return await sanityClient.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      "author": author->name,
      "category": category->title,
      "mainImage": mainImage.asset->url
    }
  `)
}

// Helper function to get post by slug
export async function getPostBySlug(slug: string) {
  return await sanityClient.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      publishedAt,
      "author": author->name,
      "category": category->title,
      "mainImage": mainImage.asset->url
    }
  `, { slug })
}

// Helper function to get posts by category
export async function getPostsByCategory(categorySlug: string) {
  return await sanityClient.fetch(`
    *[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      "author": author->name,
      "category": category->title,
      "mainImage": mainImage.asset->url
    }
  `, { categorySlug })
}

// Helper function to search posts
export async function searchPosts(query: string) {
  const searchQuery = `*[_type == "post" && (title match "${query}*" || excerpt match "${query}*")] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "author": author->name,
    "category": category->title,
    "mainImage": mainImage.asset->url
  }`
  return await sanityClient.fetch(searchQuery)
}

// Helper function to get portfolio data
export async function getPortfolio() {
  return await sanityClient.fetch(`
    *[_type == "portfolio"][0] {
      hero,
      services,
      education,
      experience,
      "sampleWorks": sampleWorks[]->{
        _id,
        title,
        description,
        "image": image.asset->url,
        link
      }
    }
  `)
}

// Helper function to get latest posts
export async function getLatestPosts(limit: number = 3) {
  return await sanityClient.fetch(`
    *[_type == "post"] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      "author": author->name,
      "category": category->title,
      "mainImage": mainImage.asset->url
    }
  `, { limit })
}
