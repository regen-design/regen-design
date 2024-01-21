import { CommonType } from '../common'
import { Color } from '../theme'

export interface IconProps extends CommonType {
  /**
   * @description icon name
   * @type string
   */
  name?: string
  /**
   * @default null
   * @description svg viewBox
   * @type string
   */
  svgViewBox?: string
  /**
   * @default 'currentColor'
   * @description icon color
   * @type Color
   */
  color?: Color
}
