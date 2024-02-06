import { defaultTheme } from '@regen-design/theme'
import { ThemeConfig } from '@regen-design/types'
import { deepMerge } from '@regen-design/utils/object'

/**
 * @description Convert theme
 * @param theme
 */
export const convertTheme = (theme: ThemeConfig) => {
  return deepMerge(defaultTheme, theme || {}) as ThemeConfig
}
