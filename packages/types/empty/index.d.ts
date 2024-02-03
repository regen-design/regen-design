import { CommonType } from '../common'
import { ReactNode } from 'react'
export interface EmptyProps extends CommonType {
  /**
   * @description The title of the empty state
   * @type string
   * @default 'No Data'
   */
  description?: string
  /**
   * @description The icon of the empty state
   * @type ReactNode
   * @default undefined
   */
  icon?: ReactNode
}
