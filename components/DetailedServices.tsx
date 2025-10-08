'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Globe, Smartphone, Cloud, Users, Code, Database, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web Development',
    description: 'We create modern, responsive websites and web applications that deliver exceptional user experiences and drive business growth.',
    features: [
      'Custom Website Development',
      'E-commerce Solutions',
      'Web Application Development',
      'Progressive Web Apps (PWA)',
      'API Development & Integration',
      'Performance Optimization'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100'
  },
  {
    id: 'mobile-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences across iOS and Android devices.',
    features: [
      'iOS App Development',
      'Android App Development',
      'Cross-Platform Solutions',
      'App Store Optimization',
      'Push Notifications',
      'Mobile App Maintenance'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100'
  },
  {
    id: 'cloud-solutions',
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions that ensure high availability, security, and cost-effectiveness.',
    features: [
      'Cloud Migration',
      'Infrastructure as Code',
      'DevOps & CI/CD',
      'Container Orchestration',
      'Cloud Security',
      'Cost Optimization'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100'
  },
  {
    id: 'it-consulting',
    icon: Users,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to help you make informed decisions about your digital transformation journey.',
    features: [
      'Technology Strategy',
      'Digital Transformation',
      'System Architecture',
      'Technology Audit',
      'Best Practices',
      'Training & Support'
    ],
    technologies: ['Architecture Design', 'Technology Selection', 'Process Optimization', 'Security Assessment'],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100'
  },
  {
    id: 'custom-software',
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business requirements and streamline your operations.',
    features: [
      'Business Process Automation',
      'Custom CRM Systems',
      'Enterprise Software',
      'Integration Solutions',
      'Legacy System Modernization',
      'Quality Assurance'
    ],
    technologies: ['Python', 'Java', 'C#', '.NET', 'Microservices', 'REST APIs'],
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'from-indigo-50 to-indigo-100'
  },
  {
    id: 'database-solutions',
    icon: Database,
    title: 'Database Solutions',
    description: 'Robust database design, optimization, and management solutions to ensure data integrity and performance.',
    features: [
      'Database Design & Architecture',
      'Performance Optimization',
      'Data Migration',
      'Backup & Recovery',
      'Data Security',
      'Database Monitoring'
    ],
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'AWS RDS'],
    color: 'from-pink-500 to-pink-600',
    bgColor: 'from-pink-50 to-pink-100'
  }
]

export function DetailedServices() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of IT services to help your business 
            succeed in the digital landscape. Each service is tailored to meet 
            your specific needs and goals.
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">{service.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-800">What We Offer:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-800">Technologies We Use:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Visual/Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className={`h-80 bg-gradient-to-br ${service.bgColor} rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-center space-y-4">
                    <div className={`w-24 h-24 bg-gradient-to-r ${service.color} rounded-full mx-auto flex items-center justify-center`}>
                      <service.icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 max-w-xs mx-auto">
                      Professional {service.title.toLowerCase()} services
                    </p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
