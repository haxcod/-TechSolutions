'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and analytics dashboard.',
    image: 'https://picsum.photos/500/300?random=1',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web Development',
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication, real-time transactions, and financial analytics.',
    image: 'https://picsum.photos/500/300?random=2',
    tech: ['React Native', 'Firebase', 'Node.js', 'AWS'],
    category: 'Mobile Development',
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Cloud Management Dashboard',
    description: 'Comprehensive cloud infrastructure management platform with monitoring, automation, and cost optimization features.',
    image: 'https://picsum.photos/500/300?random=3',
    tech: ['React', 'Python', 'AWS', 'Docker'],
    category: 'Cloud Solutions',
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Healthcare Management System',
    description: 'Complete healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.',
    image: 'https://picsum.photos/500/300?random=4',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL', 'Redis'],
    category: 'Custom Software',
    link: '#',
    github: '#'
  }
]

export function PortfolioHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore our recent projects and see how we&apos;ve helped businesses 
            transform their digital presence with innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg overflow-hidden max-w-lg mx-auto">
                <div className="relative h-40 sm:h-48 lg:h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg sm:text-xl font-semibold line-clamp-2">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm sm:text-base line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0 pb-4">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs sm:text-sm">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-2 sm:space-x-3">
                    <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      View Project
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm">
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/portfolio">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
