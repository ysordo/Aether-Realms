import { useState, useEffect } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'

export interface LazyImageProps extends Omit<HTMLMotionProps<'img'>, 'src' | 'alt'> {
  src: string
  alt: string
  placeholder?: string
  aspectRatio?: string
}

export function LazyImage({
  src,
  alt,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMCI+PHJlY3QgZmlsbD0iIzJkMTQyNCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIi8+PC9zdmc+',
  aspectRatio = 'aspect-auto',
  className = '',
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(placeholder)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setCurrentSrc(src)
      setIsLoaded(true)
    }
    img.onerror = () => {
      setIsLoaded(true)
    }
  }, [src])

  return (
    <div className={`relative overflow-hidden ${aspectRatio} bg-base-200`}>
      <motion.img
        src={currentSrc}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        initial={{ opacity: 0.5, scale: 1.05 }}
        animate={{
          opacity: isLoaded ? 1 : 0.5,
          scale: isLoaded ? 1 : 1.05,
        }}
        transition={{ duration: 0.5 }}
        loading="lazy"
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-base-200 animate-pulse" />
      )}
    </div>
  )
}
