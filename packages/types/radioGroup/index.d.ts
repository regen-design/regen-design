import { CommonType } from '../common'
export interface RadioGroupProps extends CommonType {
  /**
   * @description options of checkbox group
   * @default []
   * @type CheckboxOption[]
   */
  options?: CheckboxOption[]
  /**
   * @description value of group
   * @default []
   * @type string
   */
  value?: string
  /**
   * @description default value of group
   * @default undefined
   * @type string
   */
  defaultValue?: string
  /**
   * @description onChange of group
   * @default -
   * @type (value: string) => void
   */
  onChange?: (value: string) => void
  /**
   * @description  optionType of group
   * @default default
   * @type default | button
   */
  optionType?: 'default' | 'button'
  /**
   * @description  size of group
   * @default default
   * @type Size
   */
  size?: Size
}
