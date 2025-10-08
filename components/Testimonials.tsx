'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    company: 'TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    content: 'Haxcod Inc transformed our business with their innovative web platform. The team delivered exceptional results on time and within budget. Highly recommended!',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO, FinanceFlow',
    company: 'FinanceFlow',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    content: 'The mobile app they developed for us exceeded all expectations. Their attention to detail and technical expertise is outstanding. Great partnership!',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder, HealthTech Solutions',
    company: 'HealthTech Solutions',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    content: 'Working with Haxcod Inc was a game-changer for our healthcare platform. They understood our complex requirements and delivered a robust solution.',
    rating: 5
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'VP Engineering, RetailMax',
    company: 'RetailMax',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    content: 'Their cloud migration services helped us scale our infrastructure efficiently. The team is professional, responsive, and delivers quality work.',
    rating: 5
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'Product Manager, EduTech Pro',
    company: 'EduTech Pro',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    content: 'The educational platform they built for us is user-friendly and scalable. Their development process is transparent and collaborative.',
    rating: 5
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Founder, GreenEnergy Corp',
    company: 'GreenEnergy Corp',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    content: 'Haxcod Inc helped us digitize our energy management system. The solution is robust, secure, and has significantly improved our operations.',
    rating: 5
  }
]

export function Testimonials() {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 testimonials-section">
      <div className="w-full max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients 
            have to say about working with us.
          </p>
        </motion.div>

        <div className="w-full max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            autoplay={isAutoPlaying ? {
              delay: 5000,
              disableOnInteraction: false,
            } : false}
            effect="slide"
            fadeEffect={{
              crossFade: true
            }}
            loop={true}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <Card className="w-full border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 sm:p-8 lg:p-12">
                    <div className="text-center w-full">
                      <Quote className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                      
                      <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic w-full">
                        &quot;{testimonial.content}&quot;
                      </blockquote>

                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-600">
                            {testimonial.role}
                          </div>
                          <div className="text-blue-600 font-medium">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}

                      {/* Custom Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4">
            <button
              className="swiper-button-prev-custom p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 group"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="swiper-button-next-custom p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 group"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          </Swiper>


        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          position: relative !important;
          margin-top: 2rem;
        }
        
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          border-radius: 50%;
          opacity: 1;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .swiper-pagination-bullet-custom:hover {
          background: #9ca3af;
          transform: scale(1.1);
        }
        
        .swiper-pagination-bullet-active-custom {
          background: #2563eb !important;
          transform: scale(1.25);
        }
        
        .testimonials-swiper {
          padding-bottom: 3rem;
        }
      `}</style>
    </section>
  )
}
