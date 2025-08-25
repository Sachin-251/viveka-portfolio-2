'use client'

import Link from 'next/link'
import { Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/viveka-massey/', icon: 'linkedin' },
    { name: 'X (Twitter)', url: 'https://www.linkedin.com/in/viveka-massey/', icon: 'twitter' },
  ]

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    // { href: '#work', label: 'Work' },
    { href: '/blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/" className="text-2xl sm:text-3xl font-bold text-white hover:text-blue-400 transition-colors">
              Viveka Massey
            </Link>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-300 leading-relaxed max-w-md">
              Professional content writer and copywriter passionate about creating engaging, SEO-optimized content that connects with audiences and drives results. 
              Let&apos;s work together to tell your story.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 sm:mt-8 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors p-2"
                  aria-label={social.name}
                >
                  {social.icon === 'linkedin' ? (
                    <Linkedin size={20} className="sm:w-6 sm:h-6" />
                  ) : social.icon === 'twitter' ? (
                    <Twitter size={20} className="sm:w-6 sm:h-6" />
                  ) : null}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact</h3>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
              <p className="flex items-center gap-2">
                <span>📍</span>
                <span>India</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📧</span>
                <span>rebekah.251@outlook.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span>⏰</span>
                <span>24/7</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-8 sm:pt-12 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
            © {currentYear} Viveka. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Link href="/privacy" className="text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
