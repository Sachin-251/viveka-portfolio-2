'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="max-w-2xl lg:max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-6 sm:p-8">
              <CardHeader className="pb-6 sm:pb-8">
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white">
                  Send me a message
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  I&apos;ll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <motion.div 
                      className="space-y-2 sm:space-y-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <label htmlFor="name" className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full h-12 sm:h-14 text-base"
                      />
                    </motion.div>
                    <motion.div 
                      className="space-y-2 sm:space-y-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <label htmlFor="email" className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full h-12 sm:h-14 text-base"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="space-y-2 sm:space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label htmlFor="message" className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="w-full resize-none text-base min-h-[120px] sm:min-h-[140px]"
                    />
                  </motion.div>

                  {submitStatus === 'success' && (
                    <motion.div 
                      className="p-4 sm:p-6 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-sm sm:text-base text-green-800 dark:text-green-200">
                        Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div 
                      className="p-4 sm:p-6 bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-800 rounded-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-sm sm:text-base text-red-800 dark:text-red-200">
                        Sorry, there was an error sending your message. Please try again.
                      </p>
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 sm:h-14 text-base sm:text-lg font-medium"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3">📧</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">Email</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">rebekah.251@outlook.com</p>
            </motion.div>
            <motion.div 
              className="space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3">📍</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">Location</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">India</p>
            </motion.div>
            <motion.div 
              className="space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm sm:col-span-2 lg:col-span-1"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3">⏰</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">Availability</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">24/7</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
