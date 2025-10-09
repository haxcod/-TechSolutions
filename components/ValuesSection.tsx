'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Lightbulb, Shield, Users, Target, Award } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are passionate about technology and committed to delivering solutions that make a real difference in our clients\' businesses.',
    color: 'from-red-400 to-pink-500'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay at the forefront of technology trends and continuously innovate to provide cutting-edge solutions for our clients.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We maintain the highest standards of honesty, transparency, and ethical conduct in all our business relationships.',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and work closely with our clients as partners in their success journey.',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to customer service, ensuring the best possible outcomes.',
    color: 'from-purple-400 to-violet-500'
  },
  {
    icon: Award,
    title: 'Reliability',
    description: 'We are dependable partners who deliver on our promises, meet deadlines, and provide consistent quality service.',
    color: 'from-indigo-400 to-blue-500'
  }
]

export function ValuesSection() {
  return (
  <section className="py-20 bg-linear-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our core values guide everything we do and shape the way we work 
            with our clients and team members.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white/80 backdrop-blur-xs">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-linear-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
