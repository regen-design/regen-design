import { Size } from '../common'

export type Color = 'primary' | 'danger' | 'success' | 'warning' | 'info' | 'dark' | 'light'

export type Animation = 'duration'

export interface ThemeConfig {
  /**
   * @default
   *  primary: '#6060e0',
   *  danger: '#e75050',
   *  success: '#33b770',
   *  warning: '#f3a400',
   *  info: '#5f99ff',
   *  dark: '#18181c',
   *  light: '#fafafa',
   * @description The colors of the components
   * @type Record<Color, string>
   */
  colors: Record<Color, string>
  theme?: 'light' | 'dark'
  /**
   * @default
   *   tiny: '12px',
   *   small: '14px',
   *   default: '16px',
   *   large: '16px',
   * @description The font sizes of the components
   * @type Record<Size, string>
   */
  fontSizes: Record<Size, string>
  /**
   * @default 3
   * @description The border radius of the components
   * @type number
   */
  borderRadius: number
  /**
   * @default #dfdfdf
   * @description The border color of light theme
   * @type string
   */
  borderColor: string
  /**
   * @default #4f4f52
   * @description The border color of dark theme
   * @type string
   */
  borderDarkColor: string
  /**
   * @default 6
   * @description The radius of the wave effect
   * @type number
   */
  waveBlurRadius: number
  /**
   * @description animation variables
   * @type Record<Animation, string | number>
   */
  animations: Record<Animation, string | number>
}
