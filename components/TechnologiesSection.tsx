'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules'
import { useMemo } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

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
      className={`relative group cursor-pointer h-full py-6`} 
    >
      <div className="relative bg-white/80 backdrop-blur-xs rounded-2xl p-8 border border-gray-100 shadow-lg transition-all duration-500 h-full flex flex-col justify-center">
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        
        {/* Glowing border effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500`} />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="text-5xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
          <h3 className="font-bold text-gray-800 text-center mb-3 text-xl group-hover:text-gray-900 transition-colors duration-300">
            {name}
          </h3>
          <div className="flex justify-center">
            <span className="text-sm text-gray-600 bg-gray-100 px-4 py-1.5 rounded-full backdrop-blur-xs font-medium">
              {category}
            </span>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute top-3 right-3 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" />
        <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-ping" />
      </div>
    </div>
  )
}

export function TechnologiesSection() {
  const technologies = useMemo(() => [
    { 
      name: 'React', 
      category: 'Frontend', 
      icon: '⚛️',
      color: 'from-blue-400 to-cyan-400',
      bgGradient: 'bg-linear-to-br from-blue-600 to-blue-800'
    },
    { 
      name: 'Next.js', 
      category: 'Framework', 
      icon: '🔺',
      color: 'from-gray-400 to-gray-600',
      bgGradient: 'bg-linear-to-br from-gray-800 to-black'
    },
    { 
      name: 'Node.js', 
      category: 'Backend', 
      icon: '🟢',
      color: 'from-green-400 to-emerald-400',
      bgGradient: 'bg-linear-to-br from-green-600 to-green-800'
    },
    { 
      name: 'Python', 
      category: 'Backend', 
      icon: '🐍',
      color: 'from-yellow-400 to-blue-400',
      bgGradient: 'bg-linear-to-br from-yellow-600 to-blue-600'
    },
    { 
      name: 'AWS', 
      category: 'Cloud', 
      icon: '☁️',
      color: 'from-orange-400 to-yellow-400',
      bgGradient: 'bg-linear-to-br from-orange-600 to-orange-800'
    },
    { 
      name: 'Docker', 
      category: 'DevOps', 
      icon: '🐳',
      color: 'from-blue-400 to-indigo-400',
      bgGradient: 'bg-linear-to-br from-blue-700 to-indigo-800'
    },
    { 
      name: 'MongoDB', 
      category: 'Database', 
      icon: '🍃',
      color: 'from-green-400 to-teal-400',
      bgGradient: 'bg-linear-to-br from-green-700 to-teal-800'
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

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden" dir="ltr">
      <div className="w-full max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and frameworks to build 
            scalable, performant, and future-ready solutions for your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative py-12"
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={false}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              stopOnLastSlide: false,
            }}
            pagination={{
              clickable: false,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            speed={800}
            allowTouchMove={false}
            simulateTouch={false}
            touchRatio={0}
            noSwiping={true}
            noSwipingClass="swiper-slide"
            keyboard={{ enabled: false }}
            mousewheel={false}
            className="technologies-swiper !pb-16"
          >
            {technologies.map((tech, index) => (
              <SwiperSlide key={`${tech.name}-${index}`} className="swiper-no-swiping">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <TechItem
                    name={tech.name}
                    category={tech.category}
                    icon={tech.icon}
                    color={tech.color}
                    bgGradient={tech.bgGradient}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        .technologies-swiper {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          padding: 0 40px;
        }
        
        .technologies-swiper .swiper-slide {
          width: 280px !important;
          height: 320px;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .technologies-swiper .swiper-slide-active {
          transform: scale(1.15) !important;
          z-index: 10;
        }
        
        .technologies-swiper .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.5;
          transform: scale(0.85);
        }
        
        .technologies-swiper .swiper-slide-prev,
        .technologies-swiper .swiper-slide-next {
          opacity: 0.7;
          transform: scale(0.9);
        }
        
        .technologies-swiper .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        
        .technologies-swiper .swiper-pagination {
          bottom: 0 !important;
          pointer-events: none;
        }
        
        .technologies-swiper .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          background: #d1d5db !important;
          opacity: 1 !important;
          margin: 0 6px !important;
          transition: transform 0.3s ease, background 0.3s ease !important;
        }
        
        .technologies-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
          transform: scale(1.4) !important;
        }
        
        @media (max-width: 640px) {
          .technologies-swiper .swiper-slide {
            width: 240px !important;
            height: 280px;
          }
          
          .technologies-swiper .swiper-slide-active {
            transform: scale(1.1) !important;
          }
        }
      `}</style>
    </section>
  )
}