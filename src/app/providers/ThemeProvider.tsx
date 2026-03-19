import { useEffect } from 'react'
import { useThemeStore } from '@app/store/themeStore'

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const isDark = useThemeStore((state) => state.isDark)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  return <>{children}</>
}
