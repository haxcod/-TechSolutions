'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Phone } from 'lucide-react'

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  className?: string
}

export function WhatsAppButton({ 
  phoneNumber = "+1234567890", // Replace with your actual WhatsApp number
  message = "Hi! I'm interested in your services. Can we discuss my project?",
  className = ""
}: WhatsAppButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  if (!isVisible) return null

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 max-w-sm"
          >
            {/* Close button */}
            <button
              onClick={toggleExpanded}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Chat with us!</h3>
                  <p className="text-sm text-gray-600">We&apos;re online now</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-700">
                Have questions about our services? Send us a message on WhatsApp and we&apos;ll get back to you right away!
              </p>
              
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Start Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating button */}
      {!isExpanded && (
        <motion.button
          onClick={toggleExpanded}
          className="relative w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 1 
          }}
        >
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        
        {/* Icon */}
        <MessageCircle className="w-7 h-7 relative z-10" />
        
        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white">
          <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      </motion.button>
      )}

      {/* Hide button (optional) */}
      <motion.button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -left-2 w-6 h-6 bg-gray-400 hover:bg-gray-500 text-white rounded-full flex items-center justify-center text-xs opacity-0 hover:opacity-100 transition-opacity duration-200"
        whileHover={{ scale: 1.1 }}
      >
        <X className="w-3 h-3" />
      </motion.button>
    </div>
  )
}

export default WhatsAppButton