import { CommonType } from '../common'

export interface CheckboxOption {
  /**
   * @description value of checkbox
   * @default ''
   * @type string
   */
  value: string
  /**
   * @description label of checkbox
   * @default ''
   * @type string
   */
  label: string
  /**
   * @description disabled of checkbox
   * @default false
   * @type boolean
   */
  disabled?: boolean
}

export interface CheckboxGroupProps extends Omit<CommonType, 'children'> {
  /**
   * @description options of checkbox group
   * @default []
   * @type CheckboxOption[]
   */
  options?: CheckboxOption[]
  /**
   * @description value of checkbox group
   * @default []
   * @type string[]
   */
  value?: string[]
  /**
   * @description default value of checkbox group
   * @default undefined
   * @type string[]
   */
  defaultValue?: string[]
  /**
   * @description onChange of checkbox group
   * @default -
   * @type (value: string[]) => void
   */
  onChange?: (value: string[]) => void
}
