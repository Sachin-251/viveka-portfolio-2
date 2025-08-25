import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Viveka Massey portfolio website. Learn how we collect, use, and protect your personal information in accordance with Indian data protection laws.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12">
          Privacy Policy
        </h1>
        
        <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
            <strong>Last updated:</strong> {new Date(2025, 7, 25).toLocaleDateString('en-IN')}
          </p>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              1. Introduction
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              Welcome to Viveka Massey&apos;s portfolio and blog website (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at <strong>vivekamassey.com</strong> (the &ldquo;Service&rdquo;).
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              This Privacy Policy is compliant with the Digital Personal Data Protection Act, 2023 (DPDPA) and other applicable Indian laws and regulations. By using our Service, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Service.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              <strong>Data Fiduciary:</strong> Viveka Massey operates as the Data Fiduciary under the DPDPA for the personal data collected through this website.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              2. Information We Collect
            </h2>
            
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
              2.1 Personal Information
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 space-y-1">
              <li>Fill out our contact form (name, email address, and message)</li>
              <li>Subscribe to our newsletter (if applicable)</li>
              <li>Comment on blog posts (if enabled)</li>
              <li>Send us direct emails</li>
            </ul>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
              2.2 Automatically Collected Information
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 space-y-1">
              <li>IP address and general location information</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
              <li>Device information (if applicable)</li>
            </ul>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
              2.3 Content Management System Data
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Our website uses Sanity.io as a content management system. Sanity may collect technical data related to content delivery and performance optimization, but does not collect personal information from visitors.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 space-y-1">
              <li><strong>Contact Form Submissions:</strong> To respond to your inquiries, provide customer support, and communicate with you about potential projects or collaborations</li>
              <li><strong>Website Improvement:</strong> To analyze website usage patterns, improve user experience, and optimize content delivery</li>
              <li><strong>Content Delivery:</strong> To display portfolio work, blog posts, and other content through our Sanity CMS</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable Indian laws, regulations, and legal processes</li>
              <li><strong>Security:</strong> To protect against fraud, abuse, and security threats</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              4. Information Sharing and Disclosure
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 space-y-1">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, such as hosting providers and email services</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by Indian law or in response to valid legal requests from Indian authorities</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction</li>
              <li><strong>Consent:</strong> We may share information with your explicit consent</li>
              <li><strong>Public Interest:</strong> As permitted under Section 8 of the DPDPA for public interest purposes</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              5. Third-Party Services
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              Our website uses the following third-party services:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 space-y-1">
              <li><strong>Sanity.io:</strong> Content management system for portfolio and blog content</li>
              <li><strong>Next.js/Vercel:</strong> Website hosting and performance optimization</li>
              <li><strong>Google Fonts:</strong> Typography services (Inter font)</li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              These services have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of these third-party services.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              6. Data Security
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 space-y-1">
              <li>Secure HTTPS connections</li>
              <li>Regular security updates and monitoring</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Secure data transmission protocols</li>
              <li>Compliance with Indian cybersecurity standards</li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              Our website may use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 space-y-1">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve website performance and user experience</li>
              <li>Provide personalized content and features</li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              8. Your Rights Under DPDPA
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              As a Data Principal under the Digital Personal Data Protection Act, 2023, you have the following rights:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 space-y-1">
              <li><strong>Right to Access:</strong> Request access to your personal data and information about how it is processed</li>
              <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete personal data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data (subject to legal obligations)</li>
              <li><strong>Right to Grievance Redressal:</strong> File complaints with the Data Protection Board of India</li>
              <li><strong>Right to Nominate:</strong> Nominate another individual to exercise your rights in case of death or incapacity</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for processing personal data</li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              9. Data Retention
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by Indian law. Contact form submissions are typically retained for up to 2 years unless you request deletion or as required by applicable Indian regulations.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              10. Children&apos;s Privacy
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Our Service is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. We will take appropriate steps to remove such information from our records.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              11. Cross-Border Data Transfers
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Your information may be transferred to and processed in countries other than India. We ensure that such transfers comply with the DPDPA and other applicable Indian data protection laws. We implement appropriate safeguards to protect your information during such transfers.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              12. Changes to This Privacy Policy
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              13. Contact Us
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-2">
                <strong>Name:</strong> Viveka Massey
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:rebekah.251@outlook.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  rebekah.251@outlook.com
                </a>
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-2">
                <strong>Location:</strong> India
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-2">
                <strong>Website:</strong>{' '}
                <a href="https://vivekamassey.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  viveka-narratives.com
                </a>
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                <strong>Grievance Officer:</strong> Viveka Massey (same contact details as above)
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              14. Legal Basis for Processing (DPDPA Compliance)
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              Under the Digital Personal Data Protection Act, 2023, our legal basis for processing your personal data includes:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 space-y-1">
              <li><strong>Consent:</strong> When you provide explicit consent for specific processing activities</li>
              <li><strong>Legitimate Use:</strong> For providing services, website improvement, and business operations</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable Indian laws and regulations</li>
              <li><strong>Public Interest:</strong> For purposes permitted under Section 8 of the DPDPA</li>
              <li><strong>Employment:</strong> If applicable, for employment-related purposes</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              15. Grievance Redressal
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              If you have any grievances regarding the processing of your personal data, you may:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 space-y-1">
              <li>Contact our Grievance Officer at the contact details provided above</li>
              <li>File a complaint with the Data Protection Board of India</li>
              <li>Seek legal remedies as provided under the DPDPA</li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              We are committed to addressing your concerns promptly and in accordance with Indian data protection laws.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              16. Applicable Law and Jurisdiction
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              This Privacy Policy is governed by and construed in accordance with the laws of India. Any disputes arising from this Privacy Policy shall be subject to the exclusive jurisdiction of the courts in India. This policy is specifically designed to comply with the Digital Personal Data Protection Act, 2023, and other applicable Indian data protection regulations.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
