'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, CheckCircle, AlertCircle, Send, Gift, Zap, Bell } from 'lucide-react'

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'hero' | 'footer'
  title?: string
  subtitle?: string
  placeholder?: string
  buttonText?: string
  showBenefits?: boolean
  className?: string
}

export function NewsletterSignup({
  variant = 'default',
  title,
  subtitle,
  placeholder = 'Enter your email address',
  buttonText = 'Subscribe Now',
  showBenefits = true,
  className = ''
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    
    try {
      // Simulate API call - replace with your actual newsletter service
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Here you would integrate with your newsletter service (Mailchimp, ConvertKit, etc.)
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // })
      
      setStatus('success')
      setMessage('Thank you for subscribing! Check your email for confirmation.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  const benefits = [
    { icon: <Zap className="w-4 h-4" />, text: 'Latest tech insights' },
    { icon: <Gift className="w-4 h-4" />, text: 'Exclusive offers' },
    { icon: <Bell className="w-4 h-4" />, text: 'Project updates' }
  ]

  const getVariantStyles = () => {
    switch (variant) {
      case 'compact':
        return 'p-4 max-w-md mx-auto'
      case 'hero':
        return 'p-6 md:p-8 bg-gradient-to-r from-blue-50 to-purple-50 max-w-4xl mx-auto'
      case 'footer':
        return 'p-4 md:p-6 bg-gray-800 text-white max-w-md mx-auto'
      default:
        return 'p-4 md:p-6 max-w-2xl mx-auto'
    }
  }

  const getDefaultContent = () => {
    switch (variant) {
      case 'compact':
        return {
          title: 'Stay Updated',
          subtitle: 'Get the latest tech insights delivered to your inbox.'
        }
      case 'hero':
        return {
          title: 'Join 5,000+ Tech Professionals',
          subtitle: 'Get exclusive insights, project updates, and special offers delivered weekly to your inbox.'
        }
      case 'footer':
        return {
          title: 'Newsletter',
          subtitle: 'Subscribe to get updates on our latest projects and tech insights.'
        }
      default:
        return {
          title: 'Subscribe to Our Newsletter',
          subtitle: 'Stay updated with the latest technology trends, project insights, and exclusive offers.'
        }
    }
  }

  const defaultContent = getDefaultContent()
  const finalTitle = title || defaultContent.title
  const finalSubtitle = subtitle || defaultContent.subtitle

  if (status === 'success') {
    return (
      <Card className={`${getVariantStyles()} ${className}`}>
        <CardContent className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <CheckCircle className="w-8 h-8 text-green-600" />
          </motion.div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Successfully Subscribed!
          </h3>
          <p className="text-gray-600 mb-4">{message}</p>
          <Button
            variant="outline"
            onClick={() => setStatus('idle')}
            className="text-sm"
          >
            Subscribe Another Email
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <section className={`py-8 md:py-12 px-4 ${variant === 'footer' ? '' : 'bg-white'}`}>
      <div className="container mx-auto">
        <Card className={`${getVariantStyles()} ${className} shadow-lg`}>
          <CardContent className="p-0">
            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className={`font-bold mb-2 ${
                  variant === 'footer' ? 'text-white' : 'text-gray-900'
                } ${variant === 'compact' ? 'text-lg md:text-xl' : 'text-xl md:text-2xl lg:text-3xl'}`}>
                  {finalTitle}
                </h3>
                <p className={`${
                  variant === 'footer' ? 'text-gray-300' : 'text-gray-600'
                } ${variant === 'compact' ? 'text-sm md:text-base' : 'text-base md:text-lg'} max-w-2xl mx-auto leading-relaxed`}>
                  {finalSubtitle}
                </p>
              </div>

              {showBenefits && variant !== 'compact' && (
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center justify-center sm:justify-start gap-2">
                      <div className="text-blue-600 flex-shrink-0">{benefit.icon}</div>
                      <span className={`text-sm md:text-base ${
                        variant === 'footer' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    className={`flex-1 h-12 text-base ${
                      variant === 'footer' 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    disabled={status === 'loading'}
                  />
                  <Button
                    type="submit"
                    disabled={status === 'loading' || !email}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-12 px-6 text-base font-semibold whitespace-nowrap"
                  >
                    {status === 'loading' ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Send className="w-4 h-4" />
                      </motion.div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        <span className="hidden sm:inline">{buttonText}</span>
                        <span className="sm:hidden">Subscribe</span>
                      </>
                    )}
                  </Button>
                </div>

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 text-red-600 text-sm"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {message}
                  </motion.div>
                )}
              </form>

              <p className={`text-xs mt-4 text-center ${
                variant === 'footer' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default NewsletterSignup