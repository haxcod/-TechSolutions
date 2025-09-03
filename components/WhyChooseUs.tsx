'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Zap, Shield, Clock, DollarSign, Award, Headphones } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'We deliver projects on time with agile development methodologies and efficient project management.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Your data and applications are protected with enterprise-grade security measures and best practices.',
    color: 'from-green-400 to-blue-500'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support to ensure your systems run smoothly at all times.',
    color: 'from-blue-400 to-purple-500'
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Competitive pricing with transparent costs and no hidden fees. Get maximum value for your investment.',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Our certified developers and designers bring years of experience in cutting-edge technologies.',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Personal account manager and dedicated support team for seamless communication and project success.',
    color: 'from-indigo-400 to-blue-500'
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Us?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another IT company. We're your technology partners, 
            committed to delivering exceptional results that drive your business forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Expert Developers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">5+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
