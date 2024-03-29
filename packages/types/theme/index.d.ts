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
  | 'white'
  | 'black'
  | 'zinc'
export interface ThemeProps {
  /**
   * @description component theme
   * @type ThemeConfig
   */
  theme?: ThemeConfig
}
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
   * @type string
   */
  borderRadius: string
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
   * @description The opacity of the disabled components
   * @type number
   */
  disabledOpacity: number
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
      backgroundColor: Record<'light' | 'dark', string>
    }
    select: {
      menuPadding: string
      menuItemPadding: string
      activeBackgroundColor: string
    }
    slider: {
      height: string
      thumbSize: string
      thumbColor: string
      thumbBorderColor: string
      backgroundColor: string
      darkBackgroundColor: string
    }
    rate: {
      space: string
      iconSizes: Record<Size, string>
    }
    datePicker: {
      paddingSizes: Record<Size, string>
      panelPadding: string
      monthTitleIconSize: string
      monthTitleIconColor: string
      monthTitleGridTemplateColumns: string
      monthTitleHeight: string
      dateItemSize: string
      dateItemFontSize: string
      weekdayItemSize: string
      weekdayItemFontSize: string
      panelActionsPadding: string
    }
    avatar: {
      size: Record<Size, string>
      fontSize: string
    }
    descriptions: {
      labelBackgroundColor: string
      labelPadding: string
      contentPadding: string
      borderColor: string
    }
    tag: {
      padding: Record<Size, string>
      height: Record<Size, string>
    }
    table: {
      theadBackgroundColor: string
      theadBorderColor: string
      theadTextColor: string
      theadPadding: string
      tdPadding: string
      tdBorderColor: string
      tdTextColor: string
      tdBackgroundColor: string
      tdHoverBackgroundColor: string
      emptyPadding: string
      borderColor: string
    }
  }
}
