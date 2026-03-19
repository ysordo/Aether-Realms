import { type ButtonHTMLAttributes, type ReactNode, useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '../Icon'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  children: ReactNode
}

interface Ripple {
  id: number
  x: number
  y: number
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-black uppercase tracking-widest transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary overflow-hidden relative'

  const variantStyles = {
    primary:
      'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105',
    secondary:
      'bg-gold text-purple-dark hover:bg-gold/90 shadow-lg shadow-gold/20',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-base-content hover:bg-base-200',
  }

  const sizeStyles = {
    sm: 'px-6 py-2 text-xs',
    md: 'px-8 py-2.5 text-sm',
    lg: 'px-10 py-5 text-lg rounded-xl',
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    setRipples((prev) => [...prev, { id, x, y }])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 600)

    props.onClick?.(e)
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: [0, 2, 3],
            width: 100,
            height: 100,
            opacity: 0,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
      {icon && <Icon name={icon} size="sm" />}
      {children}
    </button>
  )
}
