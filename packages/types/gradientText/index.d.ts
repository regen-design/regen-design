import { CommonType, Size, Type } from '../common'
export interface GradientTextProps extends CommonType {
  /**
   * @description The type of the gradient text
   * @default default
   */
  type?: Type
  /**
   * @description The size of the gradient text
   * @default default
   */
  size?: Size | number
  /**
   * @description The gradient of the gradient text
   * @default undefined
   */
  gradient?: string | { from: string; to: string; deg?: number | string }
}
