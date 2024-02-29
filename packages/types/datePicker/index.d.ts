import { CommonType, Size } from '../common'

export interface DatePickerProps<V extends DatePickerValueType, T extends DatePickerType>
  extends Omit<CommonType, 'children'> {
  /**
   * @description The value of the date picker
   * @default undefined
   */
  value?: DatePickerValueType<T>
  /**
   * @description The default value of the date picker
   * @default undefined
   */
  defaultValue?: V
  /**
   * @description The onChange event of the date picker
   * @default undefined
   */
  onChange?: DatePickerOnChangeType<V>
  /**
   * @description The disabled of the date picker
   * @default false
   */
  disabled?: boolean
  /**
   * @description The placeholder of the date picker
   * @default '选择日期'
   */
  placeholder?: string
  /**
   * @description The value format of the date picker
   * @default undefined
   */
  valueFormat?: string
  /**
   * @description The min date of the date picker
   */
  minDate?: number
  /**
   * @description The max date of the date picker
   */
  maxDate?: number
  /**
   * @description The format of the date picker
   * @default 'YYYY-MM-DD'
   */
  format?: string
  /**
   * @description The size of the date picker
   * @default 'default'
   */
  size?: Size
  /**
   * @description The type of the date picker
   * @default 'date'
   */
  type?: DatePickerType
}

export interface DatePickerDateItemType {
  /**
   * @description The day of the date
   */
  day: number
  /**
   * @description The date of the date
   */
  date: Date
  /**
   * @description is secondary date
   */
  secondary: boolean
}
export type DatePickerType = 'date' | 'date-range'
export type DatePickerValueType<T extends DatePickerType> = T extends 'date'
  ? DatePickerValueDateType
  : T extends 'date-range'
    ? DatePickerValueDateRangeType
    : never

export type DatePickerValueDateRangeType = [number, number] | [string, string] | []
export type DatePickerValueDateType = number | string

export type DatePickerOnChangeType<T extends DatePickerValueType<DatePickerType>> = T extends number
  ? (value: number) => void
  : T extends string
    ? (value: string) => void
    : T extends [number, number]
      ? (value: [number, number]) => void
      : T extends [string, string]
        ? (value: [string, string]) => void
        : (value: null) => void
