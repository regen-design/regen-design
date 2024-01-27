import { CommonType, Size } from '../common'
export interface CheckboxProps extends CommonType {
  /**
   * @description is checked
   * @default false
   * @type boolean
   */
  checked?: boolean
  /**
   * @description onChange
   * @default undefined
   * @type (checked: boolean) => void
   */
  onChange?: (checked: boolean) => void
  /**
   * @description is disabled
   * @default false
   * @type boolean
   */
  disabled?: boolean
  /**
   * @description size
   * @default default
   * @type Size
   */
  size?: Size
}
