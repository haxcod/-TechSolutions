'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Users, Award, Target } from 'lucide-react'
import { getCompanyName } from '@/config/contact'

export function AboutHero() {
  return (
<section className="py-20 bg-linear-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
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
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
              >
                About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{getCompanyName('name')}</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-600 leading-relaxed"
              >
                We are a team of passionate developers, designers, and technology experts 
                dedicated to delivering exceptional digital solutions that drive business growth.
              </motion.p>
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Our Mission</h2>
              <p className="text-gray-600">
                To empower businesses with innovative technology solutions that enhance 
                productivity, improve user experiences, and drive sustainable growth in 
                the digital landscape.
              </p>
            </motion.div>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-3"
            >
              {[
                '5+ Years of Industry Experience',
                '500+ Successful Projects Delivered',
                '50+ Expert Team Members',
                '98% Client Satisfaction Rate'
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 w-full"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
                <div className="text-gray-600">Expert Team Members</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </motion.div>
            </div>

            {/* Vision Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
className="bg-linear-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white"
            >
              <h2 className="text-xl font-semibold mb-3">Our Vision</h2>
              <p className="opacity-90">
                To be the leading technology partner for businesses worldwide, 
                recognized for our innovation, reliability, and commitment to 
                delivering exceptional digital experiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
