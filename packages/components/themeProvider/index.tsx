import { FC, ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { defaultTheme } from '../../theme'
import { DeepPartial, ThemeConfig } from '@regen-design/types'

export interface ThemeProviderProps {
  children: ReactNode
  theme?: DeepPartial<ThemeConfig>
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
