import { CSSProperties, ReactNode } from 'react'

export interface IconProps {
  /**
   * @description icon name
   * @type string
   */
  name?: string
  /**
   * @default ''
   * @description icon className
   * @type string
   */
  className?: string
  /**
   * @default {}
   * @description icon style
   * @type CSSProperties
   */
  style?: CSSProperties
  /**
   * @default null
   * @description icon children
   * @type ReactNode
   */
  children?: ReactNode
}
