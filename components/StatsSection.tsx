'use client'

import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useRef, useState, useEffect } from 'react'

interface StatItemProps {
  number: string
  label: string
  suffix?: string
  delay?: number
}

const StatItem = ({ number, label, suffix = '', delay = 0 }: StatItemProps) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const { ref, isIntersecting } = useIntersectionObserver()
  
  useEffect(() => {
    if (isIntersecting && !isVisible) {
      setIsVisible(true)
    }
  }, [isIntersecting, isVisible])

  useEffect(() => {
    if (isVisible) {
      const target = parseInt(number.replace(/[^0-9]/g, ''))
      const duration = 2000
      const increment = target / (duration / 16)
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isVisible, number])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 text-sm md:text-base font-medium">
        {label}
      </div>
    </motion.div>
  )
}

export const StatsSection = () => {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isIntersecting) {
      setIsVisible(true)
    }
  }, [isIntersecting])

  const stats = [
    { number: '500', label: 'Projects Completed', suffix: '+' },
    { number: '150', label: 'Happy Clients', suffix: '+' },
    { number: '5', label: 'Years Experience', suffix: '+' },
    { number: '24', label: 'Support Available', suffix: '/7' }
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Achievements
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence and client satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}