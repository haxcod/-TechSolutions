'use client'

import { useEffect } from 'react'

interface TawkToChatProps {
  propertyId?: string
  widgetId?: string
}

export function TawkToChat({ 
  propertyId = "YOUR_TAWK_TO_PROPERTY_ID", 
  widgetId = "YOUR_TAWK_TO_WIDGET_ID" 
}: TawkToChatProps) {
  useEffect(() => {
    // Tawk.to Live Chat Script
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://embed.tawk.to/' + propertyId + '/' + widgetId
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')
    
    // Add the script to the document
    document.head.appendChild(script)

    // Cleanup function to remove script when component unmounts
    return () => {
      // Remove the script
      const existingScript = document.querySelector(`script[src*="embed.tawk.to"]`)
      if (existingScript) {
        existingScript.remove()
      }
      
      // Remove Tawk.to widget if it exists
      const tawkWidget = document.getElementById('tawk-widget')
      if (tawkWidget) {
        tawkWidget.remove()
      }
      
      // Clean up global Tawk_API
      if (typeof window !== 'undefined' && (window as any).Tawk_API) {
        delete (window as any).Tawk_API
      }
    }
  }, [propertyId, widgetId])

  // Custom styling for Tawk.to widget to match website theme
  useEffect(() => {
    const addCustomStyles = () => {
      const style = document.createElement('style')
      style.textContent = `
        /* Custom Tawk.to Widget Styling */
        #tawk-widget {
          z-index: 9999 !important;
        }
        
        /* Customize the chat bubble to match website theme */
        .tawk-chat-bubble {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%) !important;
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3) !important;
          border-radius: 50px !important;
        }
        
        /* Customize the chat window header */
        .tawk-chat-header {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%) !important;
        }
        
        /* Customize send button */
        .tawk-send-button {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%) !important;
        }
        
        /* Mobile responsiveness */
        @media (max-width: 768px) {
          #tawk-widget {
            bottom: 20px !important;
            right: 20px !important;
          }
        }
      `
      document.head.appendChild(style)
    }

    // Add styles after a short delay to ensure Tawk.to has loaded
    const timer = setTimeout(addCustomStyles, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  return null // This component doesn't render anything visible
}

// Configuration object for easy customization
export const tawkToConfig = {
  // Replace these with your actual Tawk.to credentials
  propertyId: "YOUR_TAWK_TO_PROPERTY_ID",
  widgetId: "YOUR_TAWK_TO_WIDGET_ID",
  
  // Customization options
  settings: {
    hideWhenOffline: false,
    showOnMobile: true,
    showOnDesktop: true,
    position: 'bottom-right' as const,
  }
}

export default TawkToChat