import { Align, CommonType } from '../common'
export interface DividerProps extends CommonType {
  /**
   * @description The vertical of the divider
   * @default false
   */
  vertical?: boolean
  /**
   * @description The text of the divider
   * @default undefined
   */
  titlePlacement?: Align
}
