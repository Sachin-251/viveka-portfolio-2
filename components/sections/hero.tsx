'use client'

import { Button } from '@/components/ui/button'
import { Hero } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanityImage'
import { motion } from 'framer-motion'

interface HeroSectionProps {
  hero: Hero
}

export default function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-16 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                {hero.title || 'Hi, I\'m Viveka Massey'}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600 dark:text-blue-400">
                {hero.subtitle || 'Content Writer & Copywriter'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                {hero.description || 'Passionate about creating engaging, SEO-optimized content that connects with audiences and drives results. I transform ideas into compelling stories that resonate with readers and achieve business goals.'}
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {hero.ctaText && hero.ctaLink && (
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <a href={hero.ctaLink}>{hero.ctaText}</a>
                </Button>
              )}
              <Button variant="outline" size="lg">
                <a href="#contact">Get In Touch</a>
              </Button>
              {/* Use next/link for internal navigation */}
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/blog">Check out my blogs</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {hero.image ? (
              <motion.div 
                className="relative w-[500px] h-[500px] flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient border circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 p-2">
                  <div className="w-full h-full rounded-full overflow-hidden bg-blue-50 dark:bg-gray-800">
                    <Image
                      src={urlFor(hero.image).url()}
                      alt="Viveka Massey - Content Writer & Copywriter"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                className="relative w-[500px] h-[500px] flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient border circle for placeholder */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 p-2">
                  <div className="w-full h-full rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center">
                    <div className="text-gray-600 dark:text-gray-300 text-center">
                      <div className="text-8xl mb-4">👨‍💻</div>
                      <p className="text-xl font-semibold">Portfolio Image</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
