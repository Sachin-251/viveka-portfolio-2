import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/lib/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Viveka Massey - Content Writer & Copywriter',
    template: '%s | Viveka Massey'
  },
  description: 'Professional content writer and copywriter passionate about creating engaging, SEO-optimized content that connects with audiences and drives results.',
  keywords: ['Content Writer', 'Copywriter', 'SEO Content', 'Blog Writing', 'Marketing Copy', 'Content Strategy', 'Digital Marketing'],
  authors: [{ name: 'Viveka Massey' }],
  creator: 'Viveka Massey',
  publisher: 'Viveka Massey',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vivekamassey.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vivekamassey.com',
    title: 'Viveka Massey - Content Writer & Copywriter',
    description: 'Professional content writer and copywriter passionate about creating engaging, SEO-optimized content that connects with audiences and drives results.',
    siteName: 'Viveka Massey Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Viveka Massey - Content Writer & Copywriter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Viveka Massey - Content Writer & Copywriter',
    description: 'Professional content writer and copywriter passionate about creating engaging, SEO-optimized content that connects with audiences and drives results.',
    images: ['/og-image.jpg'],
    creator: '@vivekamassey',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
