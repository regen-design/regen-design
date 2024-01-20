import { CommonType, Size } from '../common'

export interface IconProps extends CommonType {
  /**
   * @description icon name
   * @type string
   */
  name?: string
  /**
   * @default 'default'
   * @description icon size
   * @type Size
   */
  size?: Size
}
