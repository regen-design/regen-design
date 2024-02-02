import { CommonType } from '../common'
export interface TableProps extends Omit<CommonType, 'children'> {
  /**
   * @default []
   * @description The data source of table
   * @type {Array}
   */
  dataSource?: Array<any>
  /**
   * @default []
   * @description - The columns of table
   * @type {Array}
   */
  columns?: Array<any>
  /**
   * @default false
   * @description is convert markdown to html
   * @type {boolean}
   */
  markdown?: boolean
}
