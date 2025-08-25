import { Metadata } from 'next'
import HeroSection from '@/components/sections/hero'
import ServicesSection from '@/components/sections/services'
import EducationSection from '@/components/sections/education'
import ExperienceSection from '@/components/sections/experience'
import TopBlogsSection from '@/components/sections/top-blogs'
import ContactFormSection from '@/components/sections/contact-form'
import { getPortfolio, getLatestPosts } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Viveka Massey - Content Writer & Creative Writer',
  description: 'Professional content writer and copywriter passionate about creating engaging, SEO-optimized content that connects with audiences and drives results.',
  openGraph: {
    title: 'Viveka Massey - Content Writer & Creative Writer',
    description: 'Professional content writer and copywriter passionate about creating engaging, SEO-optimized content that connects with audiences and drives results.',
  },
}

export default async function HomePage() {
  // Fetch data from Sanity (with fallback to empty data for now)
  let portfolio = null
  let latestPosts = []

  try {
    portfolio = await getPortfolio()
    latestPosts = await getLatestPosts(3)
  } catch (error) {
    console.error('Error fetching data:', error)
    // Fallback to empty data - components will use default content
  }

  return (
    <>
      <section id="home">
        <HeroSection hero={portfolio?.hero || {}} />
      </section>
      
      <ServicesSection services={portfolio?.services || []} />
      
      <ExperienceSection experience={portfolio?.experience || []} />
      
      <EducationSection education={portfolio?.education || []} />
      
      {/* <SampleWorkSection sampleWorks={portfolio?.sampleWorks || []} /> */}
      
      <TopBlogsSection posts={latestPosts} />
      
      <ContactFormSection />
    </>
  )
}
