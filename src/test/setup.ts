import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Cleanup after each test
afterEach(() => {
  cleanup()
})

// Mock matchMedia for components that use it (e.g., theme toggle)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // deprecated
    removeListener: () => {}, // deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
})

// Mock IntersectionObserver for scroll-based components
class MockIntersectionObserver {
  readonly root: Element | null = null
  readonly rootMargin: string = '0px'
  readonly thresholds: ReadonlyArray<number> = []
  observe = () => {}
  unobserve = () => {}
  disconnect = () => {}
  takeRecords = () => []
}

window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver

// Mock requestAnimationFrame
window.requestAnimationFrame = (callback: FrameRequestCallback) => {
  setTimeout(callback, 0)
  return 0
}
