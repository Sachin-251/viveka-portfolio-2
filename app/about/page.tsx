import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Content Writer & Copywriter',
  description: 'Learn more about Viveka Massey, a passionate content writer and copywriter specializing in SEO-optimized content and compelling marketing copy.',
  openGraph: {
    title: 'About - Content Writer & Copywriter',
    description: 'Learn more about Viveka Massey, a passionate content writer and copywriter specializing in SEO-optimized content and compelling marketing copy.',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12">
          About Me
        </h1>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl sm:text-6xl lg:text-8xl mb-2 sm:mb-4">👨‍💻</div>
                <p className="text-sm sm:text-base lg:text-xl font-semibold">Profile Image</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Who I Am
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I&apos;m a passionate content writer and copywriter with a love for creating engaging, SEO-optimized content that connects with audiences and drives results. 
                With several years of experience in digital marketing, I specialize in content strategy and compelling storytelling.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                My Approach
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe in writing compelling, audience-focused content and creating meaningful connections through storytelling. Every project I work on is an opportunity 
                to learn something new and push the boundaries of what&apos;s possible with words.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Services I Offer
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">Content Writing</h3>
                  <ul className="text-sm sm:text-base text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2">
                    <li>• Blog Writing</li>
                    <li>• SEO Content</li>
                    <li>• Copywriting</li>
                    <li>• Content Strategy</li>
                  </ul>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">Marketing</h3>
                  <ul className="text-sm sm:text-base text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2">
                    <li>• Email Marketing</li>
                    <li>• Social Media</li>
                    <li>• Brand Storytelling</li>
                    <li>• Digital Marketing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                What I Do
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300">
                    Create engaging blog posts and articles that inform and entertain readers
                  </p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300">
                    Write compelling marketing copy that converts visitors into customers
                  </p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300">
                    Optimize content for search engines while maintaining readability
                  </p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300">
                    Collaborate with marketing teams to develop effective content strategies
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Beyond Writing
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I&apos;m not writing, you can find me reading industry publications, attending content marketing conferences, 
                or sharing insights through my blog. I believe in continuous learning and staying up-to-date 
                with the latest content marketing trends and SEO best practices.
              </p>
            </div>

            <div className="pt-6 sm:pt-8">
              <a 
                href="#contact"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Let&apos;s Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
