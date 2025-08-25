'use client'

import { Education } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { AnimatedList, AnimatedItem } from '@/components/ui/animated-section'

interface EducationSectionProps {
  education: Education[]
}

export default function EducationSection({ education }: EducationSectionProps) {
  const defaultEducation: Education[] = [
    {
      degree: 'Master of Arts in English',
      institution: 'Columbia University',
      year: '2020 - 2022',
      description: 'Specialized in Creative Writing and Digital Media with focus on content strategy and digital storytelling.'
    },
    {
      degree: 'Bachelor of Arts in Journalism',
      institution: 'New York University',
      year: '2016 - 2020',
      description: 'Major in Journalism with minor in Marketing. Graduated with honors and completed thesis on digital content trends.'
    },
    {
      degree: 'Content Marketing Certification',
      institution: 'HubSpot Academy',
      year: '2021',
      description: 'Certified in content marketing strategies, SEO optimization, and inbound marketing methodologies.'
    }
  ]

  const displayEducation = education.length > 0 ? education : defaultEducation

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and qualifications that have shaped my expertise
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatedList className="space-y-8" staggerDelay={0.2}>
            {displayEducation.map((item, index) => (
              <AnimatedItem key={index}>
                <motion.div 
                  className="relative"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Timeline line */}
                  {index < displayEducation.length - 1 && (
                    <motion.div 
                      className="absolute left-6 top-12 w-0.5 h-16 bg-blue-200 dark:bg-blue-800"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                  )}
                  
                  <div className="flex items-start space-x-6">
                    {/* Timeline dot */}
                    <motion.div 
                      className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </motion.div>
                    
                    {/* Content */}
                    <Card className="flex-1">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                              {item.degree}
                            </CardTitle>
                            <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mt-1">
                              {item.institution}
                            </p>
                          </div>
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedList>
        </div>
      </div>
    </section>
  )
}
