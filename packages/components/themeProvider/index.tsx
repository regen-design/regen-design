import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { defaultTheme } from '../../theme'
import { DeepPartial, ThemeConfig } from '@regen-design/types'

export interface ThemeProviderProps {
  children: ReactNode
  theme?: DeepPartial<ThemeConfig>
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
  const mutationObserver = useRef<MutationObserver | null>(null)
  const [themeValue, setThemeValue] = useState(
    window?.document?.documentElement?.getAttribute('data-theme') || 'light'
  )
  useEffect(() => {
    if (!window?.document?.documentElement) return
    if (mutationObserver.current) {
      mutationObserver.current.disconnect()
      mutationObserver.current = null
    }
    mutationObserver.current = new MutationObserver(mutationsList => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes') {
          if (mutation.attributeName === 'data-theme') {
            const themeValue = (mutation.target as HTMLElement).getAttribute('data-theme')
            setThemeValue(themeValue || 'light')
          }
        }
      }
    })
    window?.document?.documentElement &&
      mutationObserver.current.observe(window?.document?.documentElement, { attributes: true })
    return () => {
      mutationObserver.current?.disconnect()
    }
  }, [])
  return (
    <StyledThemeProvider
      theme={{
        ...defaultTheme,
        theme: themeValue,
        ...theme,
      }}
    >
      {children}
    </StyledThemeProvider>
  )
}
