'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Filter, Grid, List } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce solution with advanced features like real-time inventory management, payment processing, and analytics dashboard.',
    image: 'https://picsum.photos/500/300?random=1',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    category: 'Web Development',
    link: '#',
    github: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial analytics.',
    image: 'https://picsum.photos/500/300?random=2',
    tech: ['React Native', 'Firebase', 'Node.js', 'AWS', 'Biometric Auth'],
    category: 'Mobile Development',
    link: '#',
    github: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Cloud Management Dashboard',
    description: 'Enterprise-grade cloud infrastructure management platform with monitoring, automation, and cost optimization features.',
    image: 'https://picsum.photos/500/300?random=3',
    tech: ['React', 'Python', 'AWS', 'Docker', 'Kubernetes'],
    category: 'Cloud Solutions',
    link: '#',
    github: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Healthcare Management System',
    description: 'Complete healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.',
    image: 'https://picsum.photos/500/300?random=4',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL', 'Redis', 'WebRTC'],
    category: 'Custom Software',
    link: '#',
    github: '#',
    featured: true
  },
  {
    id: 5,
    title: 'Learning Management System',
    description: 'Comprehensive LMS platform with course creation, student tracking, and interactive learning features.',
    image: 'https://picsum.photos/500/300?random=5',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
    category: 'Web Development',
    link: '#',
    github: '#',
    featured: false
  },
  {
    id: 6,
    title: 'Food Delivery App',
    description: 'Multi-platform food delivery application with real-time tracking, payment integration, and restaurant management.',
    image: 'https://picsum.photos/500/300?random=6',
    tech: ['Flutter', 'Firebase', 'Node.js', 'Google Maps', 'Stripe'],
    category: 'Mobile Development',
    link: '#',
    github: '#',
    featured: false
  },
  {
    id: 7,
    title: 'IoT Monitoring Platform',
    description: 'Real-time IoT device monitoring and management platform with predictive analytics and alert systems.',
    image: 'https://picsum.photos/500/300?random=7',
    tech: ['React', 'Python', 'MQTT', 'InfluxDB', 'Grafana'],
    category: 'Cloud Solutions',
    link: '#',
    github: '#',
    featured: true
  },
  {
    id: 8,
    title: 'CRM System',
    description: 'Custom CRM solution with lead management, sales tracking, and customer relationship analytics.',
    image: 'https://picsum.photos/500/300?random=8',
    tech: ['Angular', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker'],
    category: 'Custom Software',
    link: '#',
    github: '#',
    featured: false
  },
  {
    id: 9,
    title: 'Social Media Dashboard',
    description: 'Comprehensive social media management platform with scheduling, analytics, and engagement tracking.',
    image: 'https://picsum.photos/500/300?random=9',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Social APIs', 'Chart.js'],
    category: 'Web Development',
    link: '#',
    github: '#',
    featured: false
  }
]

const categories = ['All', 'Web Development', 'Mobile Development', 'Cloud Solutions', 'Custom Software']

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  // Handle filter change
  const handleCategoryChange = (category: string) => {
    console.log('Filter clicked:', category)
    setSelectedCategory(category)
  }

  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Filters and View Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center mb-12 space-y-4 lg:space-y-0"
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const count = category === 'All' 
                ? projects.length 
                : projects.filter(project => project.category === category).length
              
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                  }`}
                >
                  {category} ({count})
                </button>
              )
            })}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              aria-label="List view"
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Results Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-gray-600 text-center">
            Showing {filteredProjects.length} of {projects.length} projects
            {selectedCategory !== 'All' && (
              <span className="text-blue-600 font-medium"> in {selectedCategory}</span>
            )}
          </p>
        </motion.div>

        {/* Projects Grid/List */}
        <div className={`gap-8 ${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'flex flex-col'
        }`}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`hover:shadow-xl transition-all duration-300 group border-0 shadow-lg overflow-hidden ${
                viewMode === 'list' ? 'mb-8' : 'h-full'
              }`}>
                {viewMode === 'grid' ? (
                  // Grid View Layout
                  <>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-3">
                        <Button variant="outline" size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </CardContent>
                  </>
                ) : (
                  // List View Layout
                  <div className="flex flex-col lg:flex-row overflow-hidden">
                    <div className="relative h-56 lg:h-48 lg:w-72 flex-shrink-0 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        <Button variant="outline" size="sm" className="min-w-32">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                        <Button variant="outline" size="sm" className="min-w-24">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="px-8 py-4">
            Load More Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
