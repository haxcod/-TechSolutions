'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { getContactEmail, getPhoneNumber, contactConfig, getFormattedAddress } from '@/config/contact'

export function ContactHero() {
  return (
    <section className="py-20 bg-linear-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight"
            >
              Get In <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed"
            >
              Ready to start your next project? We&apos;d love to hear from you. 
              Get in touch with our team and let&apos;s discuss how we can help 
              bring your ideas to life.
            </motion.p>

            {/* Quick Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 py-8"
            >
              <div className="flex flex-col items-center text-center space-y-2 bg-white p-3 sm:p-4 rounded-xl shadow-lg">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">Call Us</div>
                  <div className="text-xs sm:text-sm text-gray-600">{getPhoneNumber('display')}</div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 bg-white p-3 sm:p-4 rounded-xl shadow-lg">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                <div>
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">Email Us</div>
                  <div className="text-xs sm:text-sm text-gray-600">{getContactEmail('primary')}</div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 bg-white p-3 sm:p-4 rounded-xl shadow-lg">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                <div>
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">Visit Us</div>
                  <div className="text-xs sm:text-sm text-gray-600">{contactConfig.contact.address.city}, {contactConfig.contact.address.state}</div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 bg-white p-3 sm:p-4 rounded-xl shadow-lg">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                <div>
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">Hours</div>
                  <div className="text-xs sm:text-sm text-gray-600">{contactConfig.businessHours.support}</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href={`tel:${getPhoneNumber('raw')}`}>
            <Button size="lg" className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
              </a>
              <a href={`mailto:${getContactEmail('primary')}`}>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  <Mail className="mr-2 w-5 h-5" />
                  Send Email
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
