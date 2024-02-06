import { CommonType, Size, Type } from '../common'
export interface TagProps extends CommonType {
  /**
   * @description The type of the tag
   * @default default
   */
  type?: Type
  /**
   * @description The size of the tag
   * @default default
   */
  size?: Size
  /**
   * @description The bordered of the tag
   * @default true
   */
  bordered?: boolean
}
