import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  className?: string
}

const directionOffset = {
  up: { y: 1, x: 0 },
  down: { y: -1, x: 0 },
  left: { y: 0, x: 1 },
  right: { y: 0, x: -1 },
  none: { y: 0, x: 0 },
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 40,
  className = '',
}: FadeInProps) {
  const offset = directionOffset[direction]

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: offset.y * distance,
        x: offset.x * distance,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
