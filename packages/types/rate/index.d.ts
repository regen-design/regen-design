import { CommonType } from '../common'
export interface RateProps extends Omit<CommonType, 'children'> {
  /**
   * @description icon count
   * @default 5
   * @type number
   */
  count?: number
  /**
   * @description default value
   * @default 0
   * @type number
   */
  defaultValue?: number
  /**
   * @description value
   * @default undefined
   * @type number
   */
  value?: number
  /**
   * @description allow half
   * @default false
   * @type boolean
   */
  allowHalf?: boolean
  /**
   * @description disabled
   * @default false
   * @type boolean
   */
  disabled?: boolean
  /**
   * @description on change callback
   * @default undefined
   * @type (value: number) => void
   */
  onChange?: (value: number) => void
  /**
   * @description active color
   * @default #FFCC33
   * @type string
   */
  color?: string
}
