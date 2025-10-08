
'use client'

import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useRef, useState, useEffect, useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface TechItemProps {
  name: string
  category: string
  icon: string
  color: string
  bgGradient: string
  delay?: number
}

const TechItem = ({ name, category, icon, color }: TechItemProps) => {

  return (
    <div 
      className={`relative group cursor-pointer`} 
    >
      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95 hover:scale-105">
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        
        {/* Glowing border effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300`} />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="text-4xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="font-semibold text-gray-800 text-center mb-2 text-lg group-hover:text-gray-900 transition-colors duration-300">
            {name}
          </h3>
          <div className="flex justify-center">
            <span className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" />
        <div className="absolute bottom-3 left-3 w-1 h-1 bg-purple-400/40 rounded-full animate-ping" />
      </div>
    </div>
  )
}

export const TechnologiesSection = () => {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver()
  const [isVisible, setIsVisible] = useState(false)
  const [shuffledTechnologies, setShuffledTechnologies] = useState<typeof technologies>([])

  useEffect(() => {
    if (isIntersecting) {
      setIsVisible(true)
    }
  }, [isIntersecting])

  // Swap animation effect
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setShuffledTechnologies(prev => {
          const newArray = [...prev]
          // Swap two random positions
          const index1 = Math.floor(Math.random() * newArray.length)
          const index2 = Math.floor(Math.random() * newArray.length)
          if (index1 !== index2) {
            [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]]
          }
          return newArray
        })
      }, 3000) // Swap every 3 seconds

      return () => clearInterval(interval)
    }
  }, [isVisible])

  const technologies = useMemo(() => [
    { 
      name: 'React', 
      category: 'Frontend', 
      icon: '⚛️',
      color: 'from-blue-400 to-cyan-400',
      bgGradient: 'bg-gradient-to-br from-blue-600 to-blue-800'
    },
    { 
      name: 'Next.js', 
      category: 'Framework', 
      icon: '🔺',
      color: 'from-gray-400 to-gray-600',
      bgGradient: 'bg-gradient-to-br from-gray-800 to-black'
    },
    { 
      name: 'Node.js', 
      category: 'Backend', 
      icon: '🟢',
      color: 'from-green-400 to-emerald-400',
      bgGradient: 'bg-gradient-to-br from-green-600 to-green-800'
    },
    { 
      name: 'Python', 
      category: 'Backend', 
      icon: '🐍',
      color: 'from-yellow-400 to-blue-400',
      bgGradient: 'bg-gradient-to-br from-yellow-600 to-blue-600'
    },
    { 
      name: 'AWS', 
      category: 'Cloud', 
      icon: '☁️',
      color: 'from-orange-400 to-yellow-400',
      bgGradient: 'bg-gradient-to-br from-orange-600 to-orange-800'
    },
    { 
      name: 'Docker', 
      category: 'DevOps', 
      icon: '🐳',
      color: 'from-blue-400 to-indigo-400',
      bgGradient: 'bg-gradient-to-br from-blue-700 to-indigo-800'
    },
    { 
      name: 'MongoDB', 
      category: 'Database', 
      icon: '🍃',
      color: 'from-green-400 to-teal-400',
      bgGradient: 'bg-gradient-to-br from-green-700 to-teal-800'
    },
    { 
      name: 'PostgreSQL', 
      category: 'Database', 
      icon: '🐘',
      color: 'from-blue-400 to-purple-400',
      bgGradient: 'bg-gradient-to-br from-blue-800 to-purple-800'
    },
    { 
      name: 'TypeScript', 
      category: 'Language', 
      icon: '📘',
      color: 'from-blue-400 to-indigo-400',
      bgGradient: 'bg-gradient-to-br from-blue-600 to-indigo-700'
    },
    { 
      name: 'GraphQL', 
      category: 'API', 
      icon: '🔗',
      color: 'from-pink-400 to-purple-400',
      bgGradient: 'bg-gradient-to-br from-pink-600 to-purple-700'
    },
    { 
      name: 'React Native', 
      category: 'Mobile', 
      icon: '📱',
      color: 'from-cyan-400 to-blue-400',
      bgGradient: 'bg-gradient-to-br from-cyan-600 to-blue-700'
    },
    { 
      name: 'Flutter', 
      category: 'Mobile', 
      icon: '🦋',
      color: 'from-blue-400 to-teal-400',
      bgGradient: 'bg-gradient-to-br from-blue-500 to-teal-600'
    }
  ], [])

  // Initialize shuffled technologies
  useEffect(() => {
    setShuffledTechnologies(technologies)
  }, [technologies])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Technologies <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">We Use</span>
        </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed text-center">
            We leverage cutting-edge technologies and frameworks to build robust, scalable solutions that drive your business forward
          </p>
        </motion.div>

        {/* Desktop & Mobile Slider */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            type: "spring", 
            stiffness: 100, 
            damping: 15 
          }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={2}
            navigation={{
              nextEl: '.swiper-button-next-tech',
              prevEl: '.swiper-button-prev-tech',
            }}
            pagination={{
              clickable: false,
              el: '.swiper-pagination-tech',
              bulletClass: 'swiper-pagination-bullet-tech',
              bulletActiveClass: 'swiper-pagination-bullet-active-tech',
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            allowTouchMove={true}
            loop={true}
            breakpoints={{
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
              1536: {
                slidesPerView: 6,
              },
            }}
            className="technologies-swiper"
          >
            {shuffledTechnologies.map((tech, index) => (
              <SwiperSlide key={`${tech.name}-${index}`}>
                <TechItem
                  name={tech.name}
                  category={tech.category}
                  icon={tech.icon}
                  color={tech.color}
                  bgGradient={tech.bgGradient}
                />
              </SwiperSlide>
            ))}
          {/* Custom Pagination */}
          <div className="swiper-pagination-tech"></div>
          </Swiper>
        

        </motion.div>
      </div>

      <style jsx global>{`
        .swiper-pagination-tech {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          margin-top: 2rem !important;
          gap: 8px !important;
        }
        
        .technologies-swiper .swiper-pagination {
          position: relative !important;
          margin-top: 2rem;
        }
        
        .swiper-pagination-bullet-tech {
          width: 30px !important;
          height: 6px !important;
          background: #d1d5db !important;
          opacity: 1 !important;
          margin: 0 4px !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
        }
        
        .swiper-pagination-bullet-active-tech {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
          transform: scaleX(1.2) !important;
        }
        
        .technologies-swiper {
          padding-bottom: 3rem;
        }
      `}</style>
    </section>
  )
}