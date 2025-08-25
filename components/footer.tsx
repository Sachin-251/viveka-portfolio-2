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
      <div className="container mx-auto px-4 md:px-16 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
                       <Link href="/" className="text-3xl font-bold text-white hover:text-blue-400 transition-colors">
             Viveka Massey
           </Link>
              <p className="mt-4 text-gray-300 leading-relaxed max-w-md">
               Professional content writer and copywriter passionate about creating engaging, SEO-optimized content that connects with audiences and drives results. 
               Let&apos;s work together to tell your story.
             </p>
            
            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon === 'linkedin' ? (
                    <Linkedin size={24} />
                  ) : social.icon === 'twitter' ? (
                    <Twitter size={24} />
                  ) : null}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>📍 India</p>
              <p>📧 rebekah.251@outlook.com</p>
              <p>⏰ 24/7</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Viveka. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
