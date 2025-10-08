'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Globe, Smartphone, Cloud, Users } from 'lucide-react'
import Link from 'next/link'

export function ServicesHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 w-full"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold leading-tight"
              >
                Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">IT Services</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                From web development to cloud solutions, we provide end-to-end 
                technology services that help your business thrive in the digital world.
              </motion.p>
            </div>

            {/* Service Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-3"
            >
              {[
                'Custom Web & Mobile Applications',
                'Cloud Infrastructure & Migration',
                'IT Consulting & Strategy',
                '24/7 Technical Support'
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  View Our Work
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Service Categories */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 w-full"
          >
            {[
              {
                title: 'Web Development',
                description: 'Modern, responsive websites and web applications',
                percentage: '95%',
                color: 'from-blue-500 to-blue-600',
                icon: Globe,
                bgColor: 'bg-blue-50',
                iconColor: 'text-blue-600'
              },
              {
                title: 'Mobile Development',
                description: 'Native and cross-platform mobile applications',
                percentage: '90%',
                color: 'from-purple-500 to-purple-600',
                icon: Smartphone,
                bgColor: 'bg-purple-50',
                iconColor: 'text-purple-600'
              },
              {
                title: 'Cloud Solutions',
                description: 'Scalable cloud infrastructure and deployment',
                percentage: '88%',
                color: 'from-green-500 to-green-600',
                icon: Cloud,
                bgColor: 'bg-green-50',
                iconColor: 'text-green-600'
              },
              {
                title: 'IT Consulting',
                description: 'Strategic technology planning and implementation',
                percentage: '92%',
                color: 'from-orange-500 to-orange-600',
                icon: Users,
                bgColor: 'bg-orange-50',
                iconColor: 'text-orange-600'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`p-3 rounded-lg ${service.bgColor}`}>
                    <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-lg font-semibold text-gray-800">{service.title}</h2>
                      <span className="text-2xl font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
                        {service.percentage}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div 
                    className={`h-3 bg-gradient-to-r ${service.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: service.percentage }}
                    transition={{ duration: 1.5, delay: 0.8 + index * 0.2, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
