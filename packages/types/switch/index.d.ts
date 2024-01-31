import { CommonType } from '../common'
export interface SwitchProps extends Omit<CommonType, 'children'> {
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
}
