import { Size } from '../common'

export type Color =
  | 'primary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'info'
  | 'dark'
  | 'light'
  | 'placeholder'

export type Animation = 'duration'
export type TransitionType = 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'
export interface ThemeConfig {
  /**
   * @description The colors of the components
   * @type Record<Color, string>
   */
  colors: Record<Color, string>
  /**
   * @description The theme of the components
   * @type 'light' | 'dark'
   */
  theme?: 'light' | 'dark'
  /**
   * @description The font sizes of the components
   * @type Record<Size, string>
   */
  fontSizes: Record<Size, string>
  /**
   *  @description The base sizes of the components
   *  @type Record<Size, string>
   */
  baseSizes: Record<Size, string>
  /**
   *  @description The padding sizes of the components
   *  @type Record<Size, string>
   */
  paddingSizes: Record<Size, string>
  /**
   * @description The border radius of the components
   * @type number
   */
  borderRadius: number
  /**
   * @description The border color of light theme
   * @type string
   */
  borderColor: string
  /**
   * @description The border color of dark theme
   * @type string
   */
  borderDarkColor: string
  /**
   * @description The blur radius of the wave effect
   * @type number
   */
  waveBlurRadius: number
  /**
   * @description Wave effect color darker and lighter depth
   * @type number
   */
  waveDeepAmount: number
  /**
   * @description animation variables
   * @type Record<Animation, string | number>
   */
  animations: Record<Animation, string | number>
  /**
   * @description transition variables
   * @type Record<TransitionType, string>
   */
  transition: Record<TransitionType, string>
  /**
   * @description The components variables
   * @type Record<ComponentsType, Record<Size, string>>
   */
  components: {
    switch: {
      width: Record<Size, string>
      height: Record<Size, string>
      backgroundColor?: Record<'light' | 'dark', string>
    }
    select: {
      menuPadding: string
      menuItemPadding: string
      activeBackgroundColor: string
    }
  }
}
