import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Viveka Portfolio',
  description: 'Terms of service for Viveka portfolio and blog website. Read our comprehensive terms and conditions for using this website.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Terms of Service
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            <strong>Last updated:</strong> {new Date(2025, 7, 25).toLocaleDateString('en-IN')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              By accessing and using this website (hereinafter referred to as &quot;the Website&quot; or &quot;our Website&quot;), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              This Website is owned and operated by Viveka Massey (hereinafter referred to as &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your use of our Website and any services offered through it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. Description of Service
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our Website provides:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Portfolio showcase of professional work and projects</li>
              <li>Blog content related to technology, development, and industry insights</li>
              <li>Contact forms for professional inquiries</li>
              <li>Educational content and resources</li>
              <li>Professional services information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. User Eligibility and Registration
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You must be at least 18 years old to use this Website. By using our Website, you represent and warrant that you meet this age requirement.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              While registration is not required to view most content, certain features may require you to provide information through our contact forms or comment sections.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. Acceptable Use Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You agree to use our Website only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Use the Website in any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li>Transmit, or procure the sending of, any advertising or promotional material, including any &quot;junk mail,&quot; &quot;chain letter,&quot; &quot;spam,&quot; or any other similar solicitation</li>
              <li>Impersonate or attempt to impersonate the Website, a Website employee, another user, or any other person or entity</li>
              <li>Engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Website</li>
              <li>Use any robot, spider, or other automatic device, process, or means to access the Website for any purpose</li>
              <li>Introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful</li>
              <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              5. Intellectual Property Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Viveka Massey, its licensors, or other providers of such material and are protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on our Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>Attempt to reverse engineer any software contained on the Website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
                             <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              6. User-Generated Content
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you submit comments, feedback, or other content to our Website, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              You represent and warrant that any content you submit is original to you or that you have the right to submit such content and that it does not violate any third-party rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              7. Privacy Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Website, to understand our practices regarding the collection and use of your personal information. Our Privacy Policy is incorporated into these Terms by reference.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              8. Disclaimers and Limitations of Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>Disclaimer of Warranties:</strong> The materials on our Website are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>Limitation of Liability:</strong> In no event shall Viveka Massey or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our Website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Accuracy of Materials:</strong> The materials appearing on our Website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our Website are accurate, complete, or current. We may make changes to the materials contained on our Website at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              9. External Links
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our Website may contain links to external websites that are not provided or maintained by us. We have not reviewed all of the sites linked to our Website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user&apos;s own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              10. Indemnification
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              You agree to defend, indemnify, and hold harmless Viveka Massey and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to your violation of these Terms or your use of the Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              11. Termination
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Website will cease immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              12. Modifications to Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Website after any revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              13. Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising out of or relating to these Terms or the Website shall be subject to the exclusive jurisdiction of the courts located in India.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              If you are accessing our Website from outside India, you are responsible for compliance with local laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              14. Severability
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              15. Entire Agreement
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              These Terms constitute the entire agreement between you and us regarding the use of the Website, superseding any prior agreements between you and us relating to your use of the Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              16. Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:rebekah.251@outlook.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                rebekah.251@outlook.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              17. Grievance Officer
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              In accordance with the Information Technology Act, 2000 and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, we have appointed a Grievance Officer to address any concerns or complaints you may have regarding our Website or these Terms.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Grievance Officer:</strong> Viveka Massey<br />
              <strong>Email:</strong> rebekah.251@outlook.com<br />
              <strong>Response Time:</strong> Within 24 hours of receiving the complaint
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
