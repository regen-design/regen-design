import { CommonType } from '../common'
export interface DatePickerProps extends Omit<CommonType, 'children'> {
  /**
   * @description The placeholder of the date picker
   * @type string
   * @default '选择日期'
   */
  placeholder?: string
}
