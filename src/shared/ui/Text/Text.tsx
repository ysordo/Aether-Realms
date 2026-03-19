import { type HTMLAttributes, type ReactNode } from 'react'

export interface TextProps extends HTMLAttributes<HTMLElement> {
  variant?: 'gradient' | 'glow' | 'glow-strong' | 'hero' | 'section-title' | 'subtitle'
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  children: ReactNode
}

export function Text({
  variant,
  as: Component = 'span',
  children,
  className = '',
  ...props
}: TextProps) {
  const variantClasses: Record<NonNullable<TextProps['variant']>, string> = {
    gradient: 'text-gradient-aether',
    glow: 'text-glow',
    'glow-strong': 'text-glow-strong',
    hero: 'heading-hero text-white',
    'section-title': 'text-4xl md:text-6xl font-black text-white leading-tight uppercase italic',
    subtitle: 'text-slate-400 text-lg leading-relaxed',
  }

  return (
    <Component className={`${variantClasses[variant || 'gradient']} ${className}`} {...props}>
      {children}
    </Component>
  )
}
