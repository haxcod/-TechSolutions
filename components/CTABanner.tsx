'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import { getContactEmail, getPhoneNumber, contactConfig } from '@/config/contact'

export function CTABanner() {
  return (
<section className="py-20 bg-linear-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let&apos;s Build Your Project Together
          </h2>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Get in touch with our experts and let&apos;s discuss your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <a href={`tel:${getPhoneNumber('tel')}`}>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="opacity-90">{getPhoneNumber('display')}</p>
              <p className="text-sm opacity-75">{contactConfig.businessHours.support}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="opacity-90">{getContactEmail('primary')}</p>
              <p className="text-sm opacity-75">{contactConfig.support.responseTime}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
              <p className="opacity-90">Same Day Quote</p>
              <p className="text-sm opacity-75">Free Consultation</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
