import { CommonType } from '../common'

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
}
