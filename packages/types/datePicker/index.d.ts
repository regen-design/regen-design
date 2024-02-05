import { CommonType, Size } from '../common'

export interface DatePickerProps<T extends number | string> extends Omit<CommonType, 'children'> {
  /**
   * @description The value of the date picker
   * @type string | number
   * @default undefined
   */
  value?: T
  /**
   * @description The default value of the date picker
   * @type string | number
   * @default undefined
   */
  defaultValue?: T
  /**
   * @description The onChange event of the date picker
   * @type {(value: string | number) => void}
   * @default undefined
   */
  onChange?: T extends number ? (value: number) => void : (value: string) => void
  /**
   * @description The disabled of the date picker
   * @type boolean
   * @default false
   */
  disabled?: boolean
  /**
   * @description The placeholder of the date picker
   * @type string
   * @default '选择日期'
   */
  placeholder?: string
  /**
   * @description The value format of the date picker
   * @type string
   * @default undefined
   */
  valueFormat?: string
  /**
   * @description The min date of the date picker
   * @type number
   */
  minDate?: number
  /**
   * @description The max date of the date picker
   * @type number
   */
  maxDate?: number
  /**
   * @description The format of the date picker
   * @type string
   * @default 'YYYY-MM-DD'
   */
  format?: string
  /**
   * @description The size of the date picker
   * @type Size
   * @default 'default'
   */
  size?: Size
}

export interface DatePickerDateItemType {
  /**
   * @description The day of the date
   * @type number
   */
  day: number
  /**
   * @description The date of the date
   * @type Date
   */
  date: Date
  /**
   * @description is secondary date
   * @type boolean
   */
  secondary: boolean
}
