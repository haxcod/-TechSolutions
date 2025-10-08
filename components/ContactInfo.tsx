'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, MessageCircle, Users, Award, Zap } from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Call us for immediate assistance',
    contact: '+1 (555) 123-4567',
    availability: '24/7 Available',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us an email anytime',
    contact: 'info@haxcod.com',
    availability: 'Response within 2 hours',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our support team',
    contact: 'Available on website',
    availability: 'Mon-Fri 9AM-6PM',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: MapPin,
    title: 'Office Visit',
    description: 'Visit our office location',
    contact: '123 Tech Street, SF',
    availability: 'By appointment only',
    color: 'from-orange-500 to-orange-600'
  }
]

const whyChooseUs = [
  {
    icon: Zap,
    title: 'Fast Response',
    description: 'We respond to all inquiries within 2 hours during business hours.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our experienced team is ready to help with any technical questions.'
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: '500+ successful projects and 98% client satisfaction rate.'
  }
]

export function ContactInfo() {
  return (
    <div className="bg-white p-4 sm:p-6 lg:p-12 overflow-hidden contact-info-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-8 sm:space-y-12 w-full"
      >
        {/* Contact Methods */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Get in Touch</h2>
          <div className="space-y-4 sm:space-y-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                          {method.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
                          {method.description}
                        </p>
                        <div className="space-y-1">
                          <p className="font-medium text-gray-800 text-sm sm:text-base">
                            {method.contact}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-500">
                            {method.availability}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
          <div className="space-y-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800">Business Hours</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex justify-between font-medium text-blue-600">
                    <span>Emergency Support</span>
                    <span>24/7 Available</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
