import { type HTMLAttributes } from 'react'

export interface IconProps extends HTMLAttributes<HTMLImageElement> {
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
} as const

const iconMap: Record<string, string> = {
  play_circle: '/icons/mystery.png',
  play_arrow: '/icons/mystery.png',
  pause: '/icons/mystery.png',
  touch_app: '/icons/card.png',
  trophy: '/icons/gem.png',
  settings: '/icons/dice.png',
  fullscreen: '/icons/expand_more.png',
  close: '/icons/x.png',
  discord: '/icons/discord.png',
  twitter: '/icons/x.png',
  youtube: '/icons/x.png',
  instagram: '/icons/x.png',
  check: '/icons/mystery.png',
  cards: '/icons/card.png',
  swords: '/icons/combat.png',
  casino: '/icons/dice.png',
  mystery: '/icons/mystery.png',
  crystal_ball: '/icons/gem.png',
  emerald_forest: '/icons/emerald_forest.png',
  golden_sands: '/icons/golden_sands.png',
  frozen_reach: '/icons/frozen_reach.png',
  molten_core: '/icons/molten_core.png',
  expand_more: '/icons/expand_more.png',
}

export function Icon({
  name,
  size = 'md',
  className = '',
  ...props
}: IconProps) {
  const iconPath = iconMap[name] || '/icons/mystery.png'
  
  return (
    <img
      src={iconPath}
      alt={name}
      className={`${sizeMap[size]} ${className}`}
      {...props}
    />
  )
}
