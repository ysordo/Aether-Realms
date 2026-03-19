import { type ReactNode, type HTMLAttributes } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: 'default' | 'elevated' | 'outlined' | 'hero'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  ...props
}: CardProps) {
  const baseStyles = 'bg-base-100 backdrop-blur-sm transition-all duration-300'

  const variantStyles = {
    default: 'gold-border rounded-xl hover:border-gold/50 hover:shadow-[0_0_30px_rgba(236,91,19,0.2)]',
    elevated: 'gold-border rounded-xl shadow-lg hover:shadow-[0_0_40px_rgba(236,91,19,0.3)]',
    outlined: 'border border-white/10 rounded-lg',
    hero: 'gold-border rounded-2xl overflow-hidden group',
  }

  const paddingStyles = {
    none: '',
    sm: 'p-3!',
    md: 'p-4!',
    lg: 'p-6!',
  }

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
