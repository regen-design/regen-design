import { CommonType } from '../common'
import { Color } from '../theme'
export interface AvatarProps extends CommonType {
  /**
   * @description The size of the avatar
   * @default 'default'
   */
  size?: Size
  /**
   * @description The rounded of the avatar
   * @default false
   */
  rounded?: boolean
  /**
   * @description The src of the avatar
   * @default undefined
   */
  src?: string
  /**
   * @description The name of the avatar
   * @default undefined
   */
  name?: string
  /**
   * @description The color of the avatar
   * @default white
   */
  color?: Color
  /**
   * @description The background color of the avatar
   * @default placeholder
   */
  backgroundColor?: Color
  /**
   * @description The border color of the avatar
   * @default transparent
   */
  borderColor?: Color
}
