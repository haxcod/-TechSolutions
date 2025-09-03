'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react'

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Analysis',
    description: 'We start by understanding your business goals, requirements, and challenges to create a comprehensive project plan.',
    icon: Search,
    color: 'from-blue-500 to-blue-600',
    details: [
      'Business requirements analysis',
      'Technical feasibility study',
      'Project scope definition',
      'Timeline and budget planning'
    ]
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    description: 'Our team develops a detailed strategy and technical architecture that aligns with your business objectives.',
    icon: Lightbulb,
    color: 'from-purple-500 to-purple-600',
    details: [
      'Technical architecture design',
      'Technology stack selection',
      'Development methodology planning',
      'Risk assessment and mitigation'
    ]
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'We build your solution using agile methodologies with regular testing and quality assurance throughout the process.',
    icon: Code,
    color: 'from-green-500 to-green-600',
    details: [
      'Agile development process',
      'Regular code reviews',
      'Continuous testing',
      'Quality assurance'
    ]
  },
  {
    step: '04',
    title: 'Deployment & Launch',
    description: 'We deploy your solution to production with comprehensive monitoring and provide launch support.',
    icon: Rocket,
    color: 'from-orange-500 to-orange-600',
    details: [
      'Production deployment',
      'Performance monitoring',
      'Launch support',
      'User training'
    ]
  },
  {
    step: '05',
    title: 'Support & Maintenance',
    description: 'We provide ongoing support, maintenance, and updates to ensure your solution continues to perform optimally.',
    icon: CheckCircle,
    color: 'from-indigo-500 to-indigo-600',
    details: [
      '24/7 technical support',
      'Regular updates and patches',
      'Performance optimization',
      'Feature enhancements'
    ]
  }
]

export function ProcessSection() {
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
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven development process that ensures quality, 
            transparency, and successful project delivery every time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 via-orange-200 to-indigo-200 transform -translate-y-1/2"></div>

          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  {/* Step Number and Icon */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg relative z-10`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-400">{step.step}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 max-w-2xl">
                    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                          {step.title}
                        </CardTitle>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+15551234567"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
