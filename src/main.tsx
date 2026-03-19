import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initWebVitals } from '@shared/hooks/useWebVitals'
import './app/global.css'
import App from './app/App'

// Initialize Core Web Vitals monitoring
if (typeof window !== 'undefined') {
  initWebVitals()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
