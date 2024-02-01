import { CommonType } from '../common'
export interface TableProps extends CommonType {
  /**
   * @default []
   * @description - The data source of table
   * @params {Array}
   * @name dataSource
   */
  dataSource?: Array<any>
  /**
   * @default []
   * @description - The columns of table
   * @params {Array}
   * @name columns
   */
  columns?: Array<any>
}
