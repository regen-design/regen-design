import { CommonType } from '../common'
import { ReactNode } from 'react'

export interface TableColumnItem {
  /**
   * @description The title of table column
   */
  title: string
  /**
   * @description The key of table column
   */
  dataIndex: string
  /**
   * @description The key of table column
   */
  key?: string
  /**
   * @description The width of table column
   */
  width?: string
  /**
   * @description The render of table column
   */
  render?: (text: any, record: any, index: number) => ReactNode
  /**
   * @description The fixed of table column
   */
  fixed?: 'left' | 'right'
  /**
   * @description The align of table column
   */
  align?: 'left' | 'right' | 'center'
}
export interface TableProps extends Omit<CommonType, 'children'> {
  /**
   * @default []
   * @description The data source of table
   */
  dataSource?: Array<any>
  /**
   * @default []
   * @description - The columns of table
   */
  columns?: Array<TableColumnItem>
  /**
   * @default false
   * @description is convert markdown to html
   */
  markdown?: boolean
  /**
   * @description The row key of table
   * @default undefined
   */
  rowKey?: string
  /**
   * @description The bordered of table
   * @default true
   */
  bordered?: boolean
}
