import { useRef } from 'react'
import { useInView, useScroll, useTransform } from 'framer-motion'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: `${number}px` | `${number}px ${number}px` | `${number}px ${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px`
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = '0px',
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
    margin: rootMargin,
  })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['10%', '0%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return {
    ref,
    isInView,
    scrollYProgress,
    parallax: { y },
    fade: { opacity },
    zoom: { scale },
  }
}

export function useParallax(offset: number = 100) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  return { ref, y }
}
