import { CommonType, Size } from '../common'
import { ReactNode } from 'react'

export type InputType = 'text' | 'password' | 'textarea'
export interface InputProps extends CommonType {
  /**
   * @description placeholder
   * @default ''
   * @type string
   */
  placeholder?: string
  /**
   * @description value
   * @default ''
   * @type string
   */
  value?: string
  /**
   * @description onChange
   * @default undefined
   * @type (value: string) => void
   */
  onChange?: (value: string) => void
  /**
   * @description disabled
   * @default false
   * @type boolean
   */
  disabled?: boolean
  /**
   * @description readOnly
   * @default false
   * @type boolean
   */
  readOnly?: boolean
  /**
   * @description type
   * @default text
   * @type InputType
   */
  type?: InputType
  /**
   * @description size
   * @default default
   * @type Size
   */
  size?: Size
  /**
   * @description rounded corners
   * @default false
   * @type boolean
   */
  round?: boolean
  /**
   * @description prefix node
   * @default undefined
   * @type ReactNode
   */
  prefix?: ReactNode
  /**
   * @description suffix node
   * @default undefined
   * @type ReactNode
   */
  suffix?: ReactNode
  /**
   * @description show count
   * @default false
   * @type boolean
   */
  showCount?: boolean
}
