'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Rocket, Award } from 'lucide-react'

const timeline = [
  {
    year: '2019',
    title: 'Company Founded',
    description: 'Started as a small team of passionate developers with a vision to transform businesses through technology.',
    icon: Calendar,
    color: 'from-blue-500 to-blue-600'
  },
  {
    year: '2020',
    title: 'First Major Project',
    description: 'Delivered our first enterprise-level web application, establishing our reputation for quality and reliability.',
    icon: Rocket,
    color: 'from-purple-500 to-purple-600'
  },
  {
    year: '2021',
    title: 'Team Expansion',
    description: 'Grew our team to 25+ experts and expanded our services to include mobile app development and cloud solutions.',
    icon: Users,
    color: 'from-green-500 to-green-600'
  },
  {
    year: '2022',
    title: 'Award Recognition',
    description: 'Received the "Best IT Services Company" award and reached 200+ successful project milestones.',
    icon: Award,
    color: 'from-orange-500 to-orange-600'
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Expanded our services globally and established partnerships with leading technology companies.',
    icon: Rocket,
    color: 'from-pink-500 to-pink-600'
  },
  {
    year: '2024',
    title: 'Innovation Leader',
    description: 'Became a recognized leader in AI-powered solutions and reached 500+ successful projects.',
    icon: Award,
    color: 'from-indigo-500 to-indigo-600'
  }
]

export function OurStory() {
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
            Our <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming a trusted technology partner, 
            here&apos;s the story of our growth and achievements.
          </p>
        </motion.div>

        <div className="relative w-full max-w-6xl mx-auto timeline-container">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-blue-200 via-purple-200 to-green-200 hidden lg:block"></div>

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-center lg:justify-between w-full timeline-item"
              >
                {/* Left Side Content (Even Index) */}
                {index % 2 === 0 && (
                  <div className="hidden lg:block w-5/12">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-right">
                      <div className="flex items-center justify-end space-x-3 mb-4">
                        <div>
                          <div className="text-2xl font-bold text-gray-800">{item.year}</div>
                          <div className="text-lg font-semibold text-gray-700">{item.title}</div>
                        </div>
                        <div className={`w-12 h-12 bg-linear-to-r ${item.color} rounded-full flex items-center justify-center`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Timeline Dot */}
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-4 border-white relative z-10">
                  <div className={`w-8 h-8 bg-linear-to-r ${item.color} rounded-full`}></div>
                </div>

                {/* Right Side Content (Odd Index) */}
                {index % 2 === 1 && (
                  <div className="hidden lg:block w-5/12">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-left">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-12 h-12 bg-linear-to-r ${item.color} rounded-full flex items-center justify-center`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-800">{item.year}</div>
                          <div className="text-lg font-semibold text-gray-700">{item.title}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Mobile Content */}
                <div className="lg:hidden w-full max-w-md mx-auto mt-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <div className={`w-12 h-12 bg-linear-to-r ${item.color} rounded-full flex items-center justify-center`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">{item.year}</div>
                        <div className="text-lg font-semibold text-gray-700">{item.title}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
