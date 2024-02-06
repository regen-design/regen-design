import { CommonType, Size } from '../common'
import { CSSProperties, ReactNode } from 'react'

export interface DescriptionsItemProps extends CommonType {
  /**
   * @description The label of the item
   * @default undefined
   */
  label?: string
  /**
   * @description The content class name of the item
   * @default undefined
   */
  contentClassName?: string
  /**
   * @description The label class name of the item
   * @default undefined
   */
  labelClassName?: string
  /**
   * @description The label style of the item
   * @default undefined
   */
  labelStyle?: CSSProperties
  /**
   * @description The content style of the item
   * @default undefined
   */
  contentStyle?: CSSProperties
}
export interface DescriptionsProps extends Omit<CommonType, 'children'> {
  /**
   * @description The number of columns
   * @default 3
   */
  column?: number
  /**
   * @description The size of the description list
   * @default 'default'
   */
  size?: Size
  /**
   * @description The title of the component
   * @default undefined
   */
  title?: ReactNode
  /**
   * @description The title extra of the component
   * @default undefined
   */
  extra?: ReactNode
  /**
   * @description The description list
   * @default []
   */
  items?: DescriptionsItemProps[]
  /**
   * @description Whether the border is displayed
   * @default false
   */
  bordered?: boolean
}
