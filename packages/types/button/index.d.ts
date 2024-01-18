import React, { ReactNode } from 'react'
import { CommonType, Type } from '../common'

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
