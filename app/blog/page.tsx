'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, Search, Filter, BookOpen, TrendingUp, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { formatBlogDate } from '@/lib/utils';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  slug: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
    content: "Full article content here...",
    author: "John Smith",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
    image: "/api/placeholder/800/400",
    tags: ["React", "Next.js", "AI", "PWA"],
    slug: "future-of-web-development-2024",
    featured: true
  },
  {
    id: 2,
    title: "Building Scalable Applications with Microservices Architecture",
    excerpt: "Learn how microservices can help you build more maintainable and scalable applications for your business.",
    content: "Full article content here...",
    author: "Sarah Johnson",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Architecture",
    image: "/api/placeholder/800/400",
    tags: ["Microservices", "Docker", "Kubernetes", "Scalability"],
    slug: "building-scalable-microservices"
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for Modern Businesses",
    excerpt: "Essential security measures every business should implement to protect their digital assets and customer data.",
    content: "Full article content here...",
    author: "Michael Chen",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Security",
    image: "/api/placeholder/800/400",
    tags: ["Security", "Cybersecurity", "Data Protection", "Best Practices"],
    slug: "cybersecurity-best-practices"
  },
  {
    id: 4,
    title: "Cloud Migration: A Complete Guide for Small Businesses",
    excerpt: "Step-by-step guide to successfully migrate your business operations to the cloud with minimal downtime.",
    content: "Full article content here...",
    author: "Emily Rodriguez",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Cloud Computing",
    image: "/api/placeholder/800/400",
    tags: ["Cloud", "AWS", "Migration", "Small Business"],
    slug: "cloud-migration-guide"
  },
  {
    id: 5,
    title: "AI and Machine Learning in Modern Web Applications",
    excerpt: "Discover how AI and ML are revolutionizing user experiences and business processes in web applications.",
    content: "Full article content here...",
    author: "David Park",
    date: "2024-01-05",
    readTime: "9 min read",
    category: "AI & ML",
    image: "/api/placeholder/800/400",
    tags: ["AI", "Machine Learning", "Web Apps", "Innovation"],
    slug: "ai-ml-web-applications"
  },
  {
    id: 6,
    title: "Mobile-First Design: Creating Responsive User Experiences",
    excerpt: "Learn the principles of mobile-first design and how to create seamless experiences across all devices.",
    content: "Full article content here...",
    author: "Lisa Wang",
    date: "2024-01-03",
    readTime: "4 min read",
    category: "Mobile Development",
    image: "/api/placeholder/800/400",
    tags: ["Mobile", "Responsive Design", "UX", "UI"],
    slug: "mobile-first-design"
  }
];

const categories = ["All", "Web Development", "Architecture", "Security", "Cloud Computing", "AI & ML", "Mobile Development"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-purple-50 overflow-hidden pt-24 pb-12">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-60 h-60 sm:w-80 sm:h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Tech <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Insights</span> & Innovation
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Stay ahead of the curve with expert insights, industry trends, and practical guides 
              from our technology specialists.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 max-w-md mx-auto"
            >
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-purple-600">10K+</div>
                <div className="text-sm text-gray-600">Readers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-green-600">6</div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-white/50 backdrop-blur-xs border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Our Content</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find exactly what you&apos;re looking for with our smart search and category filters
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative mb-10 max-w-2xl mx-auto"
            >
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 group-focus-within:text-blue-600 transition-colors" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 bg-white/90 backdrop-blur-xs text-gray-900 placeholder-gray-500 text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mb-8"
            >
              <div className="container mx-auto">
                {/* Mobile Filter Header */}
                <div className="flex items-center justify-between mb-4 sm:justify-center">
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-600 font-medium text-sm sm:text-base">Filter by category</span>
                  </div>
                  {/* Results counter for mobile */}
                  <div className="sm:hidden bg-linear-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'}
                  </div>
                </div>
                
                {/* Filter Buttons - Horizontal scroll on mobile */}
                <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
                  {categories.map((category, index) => (
                    <motion.button
                      key={category}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => setSelectedCategory(category)}
                      className={`flex-shrink-0 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                        selectedCategory === category
                          ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 hover:border-gray-400 shadow-xs'
                      }`}
                    >
                      {category}
                      {selectedCategory === category && (
                        <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                          {category === "All" ? blogPosts.length : blogPosts.filter(post => post.category === category).length}
                        </span>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      {featuredPost && (
        <section className="py-16 bg-linear-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Editor&apos;s Pick</h2>
              </div>

              <Card className="overflow-hidden bg-white/80 backdrop-blur-xs border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <div className="text-6xl text-blue-300">📖</div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatBlogDate(featuredPost.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link href={`/blog/${featuredPost.slug}`} className="inline-flex">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
                        Read Full Article
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover insights, tutorials, and industry trends from our expert team
              </p>
            </motion.div>

            {regularPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
                <p className="text-gray-600 mb-8">
                  Try adjusting your search terms or category filter to find what you&apos;re looking for.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Clear Filters
                </Button>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
                      <div className="relative">
                        <div className="aspect-[16/10] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                          <div className="text-4xl text-blue-300">📄</div>
                        </div>
                        <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-xs text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                            {post.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
              <div className="bg-white/90 backdrop-blur-xs p-2 rounded-full border border-gray-200">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{formatBlogDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="bg-gray-50 text-gray-600 px-2 py-1 rounded-lg text-xs font-medium hover:bg-gray-100 transition-colors"
                            >
                              #{tag}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="bg-gray-50 text-gray-500 px-2 py-1 rounded-lg text-xs">
                              +{post.tags.length - 3} more
                            </span>
                          )}
                        </div>
                        
                        <Link href={`/blog/${post.slug}`} className="block">
                          <div className="bg-gray-50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-gray-700 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-between group/button">
                            <span>Read Article</span>
                            <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-blue-100 mb-8">
              Subscribe to our newsletter and never miss our latest articles and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}