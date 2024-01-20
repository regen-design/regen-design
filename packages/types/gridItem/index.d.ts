import { CommonType } from '../common'
export interface GridItemProps extends CommonType {
  /**
   * @default 0
   * @description grid item offset
   * @type number
   */
  offset?: number
  /**
   * @default 1
   * @description grid item span
   * @type number
   */
  span?: number
}
