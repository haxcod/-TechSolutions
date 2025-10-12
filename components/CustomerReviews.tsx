'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { 
  Star, 
  User, 
  Calendar, 
  ThumbsUp, 
  MessageSquare, 
  Filter,
  TrendingUp,
  Award,
  CheckCircle,
  Quote
} from 'lucide-react'

interface Review {
  id: string
  name: string
  email: string
  rating: number
  title: string
  comment: string
  date: string
  verified: boolean
  helpful: number
  service: string
  avatar?: string
}

interface ReviewStats {
  averageRating: number
  totalReviews: number
  ratingDistribution: { [key: number]: number }
}

const sampleReviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    rating: 5,
    title: 'Exceptional Web Development Service',
    comment: 'The team delivered an outstanding website that exceeded our expectations. Professional, timely, and excellent communication throughout the project.',
    date: '2024-01-15',
    verified: true,
    helpful: 12,
    service: 'Web Development'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael@example.com',
    rating: 5,
    title: 'Great Mobile App Development',
    comment: 'Our mobile app was delivered on time and works flawlessly. The user interface is intuitive and the performance is excellent.',
    date: '2024-01-10',
    verified: true,
    helpful: 8,
    service: 'Mobile App Development'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily@example.com',
    rating: 4,
    title: 'Solid E-commerce Solution',
    comment: 'Good work on our e-commerce platform. The payment integration works well and the admin panel is user-friendly.',
    date: '2024-01-05',
    verified: true,
    helpful: 6,
    service: 'E-commerce Development'
  },
  {
    id: '4',
    name: 'David Thompson',
    email: 'david@example.com',
    rating: 5,
    title: 'Outstanding Custom Software',
    comment: 'The custom software solution has streamlined our business processes significantly. Highly recommend their services.',
    date: '2023-12-28',
    verified: true,
    helpful: 15,
    service: 'Custom Software'
  }
]

interface CustomerReviewsProps {
  variant?: 'full' | 'compact' | 'showcase'
  showAddReview?: boolean
  maxReviews?: number
  className?: string
}

export function CustomerReviews({
  variant = 'full',
  showAddReview = true,
  maxReviews,
  className = ''
}: CustomerReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>(sampleReviews)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [filterRating, setFilterRating] = useState<number | null>(null)
  const [sortBy, setSortBy] = useState<'date' | 'rating' | 'helpful'>('date')
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    rating: 5,
    title: '',
    comment: '',
    service: 'Web Development'
  })

  const calculateStats = (): ReviewStats => {
    const totalReviews = reviews.length
    const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews
    const ratingDistribution = reviews.reduce((acc, review) => {
      acc[review.rating] = (acc[review.rating] || 0) + 1
      return acc
    }, {} as { [key: number]: number })

    return { averageRating, totalReviews, ratingDistribution }
  }

  const stats = calculateStats()

  const filteredAndSortedReviews = reviews
    .filter(review => filterRating ? review.rating === filterRating : true)
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'helpful':
          return b.helpful - a.helpful
        case 'date':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
    })
    .slice(0, maxReviews || reviews.length)

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    
    const review: Review = {
      id: Date.now().toString(),
      ...newReview,
      date: new Date().toISOString().split('T')[0],
      verified: false,
      helpful: 0
    }

    setReviews(prev => [review, ...prev])
    setNewReview({
      name: '',
      email: '',
      rating: 5,
      title: '',
      comment: '',
      service: 'Web Development'
    })
    setShowReviewForm(false)
  }

  const renderStars = (rating: number, size: 'sm' | 'md' | 'lg' = 'md') => {
    const sizeClasses = {
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-5 h-5'
    }

    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClasses[size]} ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  const renderRatingDistribution = () => (
    <div className="space-y-2">
      {[5, 4, 3, 2, 1].map((rating) => {
        const count = stats.ratingDistribution[rating] || 0
        const percentage = (count / stats.totalReviews) * 100

        return (
          <div key={rating} className="flex items-center gap-2 text-sm">
            <span className="w-8">{rating}</span>
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="w-8 text-gray-600">{count}</span>
          </div>
        )
      })}
    </div>
  )

  if (variant === 'showcase') {
    return (
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-6xl mx-auto space-y-8 md:space-y-12 ${className}`}>
            {/* Header Section */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about our services.
              </p>
              
              {/* Rating Summary */}
              <div className="flex items-center justify-center gap-3 mb-2">
                {renderStars(Math.round(stats.averageRating), 'lg')}
                <span className="text-2xl md:text-3xl font-bold text-gray-900">
                  {stats.averageRating.toFixed(1)}
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-600">
                Based on {stats.totalReviews} verified reviews
              </p>
            </div>

            {/* Reviews Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {filteredAndSortedReviews.slice(0, 4).map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-gray-900 truncate">{review.name}</h4>
                            {review.verified && (
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            )}
                          </div>
                          {renderStars(review.rating, 'sm')}
                          <p className="text-xs text-gray-500 mt-1">{review.service}</p>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900 mb-3 line-clamp-2">
                          {review.title}
                        </h5>
                        <div className="relative">
                          <Quote className="absolute -top-1 -left-1 w-5 h-5 text-blue-200" />
                          <p className="text-sm text-gray-600 leading-relaxed pl-4 line-clamp-4">
                            {review.comment}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          {new Date(review.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <ThumbsUp className="w-3 h-3" />
                          {review.helpful}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Ready to join our satisfied clients?
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className={`max-w-6xl mx-auto p-6 ${className}`}>
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageSquare className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Customer Reviews & Ratings
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See what our clients say about our services and share your own experience.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Stats Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Review Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stats.averageRating.toFixed(1)}
                </div>
                {renderStars(Math.round(stats.averageRating), 'lg')}
                <p className="text-sm text-gray-600 mt-2">
                  {stats.totalReviews} reviews
                </p>
              </div>

              {renderRatingDistribution()}

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="text-gray-600">
                    {Math.round((stats.ratingDistribution[5] || 0) / stats.totalReviews * 100)}% 5-star reviews
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">
                    {reviews.filter(r => r.verified).length} verified reviews
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reviews Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Filters and Actions */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium">Filter by rating:</span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={filterRating === null ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setFilterRating(null)}
                    >
                      All
                    </Button>
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <Button
                        key={rating}
                        variant={filterRating === rating ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setFilterRating(rating)}
                        className="flex items-center gap-1"
                      >
                        {rating} <Star className="w-3 h-3" />
                      </Button>
                    ))}
                  </div>
                </div>

                {showAddReview && (
                  <Button
                    onClick={() => setShowReviewForm(true)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Write a Review
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Add Review Form */}
          <AnimatePresence>
            {showReviewForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Write a Review</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmitReview} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Your Name"
                          value={newReview.name}
                          onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                          required
                        />
                        <Input
                          type="email"
                          placeholder="Your Email"
                          value={newReview.email}
                          onChange={(e) => setNewReview(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Rating
                          </label>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                type="button"
                                onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                                className="p-1"
                              >
                                <Star
                                  className={`w-6 h-6 ${
                                    star <= newReview.rating
                                      ? 'fill-yellow-400 text-yellow-400'
                                      : 'text-gray-300 hover:text-yellow-300'
                                  }`}
                                />
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Service
                          </label>
                          <select
                            value={newReview.service}
                            onChange={(e) => setNewReview(prev => ({ ...prev, service: e.target.value }))}
                            className="w-full p-2 border border-gray-300 rounded-md"
                          >
                            <option value="Web Development">Web Development</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="Custom Software">Custom Software</option>
                            <option value="E-commerce Development">E-commerce Development</option>
                            <option value="Cybersecurity">Cybersecurity</option>
                            <option value="Database Solutions">Database Solutions</option>
                          </select>
                        </div>
                      </div>

                      <Input
                        placeholder="Review Title"
                        value={newReview.title}
                        onChange={(e) => setNewReview(prev => ({ ...prev, title: e.target.value }))}
                        required
                      />

                      <Textarea
                        placeholder="Share your experience..."
                        value={newReview.comment}
                        onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                        rows={4}
                        required
                      />

                      <div className="flex gap-3">
                        <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          Submit Review
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setShowReviewForm(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Reviews List */}
          <div className="space-y-4">
            {filteredAndSortedReviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                layout
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-gray-900">{review.name}</h4>
                              {review.verified && (
                                <Badge variant="secondary" className="text-xs">
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                  Verified
                                </Badge>
                              )}
                              <Badge variant="outline" className="text-xs">
                                {review.service}
                              </Badge>
                            </div>
                            {renderStars(review.rating)}
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            {new Date(review.date).toLocaleDateString()}
                          </div>
                        </div>

                        <h5 className="font-medium text-gray-900 mb-2">{review.title}</h5>
                        
                        <div className="relative">
                          <Quote className="absolute -top-2 -left-2 w-6 h-6 text-gray-300" />
                          <p className="text-gray-700 leading-relaxed pl-4">
                            {review.comment}
                          </p>
                        </div>

                        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            Helpful ({review.helpful})
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredAndSortedReviews.length === 0 && (
            <Card>
              <CardContent className="p-8 text-center">
                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No reviews found
                </h3>
                <p className="text-gray-600">
                  {filterRating ? `No ${filterRating}-star reviews yet.` : 'Be the first to leave a review!'}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

export default CustomerReviews