'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { useMemo, useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'

// Import Swiper styles
import 'swiper/css'
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
      <div className="relative bg-white/80 backdrop-blur-xs rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95 hover:scale-105">
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        
        {/* Glowing border effect */}
        <div className={`absolute inset-0 rounded-2xl bg-linear-to-r ${color} opacity-0 group-hover:opacity-20 blur-xs transition-opacity duration-300`} />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="text-4xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="font-semibold text-gray-800 text-center mb-2 text-lg group-hover:text-gray-900 transition-colors duration-300">
            {name}
          </h3>
          <div className="flex justify-center">
            <span className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full backdrop-blur-xs">
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

export function TechnologiesSection() {
  const swiperRef = useRef<SwiperType | null>(null)
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


  const handleSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper
    // Force start autoplay
    swiper.autoplay.start()
  }

  const handleAutoplayStop = () => {
    // Restart autoplay when it stops
    if (swiperRef.current) {
      setTimeout(() => {
        swiperRef.current?.autoplay.start()
      }, 100)
    }
  }

  const handleTouchEnd = () => {
    // Restart autoplay after touch interaction
    if (swiperRef.current) {
      setTimeout(() => {
        swiperRef.current?.autoplay.start()
      }, 1000)
    }
  }

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
          className="relative"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            loopAdditionalSlides={6}
            direction="horizontal"
            allowTouchMove={false}
            simulateTouch={false}
            touchRatio={0}
            allowSlideNext={false}
            allowSlidePrev={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              waitForTransition: true,
              stopOnLastSlide: false
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
              renderBullet: (index, className) => {
                return `<span class="${className} w-3 h-3 bg-blue-600"></span>`
              }
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 24
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 28
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 32
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 36
              }
            }}
            speed={600}
            watchOverflow={false}
            observer={true}
            observeParents={true}
            keyboard={{ enabled: false }}
            grabCursor={false}
            onSwiper={handleSwiperInit}
            onAutoplayStop={handleAutoplayStop}
            onTouchEnd={handleTouchEnd}
            className="technologies-swiper !pb-12"
          >
            {technologies.map((tech, index) => (
              <SwiperSlide key={`${tech.name}-${index}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  {/* <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl font-bold text-white">
                        {tech.icon}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-gray-600 text-center">
                      {tech.description}
                    </p>
                  </div> */}

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
        .technologies-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        
        .technologies-swiper .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          background: #d1d5db !important;
          opacity: 1 !important;
          margin: 0 4px !important;
           transition: transform 0.2s ease, background 0.2s ease !important;
        }
        
        .technologies-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
          transform: scale(1.25) !important;
        }
      `}</style>
    </section>
  )
}