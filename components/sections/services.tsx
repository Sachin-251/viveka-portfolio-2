'use client'

import { Service } from '@/lib/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { AnimatedList, AnimatedItem } from '@/components/ui/animated-section'

interface ServicesSectionProps {
  services: Service[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const defaultServices: Service[] = [
    {
      title: 'Blog Writing',
      description: 'Creating engaging, SEO-optimized blog posts that inform, entertain, and drive traffic to your website.',
      icon: '✍️'
    },
    {
      title: 'Copywriting',
      description: 'Crafting compelling marketing copy that converts visitors into customers and drives sales.',
      icon: '📝'
    },
    {
      title: 'Content Strategy',
      description: 'Developing comprehensive content strategies that align with your business goals and target audience.',
      icon: '🎯'
    },
    {
      title: 'SEO Content',
      description: 'Writing content optimized for search engines while maintaining readability and engagement.',
      icon: '🔍'
    },
    {
      title: 'Email Marketing',
      description: 'Creating persuasive email campaigns that nurture leads and build customer relationships.',
      icon: '📧'
    },
    {
      title: 'Social Media Content',
      description: 'Developing engaging social media posts that increase brand awareness and engagement.',
      icon: '📱'
    }
  ]

  const displayServices = services.length > 0 ? services : defaultServices

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I provide comprehensive content writing and copywriting services to help your brand connect with its audience
          </p>
        </motion.div>

        <AnimatedList className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {displayServices.map((service, index) => (
            <AnimatedItem key={index}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader>
                    <motion.div 
                      className="text-4xl mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedList>
      </div>
    </section>
  )
}
