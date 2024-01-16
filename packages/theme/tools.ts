import { defaultTheme } from '@regen-design/theme'
import { ThemeConfig } from '@regen-design/types'

/**
 * @description Convert theme
 * @param theme
 */
export const convertTheme = (theme: ThemeConfig) => {
  return {
    ...defaultTheme,
    ...(theme || {}),
  }
}
