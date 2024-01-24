import { ThemeConfig } from '@regen-design/types'
/**
 * @description Convert theme
 * @param theme
 */
export declare const convertTheme: (theme: ThemeConfig) => {
  colors: Record<import('@regen-design/types').Color, string>
  theme?: 'dark' | 'light'
  fontSizes: Record<import('@regen-design/types').Size, string>
  baseSizes: Record<import('@regen-design/types').Size, string>
  borderRadius: number
  borderColor: string
  borderDarkColor: string
  waveBlurRadius: number
  waveDeepAmount: number
  animations: Record<'duration', string | number>
}
