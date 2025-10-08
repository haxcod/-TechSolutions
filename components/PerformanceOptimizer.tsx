'use client'

import { useEffect } from 'react'

export function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/og-image.jpg',
        '/twitter-image.jpg',
        '/logo.png'
      ]

      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
    }

    // Optimize images loading
    const optimizeImageLoading = () => {
      const images = document.querySelectorAll('img[data-src]')
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src || ''
            img.classList.remove('lazy')
            observer.unobserve(img)
          }
        })
      })

      images.forEach(img => imageObserver.observe(img))
    }

    // Add loading="lazy" to non-critical images
    const addLazyLoading = () => {
      const images = document.querySelectorAll('img:not([loading])')
      images.forEach((img, index) => {
        if (index > 2) { // Skip first 3 images (above the fold)
          img.setAttribute('loading', 'lazy')
        }
      })
    }

    // Initialize optimizations
    preloadCriticalResources()
    optimizeImageLoading()
    addLazyLoading()

    // Add performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        // Core Web Vitals monitoring
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime)
            }
            if (entry.entryType === 'first-input') {
              const fidEntry = entry as any
              console.log('FID:', fidEntry.processingStart - fidEntry.startTime)
            }
            if (entry.entryType === 'layout-shift') {
              const clsEntry = entry as any
              console.log('CLS:', clsEntry.value)
            }
          })
        })

        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
      })
    }
  }, [])

  return null
}
