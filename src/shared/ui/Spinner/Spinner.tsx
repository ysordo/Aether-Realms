import { type HTMLAttributes } from 'react'

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'gold' | 'white' | 'inherit'
  thickness?: number
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
}

const colorMap = {
  primary: 'border-primary/30 border-t-primary',
  gold: 'border-gold/30 border-t-gold',
  white: 'border-white/30 border-t-white',
  inherit: 'border-current/30 border-t-current',
}

export function Spinner({
  size = 'md',
  color = 'primary',
  thickness = 3,
  className = '',
  ...props
}: SpinnerProps) {
  return (
    <div
      className={`inline-block animate-spin ${sizeMap[size]} ${colorMap[color]} ${className}`}
      style={{
        borderWidth: thickness,
        borderStyle: 'solid',
        borderRadius: '50%',
      }}
      role="status"
      aria-label="Loading"
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
