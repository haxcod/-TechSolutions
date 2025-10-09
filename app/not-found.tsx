import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Home, ArrowLeft, Search, Mail, Phone } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="relative">
            <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 leading-none">
              404
            </h1>
            <div className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-blue-100 -z-10 transform translate-x-2 translate-y-2">
              404
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The page you&apos;re looking for seems to have wandered off into the digital void. 
            Don&apos;t worry though, we&apos;ll help you find your way back to something amazing.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/">
            <Button 
              size="lg" 
              className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <Link href="/blog">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Search className="w-5 h-5 mr-2" />
              Browse Blog
            </Button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-xs">
            <div className="text-center">
              <div className="w-12 h-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Home</h3>
              <p className="text-gray-600 text-sm mb-4">
                Discover our IT services and solutions
              </p>
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                  Visit Home
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-xs">
            <div className="text-center">
              <div className="w-12 h-12 bg-linear-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Services</h3>
              <p className="text-gray-600 text-sm mb-4">
                Explore our web development and IT solutions
              </p>
              <Link href="/services">
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                  View Services
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-xs">
            <div className="text-center">
              <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get in touch with our expert team
              </p>
              <Link href="/contact">
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                  Contact Us
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* Help Section */}
        <div className="bg-white/60 backdrop-blur-xs rounded-2xl p-8 border border-white/20">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Need Help Finding Something?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you navigate our services and find exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Support
              </Button>
            </Link>
            <Link href="tel:+1-555-123-4567">
              <Button 
                variant="outline" 
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Error Code: 404 | Page Not Found | 
            <Link href="/" className="text-blue-600 hover:text-blue-700 ml-1">
              Return to HaxCod
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}