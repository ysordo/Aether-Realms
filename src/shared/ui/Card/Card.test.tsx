import { describe, it, expect } from 'vitest'
import { render } from '../../../test/test-utils'
import { Card } from './Card'

describe('Card', () => {
  it('renders children correctly', () => {
    const { container } = render(<Card>Card content</Card>)
    
    expect(container.textContent).toContain('Card content')
  })

  it('applies default variant styles', () => {
    const { container } = render(<Card>Default</Card>)
    const card = container.firstChild as HTMLElement
    
    expect(card).toHaveClass('gold-border')
    expect(card).toHaveClass('rounded-xl')
  })

  it('applies elevated variant styles', () => {
    const { container } = render(<Card variant="elevated">Elevated</Card>)
    const card = container.firstChild as HTMLElement
    
    expect(card).toHaveClass('shadow-lg')
  })

  it('applies outlined variant styles', () => {
    const { container } = render(<Card variant="outlined">Outlined</Card>)
    const card = container.firstChild as HTMLElement
    
    expect(card).toHaveClass('border')
    expect(card).toHaveClass('border-white/10')
  })

  it('applies hero variant styles', () => {
    const { container } = render(<Card variant="hero">Hero</Card>)
    const card = container.firstChild as HTMLElement
    
    expect(card).toHaveClass('rounded-2xl')
    expect(card).toHaveClass('overflow-hidden')
  })

  it('applies small padding', () => {
    const { container } = render(<Card padding="sm">Small padding</Card>)
    const card = container.firstChild as HTMLElement
    
    expect(card).toHaveClass('p-3')
  })

  it('applies medium padding by default', () => {
    const { container } = render(<Card>Medium padding</Card>)
    const card = container.firstChild as HTMLElement
    
    expect(card).toHaveClass('p-4')
  })

  it('applies large padding', () => {
    const { container } = render(<Card padding="lg">Large padding</Card>)
    const card = container.firstChild as HTMLElement
    
    expect(card).toHaveClass('p-6')
  })

  it('applies no padding when none specified', () => {
    const { container } = render(<Card padding="none">No padding</Card>)
    const card = container.firstChild as HTMLElement
    
    expect(card).not.toHaveClass('p-3', 'p-4', 'p-6')
  })

  it('applies custom className', () => {
    const { container } = render(<Card className="custom-class">Custom</Card>)
    const card = container.firstChild as HTMLElement
    
    expect(card).toHaveClass('custom-class')
  })

  it('passes through HTML div props', () => {
    const { container } = render(
      <Card 
        id="test-card"
        data-testid="card"
        role="region"
        aria-label="Test card"
      >
        Props
      </Card>
    )
    
    const card = container.querySelector('[data-testid="card"]')
    expect(card).toHaveAttribute('id', 'test-card')
    expect(card).toHaveAttribute('role', 'region')
    expect(card).toHaveAttribute('aria-label', 'Test card')
  })

  it('has backdrop blur effect', () => {
    const { container } = render(<Card>Blur</Card>)
    const card = container.firstChild as HTMLElement
    
    expect(card).toHaveClass('backdrop-blur-sm')
  })

  it('has transition styles', () => {
    const { container } = render(<Card>Transition</Card>)
    const card = container.firstChild as HTMLElement
    
    expect(card).toHaveClass('transition-all')
    expect(card).toHaveClass('duration-300')
  })
})
