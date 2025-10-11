'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Clock, Star, Zap, Shield, ArrowRight, CheckCircle, Code, Smartphone, Cloud, Users, MessageSquare, Calendar } from 'lucide-react'

interface Offer {
  id: string
  title: string
  originalPrice: number
  discountedPrice: number
  discount: number
  description: string
  features: string[]
  badge: string
  popular?: boolean
  gradient: string
  icon: React.ReactNode
}

interface OffersSectionProps {
  title?: string
  subtitle?: string
  offers: Offer[]
  showTimer?: boolean
  timerDays?: number
  className?: string
}

export function OffersSection({ 
  title = "Exclusive Deals",
  subtitle = "Don&apos;t miss out on these incredible offers! Save up to 33% on our premium development services.",
  offers,
  showTimer = true,
  timerDays = 7,
  className = ""
}: OffersSectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    if (!showTimer) return

    // Set offer end date
    const offerEndDate = new Date()
    offerEndDate.setDate(offerEndDate.getDate() + timerDays)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = offerEndDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [showTimer, timerDays])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section className={`py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 sm:w-80 sm:h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 sm:w-80 sm:h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {title.split(' ').map((word, index) => (
              <span key={index}>
                {index === 1 ? (
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : (
                  word
                )}
                {index < title.split(' ').length - 1 && ' '}
              </span>
            ))}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>

          {/* Countdown Timer */}
          {showTimer && (
            <div className="flex justify-center gap-4 mb-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <motion.div
                  key={unit}
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-4 min-w-[80px] border border-gray-200 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl font-bold text-gray-900">{value.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-600 capitalize">{unit}</div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-center gap-2 text-blue-600">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-medium">Limited Time Offer</span>
          </div>
        </motion.div>

        {/* Offers Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              variants={cardVariants}
              className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 ${
                offer.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
              whileHover={{ y: -10 }}
            >
              {/* Popular Badge */}
              {offer.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {offer.badge}
                  </div>
                </div>
              )}

              {/* Badge */}
              {!offer.popular && (
                <div className="absolute -top-3 -right-3">
                  <div className={`bg-gradient-to-r ${offer.gradient} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {offer.badge}
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${offer.gradient} rounded-2xl mb-6`}>
                {offer.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{offer.title}</h3>
              <p className="text-gray-600 mb-6">{offer.description}</p>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-gray-900">${offer.discountedPrice}</span>
                  <span className="text-lg text-gray-500 line-through">${offer.originalPrice}</span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    -{offer.discount}%
                  </span>
                </div>
                <div className="text-sm text-gray-500">One-time payment</div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {offer.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                className={`w-full bg-gradient-to-r ${offer.gradient} text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Quote CTA */}
        <motion.div
          className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Need a custom solution? Let&apos;s discuss your project requirements.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
            Get Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  )
}

// Predefined offer sets for different pages
export const serviceOffers: Offer[] = [
  {
    id: 'web-dev-service',
    title: 'Web Development Package',
    originalPrice: 2499,
    discountedPrice: 1799,
    discount: 28,
    description: 'Complete web solution with modern design and functionality',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Content Management',
      'Performance Optimization',
      '3 Months Support'
    ],
    badge: 'Popular',
    popular: true,
    gradient: 'from-blue-600 via-purple-600 to-indigo-700',
    icon: <Code className="w-6 h-6 text-white" />
  },
  {
    id: 'mobile-app-service',
    title: 'Mobile App Development',
    originalPrice: 3999,
    discountedPrice: 2999,
    discount: 25,
    description: 'Native mobile apps for iOS and Android platforms',
    features: [
      'iOS & Android Apps',
      'API Integration',
      'Push Notifications',
      'App Store Submission',
      '6 Months Support'
    ],
    badge: 'Best Value',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
    icon: <Smartphone className="w-6 h-6 text-white" />
  },
  {
    id: 'cloud-service',
    title: 'Cloud Solutions',
    originalPrice: 1999,
    discountedPrice: 1499,
    discount: 25,
    description: 'Scalable cloud infrastructure and deployment',
    features: [
      'Cloud Migration',
      'Auto Scaling',
      'Security Setup',
      'Monitoring & Alerts',
      'Ongoing Support'
    ],
    badge: 'Limited Time',
    gradient: 'from-orange-500 via-red-500 to-pink-600',
    icon: <Cloud className="w-6 h-6 text-white" />
  }
]

export const consultationOffers: Offer[] = [
  {
    id: 'strategy-consultation',
    title: 'Strategy Consultation',
    originalPrice: 299,
    discountedPrice: 199,
    discount: 33,
    description: 'Comprehensive business and technology strategy session',
    features: [
      '2-Hour Strategy Session',
      'Technology Roadmap',
      'Cost Analysis',
      'Implementation Plan',
      'Follow-up Support'
    ],
    badge: 'Most Popular',
    popular: true,
    gradient: 'from-blue-600 via-purple-600 to-indigo-700',
    icon: <Users className="w-6 h-6 text-white" />
  },
  {
    id: 'technical-audit',
    title: 'Technical Audit',
    originalPrice: 499,
    discountedPrice: 349,
    discount: 30,
    description: 'Complete technical assessment of your current systems',
    features: [
      'System Analysis',
      'Performance Review',
      'Security Assessment',
      'Improvement Recommendations',
      'Detailed Report'
    ],
    badge: 'Professional',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
    icon: <Shield className="w-6 h-6 text-white" />
  }
]

export const contactIncentives: Offer[] = [
  {
    id: 'free-consultation',
    title: 'Free Consultation',
    originalPrice: 199,
    discountedPrice: 0,
    discount: 100,
    description: 'Complimentary project discussion and planning session',
    features: [
      '30-Minute Call',
      'Project Assessment',
      'Technology Recommendations',
      'Timeline Estimation',
      'No Obligation Quote'
    ],
    badge: 'Free',
    popular: true,
    gradient: 'from-green-500 via-emerald-600 to-teal-700',
    icon: <MessageSquare className="w-6 h-6 text-white" />
  },
  {
    id: 'priority-booking',
    title: 'Priority Booking',
    originalPrice: 99,
    discountedPrice: 49,
    discount: 51,
    description: 'Skip the queue and get immediate project scheduling',
    features: [
      'Same-Day Response',
      'Priority Scheduling',
      'Dedicated Account Manager',
      'Fast-Track Process',
      'Expedited Delivery'
    ],
    badge: 'Express',
    gradient: 'from-orange-500 via-red-500 to-pink-600',
    icon: <Calendar className="w-6 h-6 text-white" />
  }
]