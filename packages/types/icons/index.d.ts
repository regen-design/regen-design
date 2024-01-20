import { CommonType } from '../common'

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
}
