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
    } catch (error) {
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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Send me a message
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  I&apos;ll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
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
                        className="w-full"
                      />
                    </motion.div>
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
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
                        className="w-full"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
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
                      className="w-full resize-none"
                    />
                  </motion.div>

                  {submitStatus === 'success' && (
                    <motion.div 
                      className="p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-green-800 dark:text-green-200">
                        Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div 
                      className="p-4 bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-800 rounded-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-red-800 dark:text-red-200">
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
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
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
            className="mt-12 grid md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="space-y-2"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl mb-2">📧</div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">rebekah.251@outlook.com</p>
            </motion.div>
            <motion.div 
              className="space-y-2"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl mb-2">📍</div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">India</p>
            </motion.div>
            <motion.div 
              className="space-y-2"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl mb-2">⏰</div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Availability</h3>
              <p className="text-gray-600 dark:text-gray-300">24/7</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
