import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting
        
        // Batch state updates to prevent multiple re-renders
        if (isElementIntersecting && !hasIntersected) {
          setIsIntersecting(true)
          setHasIntersected(true)
        } else if (!once) {
          setIsIntersecting(isElementIntersecting)
        }
      },
      { 
        threshold, 
        rootMargin,
        // Use passive observation to prevent forced reflows
        root: null
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, hasIntersected, once])

  return {
    ref,
    isIntersecting: once ? hasIntersected : isIntersecting,
    hasIntersected
  }
}