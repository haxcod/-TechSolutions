'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { contactConfig, getPhoneNumber, getContactEmail, getFormattedAddress } from '@/config/contact'

export function MapSection() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
  Visit Our <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Office</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Located in the heart of {contactConfig.contact.address.city}&apos;s tech district, our office is easily 
            accessible and equipped with modern facilities for client meetings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
  <div className="h-64 sm:h-80 lg:h-96 bg-linear-to-br from-blue-100 to-purple-100 rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden">
              {/* Map placeholder with decorative elements */}
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Our Location</h3>
                <p className="text-sm sm:text-base text-gray-600">{getFormattedAddress('short')}</p>
                <p className="text-sm sm:text-base text-gray-600">{contactConfig.contact.address.city}, {contactConfig.contact.address.state} {contactConfig.contact.address.zipCode}</p>
              </div>
              
              {/* Decorative map elements */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute top-8 right-8 w-6 h-6 bg-purple-500 rounded-full opacity-20"></div>
              <div className="absolute bottom-6 left-8 w-4 h-4 bg-green-500 rounded-full opacity-20"></div>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-orange-500 rounded-full opacity-20"></div>
            </div>
          </motion.div>

          {/* Office Information */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 w-full"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {getFormattedAddress('multiline')}<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                  <p className="text-gray-600">
                    {getPhoneNumber('display')}<br />
                    <span className="text-sm text-gray-500">Available 24/7 for emergencies</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600">
                    {getContactEmail('primary')}<br />
                    <span className="text-sm text-gray-500">Response within 2 hours</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Office Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                    <p className="text-sm text-blue-600 font-medium">Emergency Support: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions */}
  <div className="bg-linear-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Getting Here</h3>
              <div className="space-y-2 text-gray-600 text-sm">
                <p><strong>By Car:</strong> Free parking available in our building garage</p>
                <p><strong>By Public Transit:</strong> 5-minute walk from Montgomery BART station</p>
                <p><strong>By Bus:</strong> Multiple bus lines stop within 2 blocks</p>
                <p><strong>Accessibility:</strong> Fully wheelchair accessible with elevator access</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
