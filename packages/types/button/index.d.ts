import { ReactNode } from 'react'
import { CommonType } from '../common'
export type Size = 'tiny' | 'small' | 'medium' | 'large'
export type Type = 'default' | 'tertiary' | 'primary' | 'info' | 'success' | 'warning' | 'error'
export interface ButtonProps extends CommonType {
  children?: ReactNode
  /**
   * @default 'default'
   * @description Button type
   * @type Type
   */
  type?: Type
  /**
   * @default false
   * @description Button disabled
   * @type boolean
   */
  disabled?: boolean
}
