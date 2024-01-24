import { CommonType, Size } from '../common'
import { ReactNode } from 'react'
export interface CardProps extends CommonType {
  /**
   * @description title
   * @default ''
   * @type string
   */
  title?: string
  /**
   * @description card size
   * @default 'default'
   * @type Size
   */
  size?: Size
  /**
   * @description extra content
   * @default null
   * @type ReactNode
   */
  extra?: ReactNode
  /**
   * @description footer content
   * @default null
   * @type ReactNode
   */
  footer?: ReactNode
  /**
   * @description footer class name
   * @default ''
   * @type string
   */
  footerClassName?: string
  /**
   * @description footer style
   * @default {}
   * @type CSSPerspective
   */
  footerStyle?: object
}
