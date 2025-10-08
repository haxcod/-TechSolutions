'use client'

import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { formatBlogDate } from '@/lib/utils'

interface BlogPostProps {
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  slug: string
  delay?: number
}

const BlogPost = ({ title, excerpt, date, category, readTime, slug, delay = 0 }: BlogPostProps) => {
  const { ref, isIntersecting } = useIntersectionObserver()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isIntersecting && !isVisible) {
      setIsVisible(true)
    }
  }, [isIntersecting, isVisible])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-sm text-gray-500">{readTime}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{formatBlogDate(date)}</span>
          <Link 
            href={`/blog/${slug}`}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform duration-300"
          >
            Read More →
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export const BlogPreview = () => {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isIntersecting) {
      setIsVisible(true)
    }
  }, [isIntersecting])

  const blogPosts = [
    {
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping web development, from AI integration to progressive web apps and the evolution of JavaScript frameworks.',
      date: '2023-12-15',
      category: 'Web Development',
      readTime: '5 min read',
      slug: 'future-web-development-2024'
    },
    {
      title: 'Cloud Migration Strategies for Small Businesses',
      excerpt: 'A comprehensive guide to migrating your business to the cloud, including cost considerations, security measures, and best practices.',
      date: '2023-12-10',
      category: 'Cloud Computing',
      readTime: '7 min read',
      slug: 'cloud-migration-small-business'
    },
    {
      title: 'Mobile App Performance Optimization Techniques',
      excerpt: 'Learn proven techniques to optimize your mobile app performance, reduce load times, and improve user experience across platforms.',
      date: '2023-12-05',
      category: 'Mobile Development',
      readTime: '6 min read',
      slug: 'mobile-app-performance-optimization'
    }
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from our technology experts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              category={post.category}
              readTime={post.readTime}
              slug={post.slug}
              delay={index * 0.2}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Link 
            href="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  )
}