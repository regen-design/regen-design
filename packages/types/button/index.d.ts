import React from 'react'
import { CommonType, Size, Type } from '../common'

export interface ButtonProps extends CommonType {
  /**
   * @default 'default'
   * @description Button type
   * @type Type
   */
  type?: Type
  /**
   * @default 'medium'
   * @description Button size
   * @type Size
   */
  size?: Size
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
