import { describe, it, expect, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import { waitFor } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { SEO } from './SEO'

describe('SEO', () => {
  const renderWithHelmet = (component: React.ReactElement) => {
    return render(
      <HelmetProvider>
        {component}
      </HelmetProvider>
    )
  }

  beforeEach(() => {
    document.head.innerHTML = ''
  })

  it('renders title correctly', async () => {
    renderWithHelmet(<SEO title="Test Page" description="Test description" />)
    
    await waitFor(() => {
      const ogTitle = document.querySelector('meta[property="og:title"]')
      expect(ogTitle).toHaveAttribute('content', 'Test Page | Aether Realms')
    })
  })

  it('renders meta description', () => {
    renderWithHelmet(<SEO title="Test Page" description="Test description" />)
    
    const metaDescription = document.querySelector('meta[name="description"]')
    expect(metaDescription).toHaveAttribute('content', 'Test description')
  })

  it('renders Open Graph tags', () => {
    renderWithHelmet(
      <SEO 
        title="OG Test" 
        description="OG description" 
        image="/test-image.jpg"
        path="/test"
      />
    )
    
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const ogImage = document.querySelector('meta[property="og:image"]')
    const ogType = document.querySelector('meta[property="og:type"]')
    
    expect(ogTitle).toHaveAttribute('content', 'OG Test | Aether Realms')
    expect(ogDescription).toHaveAttribute('content', 'OG description')
    expect(ogImage).toHaveAttribute('content', 'https://aetherrealms.com/test-image.jpg')
    expect(ogType).toHaveAttribute('content', 'website')
  })

  it('renders Twitter Card tags', () => {
    renderWithHelmet(
      <SEO 
        title="Twitter Test" 
        description="Twitter description"
        image="/twitter-image.jpg"
      />
    )
    
    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    const twitterImage = document.querySelector('meta[name="twitter:image"]')
    
    expect(twitterCard).toHaveAttribute('content', 'summary_large_image')
    expect(twitterTitle).toHaveAttribute('content', 'Twitter Test | Aether Realms')
    expect(twitterDescription).toHaveAttribute('content', 'Twitter description')
    expect(twitterImage).toHaveAttribute('content', 'https://aetherrealms.com/twitter-image.jpg')
  })

  it('renders structured data (schema.org)', () => {
    renderWithHelmet(
      <SEO 
        title="Schema Test" 
        description="Schema description"
        type="article"
        publishedTime="2026-03-15"
      />
    )
    
    const structuredData = document.querySelector('script[type="application/ld+json"]')
    expect(structuredData).toBeInTheDocument()
    
    if (structuredData) {
      const json = JSON.parse(structuredData.textContent || '{}')
      expect(json['@context']).toBe('https://schema.org')
      expect(json['@type']).toBe('Article')
      expect(json.name).toBe('Schema Test')
      expect(json.description).toBe('Schema description')
    }
  })

  it('renders robots meta tag', () => {
    renderWithHelmet(<SEO title="Test" description="Test" />)
    
    const robots = document.querySelector('meta[name="robots"]')
    expect(robots).toHaveAttribute('content', 'index, follow')
  })

  it('uses default image when none provided', () => {
    renderWithHelmet(<SEO title="Test" description="Test" />)
    
    const ogImage = document.querySelector('meta[property="og:image"]')
    expect(ogImage).toHaveAttribute('content', 'https://aetherrealms.com/assets/og-image.jpg')
  })
})
