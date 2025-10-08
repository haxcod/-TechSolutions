import { Metadata } from 'next'
import { SEO } from '@/components/SEO'

export const metadata: Metadata = {
  title: 'Cookie Policy | Haxcod Inc',
  description: 'Learn about how Haxcod Inc uses cookies and similar technologies to enhance your browsing experience and improve our services.',
}

export default function CookiePolicy() {
  return (
    <>
      <SEO 
        title="Cookie Policy | Haxcod Inc"
        description="Learn about how Haxcod Inc uses cookies and similar technologies to enhance your browsing experience and improve our services."
        canonical="/cookies"
      />
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when 
                  you visit our website. They are widely used to make websites work more efficiently 
                  and provide information to website owners.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies for several purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>To ensure our website functions properly</li>
                  <li>To remember your preferences and settings</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>To improve user experience</li>
                  <li>To provide personalized content</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Essential Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies are necessary for the website to function and cannot be switched off. 
                    They are usually only set in response to actions made by you which amount to a 
                    request for services.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Analytics Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies help us understand how visitors interact with our website by 
                    collecting and reporting information anonymously. This helps us improve our 
                    website&apos;s performance.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Functional Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies enable the website to provide enhanced functionality and 
                    personalization. They may be set by us or by third-party providers whose 
                    services we have added to our pages.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Marketing Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies may be set through our site by our advertising partners. They may 
                    be used to build a profile of your interests and show you relevant adverts on 
                    other sites.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We may use third-party services that also set cookies on your device. These include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing functionality</li>
                  <li>Customer support tools</li>
                  <li>Marketing and advertising platforms</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Managing Cookies</h2>
                <p className="text-gray-700 mb-4">
                  You can control and manage cookies in various ways:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Browser settings: Most browsers allow you to refuse cookies or delete existing ones</li>
                  <li>Opt-out tools: Many advertising networks provide opt-out mechanisms</li>
                  <li>Privacy settings: Adjust your privacy preferences in your browser</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Please note that disabling cookies may affect the functionality of our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookie Retention</h2>
                <p className="text-gray-700 mb-4">
                  Cookies are retained for different periods depending on their purpose:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent cookies:</strong> Remain for a set period or until manually deleted</li>
                  <li><strong>Analytics cookies:</strong> Typically retained for 2 years</li>
                  <li><strong>Marketing cookies:</strong> Retention periods vary by provider</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Updates to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in our 
                  practices or for other operational, legal, or regulatory reasons. Please check 
                  this page periodically for updates.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Haxcod Inc</strong><br />
                    Email: privacy@haxcod.com<br />
                    Phone: +1 (555) 123-4567<br />
                    Address: 123 Tech Street, Innovation District, San Francisco, CA 94105
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}