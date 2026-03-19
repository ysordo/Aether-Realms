import { Helmet } from 'react-helmet-async'

export interface SEOProps {
  title: string
  description: string
  image?: string
  path?: string
  canonicalUrl?: string
  publishedTime?: string
  type?: 'website' | 'article' | 'product'
}

const DEFAULT_IMAGE = '/assets/og-image.jpg'
const SITE_URL = 'https://aetherrealms.com'

export function SEO({
  title,
  description,
  image = DEFAULT_IMAGE,
  path = '',
  canonicalUrl,
  publishedTime,
  type = 'website',
}: SEOProps) {
  const fullUrl = canonicalUrl || `${SITE_URL}${path}`
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title} | Aether Realms</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {publishedTime && <meta name="date" content={publishedTime} />}

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={`${title} | Aether Realms`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={`${title} | Aether Realms`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': type === 'article' ? 'Article' : 'WebPage',
          name: title,
          description,
          url: fullUrl,
          image: fullImage,
          ...(publishedTime && { datePublished: publishedTime }),
          publisher: {
            '@type': 'Organization',
            name: 'Aether Realms',
            logo: {
              '@type': 'ImageObject',
              url: `${SITE_URL}/assets/logo.png`,
            },
          },
        })}
      </script>
    </Helmet>
  )
}
