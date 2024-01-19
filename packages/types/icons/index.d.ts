import { ReactNode } from 'react'

export interface IconProps {
  /**
   * @description icon name
   * @type string
   */
  name?: string

  /**
   * @default null
   * @description icon children
   * @type ReactNode
   */
  children?: ReactNode
}
