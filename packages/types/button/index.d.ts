import React, { ReactNode } from 'react'
import { CommonType } from '../common'
export type Size = 'tiny' | 'small' | 'medium' | 'large'
export type Type = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
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
  /**
   * @default undefined
   * @description Button click event
   * @type (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
