import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '../../../test/test-utils'
import { LazyImage } from './LazyImage'

// Mock Image constructor
const mockImage = {
  src: '',
  onload: null as (() => void) | null,
  onerror: null as (() => void) | null,
}

vi.spyOn(window, 'Image').mockImplementation(() => mockImage as unknown as HTMLImageElement)

describe('LazyImage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockImage.src = ''
    mockImage.onload = null
    mockImage.onerror = null
  })

  it('renders with placeholder initially', () => {
    render(<LazyImage src="/test-image.jpg" alt="Test image" />)
    
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('alt', 'Test image')
    expect(img).toHaveAttribute('loading', 'lazy')
  })

  it('loads image and updates src on load', async () => {
    render(<LazyImage src="/test-image.jpg" alt="Test image" />)
    
    // Simulate image load
    setTimeout(() => {
      mockImage.onload?.()
    }, 0)
    
    await waitFor(() => {
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('src', '/test-image.jpg')
    })
  })

  it('handles image load error gracefully', async () => {
    render(<LazyImage src="/invalid-image.jpg" alt="Invalid image" />)
    
    // Simulate image error
    setTimeout(() => {
      mockImage.onerror?.()
    }, 0)
    
    await waitFor(() => {
      // Component should still be present even on error
      const img = screen.getByRole('img')
      expect(img).toBeInTheDocument()
    })
  })

  it('uses custom placeholder when provided', () => {
    const customPlaceholder = 'data:image/svg+xml;base64,custom'
    render(
      <LazyImage 
        src="/test-image.jpg" 
        alt="Test image" 
        placeholder={customPlaceholder}
      />
    )
    
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', customPlaceholder)
  })

  it('applies custom aspect ratio', () => {
    render(
      <LazyImage 
        src="/test-image.jpg" 
        alt="Test image" 
        aspectRatio="aspect-square"
      />
    )
    
    const container = screen.getByRole('img').closest('.aspect-square')
    expect(container).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <LazyImage 
        src="/test-image.jpg" 
        alt="Test image" 
        className="custom-class"
      />
    )
    
    const img = screen.getByRole('img')
    expect(img).toHaveClass('custom-class')
  })

  it('passes through additional props', () => {
    render(
      <LazyImage 
        src="/test-image.jpg" 
        alt="Test image"
        data-testid="lazy-image"
        id="test-id"
      />
    )
    
    const img = screen.getByTestId('lazy-image')
    expect(img).toHaveAttribute('id', 'test-id')
  })
})
