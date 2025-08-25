'use client'

import { SampleWork } from '@/lib/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedList, AnimatedItem } from '@/components/ui/animated-section'

interface SampleWorkSectionProps {
  sampleWorks: SampleWork[]
}

export default function SampleWorkSection({ sampleWorks }: SampleWorkSectionProps) {
  const defaultWorks: SampleWork[] = [
    {
      _id: '1',
      title: 'E-commerce Blog Series',
      description: 'A comprehensive 12-part blog series on e-commerce best practices that increased organic traffic by 150% and generated 50+ qualified leads.',
      image: '/api/placeholder/400/300',
      link: '#',
    },
    {
      _id: '2',
      title: 'Brand Storytelling Campaign',
      description: 'Developed a complete brand storytelling campaign for a tech startup, including website copy, social media content, and email sequences.',
      image: '/api/placeholder/400/300',
      link: '#',
    },
    {
      _id: '3',
      title: 'SEO Content Strategy',
      description: 'Created and executed an SEO content strategy that improved search rankings for 25+ target keywords and increased organic traffic by 200%.',
      image: '/api/placeholder/400/300',
      link: '#',
    },
    {
      _id: '4',
      title: 'Email Marketing Campaigns',
      description: 'Designed and wrote email marketing campaigns that achieved 35% open rates and 8% click-through rates, well above industry averages.',
      image: '/api/placeholder/400/300',
      link: '#',
    },
    {
      _id: '5',
      title: 'Product Launch Copy',
      description: 'Wrote compelling product launch copy for a SaaS company that resulted in 300% increase in trial sign-ups and 25% conversion rate.',
      image: '/api/placeholder/400/300',
      link: '#',
    },
    {
      _id: '6',
      title: 'Social Media Content',
      description: 'Managed social media content creation for multiple brands, achieving 40% increase in engagement and 60% growth in followers.',
      image: '/api/placeholder/400/300',
      link: '#',
    }
  ]

  const displayWorks = sampleWorks.length > 0 ? sampleWorks : defaultWorks

  return (
    <section id="work" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sample Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent content writing projects and the results I&apos;ve achieved for clients
          </p>
        </motion.div>

        <AnimatedList className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {displayWorks.map((work) => (
            <AnimatedItem key={work._id}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    {work.image ? (
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-4xl mb-2">💻</div>
                          <p className="text-sm">Project Image</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {work.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {work.description}
                    </CardDescription>
                    
                    <div className="flex gap-2">
                      {work.link && (
                        <Button size="sm" asChild>
                          <Link href={work.link}>
                            View Project
                          </Link>
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        View Details
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
            <Link href="/work">View All Projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
