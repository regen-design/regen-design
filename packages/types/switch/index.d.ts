import { CommonType } from '../common'
import { ReactNode } from 'react'
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
  /**
   * @description disabled
   * @default false
   * @type boolean
   */
  disabled?: boolean
  /**
   * @description is rounded
   * @default true
   * @type boolean
   */
  rounded?: boolean
  /**
   * @description size
   * @default 'default'
   * @type Size
   */
  size?: Size
  /**
   * @description checked children
   * @default undefined
   * @type ReactNode
   */
  checkedChildren?: ReactNode
  /**
   * @description un checked children
   * @default undefined
   * @type ReactNode
   */
  unCheckedChildren?: ReactNode
  /**
   * @description icon
   * @default undefined
   * @type ReactNode
   */
  icon?: ReactNode
  /**
   * @description checked icon
   * @default undefined
   * @type ReactNode
   */
  checkedIcon?: ReactNode
  /**
   * @description un checked icon
   * @default undefined
   * @type ReactNode
   */
  unCheckedIcon?: ReactNode
}
