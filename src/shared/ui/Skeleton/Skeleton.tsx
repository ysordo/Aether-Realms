import { motion, type HTMLMotionProps } from 'framer-motion'
import { type HTMLAttributes } from 'react'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
  width?: number | string
  height?: number | string
  animation?: 'pulse' | 'wave' | false
}

export function Skeleton({
  variant = 'text',
  width,
  height,
  animation = 'pulse',
  className = '',
  ...props
}: SkeletonProps) {
  const baseStyles = 'bg-base-200'

  const variantStyles = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-none',
    rounded: 'rounded-lg',
  }

  const style = {
    width,
    height,
    minWidth: width,
    minHeight: height,
  }

  return (
    <motion.div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={style}
      animate={
        animation !== false
          ? {
              opacity: animation === 'pulse' ? [1, 0.5, 1] : [1, 0.7, 1],
            }
          : undefined
      }
      transition={
        animation !== false
          ? {
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }
          : undefined
      }
      {...(props as HTMLMotionProps<'div'>)}
    />
  )
}
