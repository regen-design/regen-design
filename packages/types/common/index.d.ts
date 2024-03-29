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
export type Theme = 'light' | 'dark'
export type Size = 'tiny' | 'small' | 'default' | 'large'
export type Type = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
export type Align = 'left' | 'center' | 'right'
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS'
export type Placement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end'
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}
