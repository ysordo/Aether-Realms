import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from '@app/providers'
import { HomePage } from '@pages/HomePage'
import { NotFoundPage } from '@pages/NotFoundPage'
import { Navigation } from '@widgets/Navigation'
import { Footer } from '@widgets/Footer'
import { ToastContainer } from '@shared/ui/ToastContainer'
import { AudioSettings } from '@features/audio'
import { PageTransition } from '@shared/ui/PageTransition'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useAudio } from '@features/audio'

function AnimatedRoutes() {
  const location = useLocation()
  const { playBGM } = useAudio()

  useEffect(() => {
    playBGM()
  }, [])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition direction="up" duration={0.4}>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition direction="fade" duration={0.3}>
              <NotFoundPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app min-h-screen w-full overflow-hidden flex flex-col">
          <ToastContainer />
          <AudioSettings />
          <Navigation />
          <main className="main-content flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}
