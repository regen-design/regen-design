import { CommonType } from '../common'
export interface GridProps extends CommonType {
  /**
   * @default 4
   * @description grid column number
   * @type number
   */
  cols?: number
  /**
   * @default 0
   * @description grid x gap
   * @type number
   */
  xGap?: number
  /**
   * @default 0
   * @description grid y gap
   * @type number
   */
  yGap?: number
}
