import type { Metadata } from 'next'
import { SEO } from '@/components/SEO'
import { getCompanyName, getContactEmail, getPhoneNumber, getFormattedAddress } from '@/config/contact'

export const metadata: Metadata = {
  title: `Terms of Service | ${getCompanyName('full')}`,
  description: `Read our Terms of Service to understand the rules and regulations governing the use of ${getCompanyName('full')} services and website.`,
}

export default function TermsOfService() {
  return (
    <>
      <SEO 
        title={`Terms of Service | ${getCompanyName('full')}`}
        description={`Read our Terms of Service to understand the rules and regulations governing the use of ${getCompanyName('full')} services and website.`}
        canonical="/terms"
      />
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using {getCompanyName('full')}&apos;s services, you accept and agree to be bound by the 
                  terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
                <p className="text-gray-700 mb-4">
                  {getCompanyName('full')} provides IT services including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Web development and design</li>
                  <li>Mobile application development</li>
                  <li>Cloud solutions and infrastructure</li>
                  <li>IT consulting and strategy</li>
                  <li>Custom software development</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-700 mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Not engage in any activity that disrupts our services</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
                <p className="text-gray-700 mb-4">
                  Payment terms are established in individual service agreements. Generally:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Invoices are due within 30 days of receipt</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Services may be suspended for non-payment</li>
                  <li>All prices are subject to applicable taxes</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  Unless otherwise specified in writing:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Client retains ownership of their data and content</li>
                  <li>{getCompanyName('full')} retains rights to general methodologies and know-how</li>
                  <li>Custom developments are owned by the client upon full payment</li>
                  <li>Third-party components remain subject to their respective licenses</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  {getCompanyName('full')} shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages, including without limitation, loss of profits, data, use, 
                  goodwill, or other intangible losses.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
                <p className="text-gray-700 mb-4">
                  Either party may terminate services with appropriate notice as specified in 
                  individual service agreements. Upon termination:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>All outstanding invoices become immediately due</li>
                  <li>Access to services will be discontinued</li>
                  <li>Data backup and transfer procedures will be followed</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting. Continued use of our services constitutes acceptance of 
                  modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>{getCompanyName('full')}</strong><br />
                    Email: {getContactEmail('legal')}<br />
                    Phone: {getPhoneNumber('display')}<br />
                    Address: {getFormattedAddress('full')}
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