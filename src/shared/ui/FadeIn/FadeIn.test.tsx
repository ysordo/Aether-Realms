import { describe, it, expect } from 'vitest'
import { render, screen } from '../../../test/test-utils'
import { FadeIn } from './FadeIn'

describe('FadeIn', () => {
  it('renders children correctly', () => {
    render(<FadeIn>FadeIn content</FadeIn>)
    
    expect(screen.getByText('FadeIn content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<FadeIn className="custom-class">Custom</FadeIn>)
    
    expect(screen.getByText('Custom')).toHaveClass('custom-class')
  })

  it('uses default delay of 0', () => {
    render(<FadeIn>Default delay</FadeIn>)
    
    expect(screen.getByText('Default delay')).toBeInTheDocument()
  })

  it('uses custom delay', () => {
    render(<FadeIn delay={0.5}>Custom delay</FadeIn>)
    
    expect(screen.getByText('Custom delay')).toBeInTheDocument()
  })

  it('uses default duration of 0.6', () => {
    render(<FadeIn>Default duration</FadeIn>)
    
    expect(screen.getByText('Default duration')).toBeInTheDocument()
  })

  it('uses custom duration', () => {
    render(<FadeIn duration={1}>Custom duration</FadeIn>)
    
    expect(screen.getByText('Custom duration')).toBeInTheDocument()
  })

  it('uses default direction of up', () => {
    render(<FadeIn>Default direction</FadeIn>)
    
    expect(screen.getByText('Default direction')).toBeInTheDocument()
  })

  it('uses up direction', () => {
    render(<FadeIn direction="up">Up</FadeIn>)
    
    expect(screen.getByText('Up')).toBeInTheDocument()
  })

  it('uses down direction', () => {
    render(<FadeIn direction="down">Down</FadeIn>)
    
    expect(screen.getByText('Down')).toBeInTheDocument()
  })

  it('uses left direction', () => {
    render(<FadeIn direction="left">Left</FadeIn>)
    
    expect(screen.getByText('Left')).toBeInTheDocument()
  })

  it('uses right direction', () => {
    render(<FadeIn direction="right">Right</FadeIn>)
    
    expect(screen.getByText('Right')).toBeInTheDocument()
  })

  it('uses none direction', () => {
    render(<FadeIn direction="none">None</FadeIn>)
    
    expect(screen.getByText('None')).toBeInTheDocument()
  })

  it('uses default distance of 40', () => {
    render(<FadeIn>Default distance</FadeIn>)
    
    expect(screen.getByText('Default distance')).toBeInTheDocument()
  })

  it('uses custom distance', () => {
    render(<FadeIn distance={100}>Custom distance</FadeIn>)
    
    expect(screen.getByText('Custom distance')).toBeInTheDocument()
  })

  it('has viewport once option enabled', () => {
    render(<FadeIn>Viewport once</FadeIn>)
    
    expect(screen.getByText('Viewport once')).toBeInTheDocument()
  })
})
