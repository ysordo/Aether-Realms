import { type ReactNode } from 'react'
import { Icon } from '../Icon'
import { Button } from '../Button'

export interface EmptyStateProps {
  icon?: string
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  }
  image?: ReactNode
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  image,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center">
      {/* Icon or Image */}
      {image ? (
        image
      ) : icon ? (
        <div className="mb-6">
          <Icon name={icon} className="text-base-300 text-6xl" />
        </div>
      ) : null}

      {/* Title */}
      <h3 className="text-xl font-black text-base-content uppercase tracking-widest mb-2">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="text-base-content/60 max-w-md mb-6">{description}</p>
      )}

      {/* Action Button */}
      {action && (
        <Button variant={action.variant} onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  )
}
