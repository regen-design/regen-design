import { ThemeConfig } from '../theme'
import { CSSProperties, ReactNode } from 'react'

export interface CommonType {
  /**
   * @description component theme
   * @type ThemeConfig
   */
  theme?: ThemeConfig
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
   * @description children node
   * @type ReactNode
   */
  children?: ReactNode
}

export type Size = 'tiny' | 'small' | 'medium' | 'large'
export type Type = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}
