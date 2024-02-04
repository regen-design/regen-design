import { CommonType } from '../common'
export interface SliderProps extends CommonType {
  /**
   * @description value of the slider
   * @type number
   * @default 0
   */
  value?: number
  /**
   * @description default value of the slider
   * @type number
   * @default undefined
   */
  defaultValue?: number
  /**
   * @description onChange event of the slider
   * @type (value: number) => void
   * @default undefined
   */
  onChange?: (value: number) => void
  /**
   * @description min value of the slider
   * @type number
   * @default 0
   */
  min?: number
  /**
   * @description max value of the slider
   * @type number
   * @default 100
   */
  max?: number
  /**
   * @description disabled of the slider
   * @type boolean
   * @default false
   */
  disabled?: boolean
}
