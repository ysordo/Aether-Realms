import { describe, it, expect } from 'vitest'
import { render, screen } from '../../../test/test-utils'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders children correctly', () => {
    render(<Badge>Badge text</Badge>)
    
    expect(screen.getByText('Badge text')).toBeInTheDocument()
  })

  it('applies primary variant by default', () => {
    render(<Badge>Primary</Badge>)
    
    const badge = screen.getByText('Primary')
    expect(badge).toHaveClass('bg-primary/20')
    expect(badge).toHaveClass('text-primary')
  })

  it('applies gold variant styles', () => {
    render(<Badge variant="gold">Gold</Badge>)
    
    const badge = screen.getByText('Gold')
    expect(badge).toHaveClass('bg-gold/20')
    expect(badge).toHaveClass('text-gold')
  })

  it('applies blue variant styles', () => {
    render(<Badge variant="blue">Blue</Badge>)
    
    const badge = screen.getByText('Blue')
    expect(badge).toHaveClass('text-blue-400')
  })

  it('applies slate variant styles', () => {
    render(<Badge variant="slate">Slate</Badge>)
    
    const badge = screen.getByText('Slate')
    expect(badge).toHaveClass('text-slate-300')
  })

  it('applies green variant styles', () => {
    render(<Badge variant="green">Green</Badge>)
    
    const badge = screen.getByText('Green')
    expect(badge).toHaveClass('text-green-400')
  })

  it('applies red variant styles', () => {
    render(<Badge variant="red">Red</Badge>)
    
    const badge = screen.getByText('Red')
    expect(badge).toHaveClass('text-red-400')
  })

  it('applies purple variant styles', () => {
    render(<Badge variant="purple">Purple</Badge>)
    
    const badge = screen.getByText('Purple')
    expect(badge).toHaveClass('text-purple-400')
  })

  it('applies small size styles', () => {
    render(<Badge size="sm">Small</Badge>)
    
    const badge = screen.getByText('Small')
    expect(badge).toHaveClass('px-2')
    expect(badge).toHaveClass('py-0.5')
    expect(badge).toHaveClass('text-[9px]')
  })

  it('applies medium size styles by default', () => {
    render(<Badge>Medium</Badge>)
    
    const badge = screen.getByText('Medium')
    expect(badge).toHaveClass('px-3')
    expect(badge).toHaveClass('py-1')
    expect(badge).toHaveClass('text-[10px]')
  })

  it('applies custom className', () => {
    render(<Badge className="custom-class">Custom</Badge>)
    
    const badge = screen.getByText('Custom')
    expect(badge).toHaveClass('custom-class')
  })

  it('has rounded-full style', () => {
    render(<Badge>Rounded</Badge>)
    
    const badge = screen.getByText('Rounded')
    expect(badge).toHaveClass('rounded-full')
  })

  it('has border style', () => {
    render(<Badge>Bordered</Badge>)
    
    const badge = screen.getByText('Bordered')
    expect(badge).toHaveClass('border')
  })

  it('has uppercase font-bold tracking-widest styles', () => {
    render(<Badge>Styled</Badge>)
    
    const badge = screen.getByText('Styled')
    expect(badge).toHaveClass('font-bold')
    expect(badge).toHaveClass('uppercase')
    expect(badge).toHaveClass('tracking-widest')
  })

  it('passes through HTML span props', () => {
    render(
      <Badge 
        id="test-badge"
        data-testid="badge"
        role="status"
        aria-label="Test badge"
      >
        Props
      </Badge>
    )
    
    const badge = screen.getByTestId('badge')
    expect(badge).toHaveAttribute('id', 'test-badge')
    expect(badge).toHaveAttribute('role', 'status')
    expect(badge).toHaveAttribute('aria-label', 'Test badge')
  })
})
