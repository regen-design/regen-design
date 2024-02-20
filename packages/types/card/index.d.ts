import { CommonType, Size } from '../common'
import { ReactNode } from 'react'
export interface CardProps extends CommonType {
  /**
   * @description title
   * @default ''
   */
  title?: ReactNode
  /**
   * @description card size
   * @default 'default'
   */
  size?: Size
  /**
   * @description extra content
   * @default null
   */
  extra?: ReactNode
  /**
   * @description footer content
   * @default null
   */
  footer?: ReactNode
  /**
   * @description footer class name
   * @default ''
   */
  footerClassName?: string
  /**
   * @description footer style
   * @default {}
   */
  footerStyle?: object
}
