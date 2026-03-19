import { type HTMLAttributes, type ReactNode } from 'react'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'gold' | 'blue' | 'slate' | 'green' | 'red' | 'cyan' | 'orange' | 'purple' | 'white'
  size?: 'sm' | 'md'
  children: ReactNode
}

const variantStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  primary: 'bg-primary/20 text-primary border-primary/30',
  gold: 'bg-gold/20 text-gold border-gold/30',
  blue: 'bg-blue-600/20 text-blue-400 border-blue-500/30',
  slate: 'bg-slate-700/40 text-slate-300 border-slate-500/30',
  green: 'bg-green-600/20 text-green-400 border-green-500/30',
  red: 'bg-red-600/20 text-red-400 border-red-500/30',
  cyan: 'bg-cyan-600/20 text-cyan-400 border-cyan-500/30',
  orange: 'bg-orange-600/20 text-orange-400 border-orange-500/30',
  purple: 'bg-purple-600/20 text-purple-400 border-purple-500/30',
  white: 'bg-white/20 text-white border-white/30',
}

const sizeStyles: Record<NonNullable<BadgeProps['size']>, string> = {
  sm: 'px-2 py-0.5 text-[9px]',
  md: 'px-3 py-1 text-[10px]',
}

export function Badge({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
