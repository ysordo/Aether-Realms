import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '../../../test/test-utils'
import { Button } from './Button'

describe('Button', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('Click me')
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('shows ripple effect on click', async () => {
    vi.useFakeTimers()
    render(<Button>Click me</Button>)
    
    const button = screen.getByRole('button')
    fireEvent.click(button, { clientX: 100, clientY: 100 })
    
    // Check if ripple was added
    const ripples = button.querySelectorAll('span')
    expect(ripples.length).toBeGreaterThan(0)
    
    vi.useRealTimers()
  })

  it('applies primary variant styles by default', () => {
    render(<Button>Primary</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-primary')
  })

  it('applies secondary variant styles', () => {
    render(<Button variant="secondary">Secondary</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-gold')
  })

  it('applies outline variant styles', () => {
    render(<Button variant="outline">Outline</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('border-2')
    expect(button).toHaveClass('border-primary')
  })

  it('applies ghost variant styles', () => {
    render(<Button variant="ghost">Ghost</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('text-base-content')
  })

  it('applies small size styles', () => {
    render(<Button size="sm">Small</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('text-xs')
  })

  it('applies medium size styles by default', () => {
    render(<Button>Medium</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('text-sm')
  })

  it('applies large size styles', () => {
    render(<Button size="lg">Large</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('text-lg')
  })

  it('renders icon when provided', () => {
    render(<Button icon="check">With Icon</Button>)
    
    const icon = screen.getByText('check')
    expect(icon).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn()
    render(<Button disabled onClick={handleClick}>Disabled</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('passes through HTML button props', () => {
    render(
      <Button 
        type="submit" 
        id="test-button"
        aria-label="Test button"
      >
        Test
      </Button>
    )
    
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'submit')
    expect(button).toHaveAttribute('id', 'test-button')
    expect(button).toHaveAttribute('aria-label', 'Test button')
  })

  it('has focus ring styles', () => {
    render(<Button>Focusable</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('focus:outline-none')
    expect(button).toHaveClass('focus:ring-2')
  })
})
