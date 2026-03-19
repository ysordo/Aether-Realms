import { render, type RenderOptions } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import type { ReactElement } from 'react'

/**
 * Wrapper component for rendering components with necessary providers
 */
function AllProviders({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </HelmetProvider>
  )
}

/**
 * Custom render function that includes necessary providers
 */
function customRender(ui: ReactElement, options?: RenderOptions) {
  return render(ui, {
    wrapper: AllProviders,
    ...options,
  })
}

// Re-export everything from testing-library
export * from '@testing-library/react'

// Override render with our custom one
export { customRender as render }
