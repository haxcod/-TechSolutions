'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Filter, Grid, List } from 'lucide-react'
import Link from 'next/link'

export function PortfolioHero() {
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
              className="text-4xl lg:text-6xl font-bold leading-tight"
            >
              Our <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 leading-relaxed"
            >
              Explore our collection of successful projects that showcase our expertise 
              in web development, mobile applications, and cloud solutions.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8"
            >
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button size="lg" className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <Filter className="mr-2 w-5 h-5" />
                Filter Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
