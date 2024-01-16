import { FC, ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { defaultTheme } from '../variable'

export interface ThemeProviderProps {
  children: ReactNode
  theme?: typeof defaultTheme
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
  return (
    <StyledThemeProvider
      theme={{
        ...defaultTheme,
        ...theme,
      }}
    >
      {children}
    </StyledThemeProvider>
  )
}
