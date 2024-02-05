import { CommonType } from '../common'
export interface DatePickerProps extends Omit<CommonType, 'children'> {
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
   * @description The value of the date picker
   * @type number
   */
  value?: number
  /**
   * @description The onChange event of the date picker
   * @type (value: number) => void
   */
  onChange?: (value: number) => void
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
