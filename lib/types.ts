export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  body?: any
  publishedAt: string
  author: string
  category: string
  mainImage: string
}

export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
}

export interface Author {
  _id: string
  name: string
  bio?: string
  image?: string
}

export interface SampleWork {
  _id: string
  title: string
  description: string
  image: string
  link?: string
}

export interface Hero {
  title: string
  subtitle: string
  description: string
  image?: string
  ctaText?: string
  ctaLink?: string
}

export interface Service {
  title: string
  description: string
  icon?: string
}

export interface Education {
  degree: string
  institution: string
  year: string
  description?: string
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
}

export interface Portfolio {
  hero: Hero
  services: Service[]
  education: Education[]
  experience: Experience[]
  sampleWorks: SampleWork[]
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}
