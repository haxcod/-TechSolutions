'use client'

import { motion, type MotionProps } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { type ReactNode, forwardRef } from 'react'

interface OptimizedMotionProps extends Omit<MotionProps, 'whileInView' | 'viewport'> {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export const OptimizedMotion = forwardRef<HTMLDivElement, OptimizedMotionProps>(
  ({ children, threshold, rootMargin, once = true, ...motionProps }, forwardedRef) => {
    const { ref, isIntersecting } = useIntersectionObserver({
      threshold,
      rootMargin,
      once
    })

    return (
      <motion.div
        ref={(node) => {
          // Handle both refs
          if (typeof forwardedRef === 'function') {
            forwardedRef(node)
          } else if (forwardedRef) {
            forwardedRef.current = node
          }
          // Use callback ref pattern for intersection observer
          ;(ref as any).current = node
        }}
        animate={isIntersecting ? motionProps.animate || { opacity: 1, y: 0 } : motionProps.initial || { opacity: 0, y: 20 }}
        transition={motionProps.transition || { duration: 0.8 }}
        {...motionProps}
      >
        {children}
      </motion.div>
    )
  }
)

OptimizedMotion.displayName = 'OptimizedMotion'