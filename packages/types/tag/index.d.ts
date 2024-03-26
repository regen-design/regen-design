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
   * @description Is there a border
   * @default true
   */
  bordered?: boolean
  /**
   * @description Can it be closed
   * @default false
   */
  closable?: boolean
  /**
   * @description Whether to disable
   * @default false
   */
  disabled?: boolean
  /**
   * @description Callback when click close
   */
  onClose?: () => void
}
