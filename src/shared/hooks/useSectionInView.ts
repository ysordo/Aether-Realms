import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface UseSectionInViewOptions {
  threshold?: number
  delay?: number
  rootMargin?: `${number}px` | `${number}px ${number}px` | `${number}px ${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px`
}

export function useSectionInView({
  threshold = 0.1,
  delay = 0,
  rootMargin = '0px',
}: UseSectionInViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
    margin: rootMargin,
  })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => setHasAnimated(true), delay)
      return () => clearTimeout(timer)
    }
  }, [isInView, hasAnimated, delay])

  return { ref, isInView: hasAnimated }
}
