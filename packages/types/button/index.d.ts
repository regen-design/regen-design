import React, { ReactNode } from 'react'
import { CommonType, Size, Type } from '../common'

export interface ButtonProps extends CommonType {
  /**
   * @default 'default'
   * @description button type
   * @type Type
   */
  type?: Type
  /**
   * @default undefined
   * @description button custom color
   * @type string
   */
  color?: string
  /**
   * @default 'default'
   * @description button size
   * @type Size
   */
  size?: Size
  /**
   * @default false
   * @description button disabled
   * @type boolean
   */
  disabled?: boolean
  /**
   * @default false
   * @description button dashed
   * @type boolean
   */
  dashed?: boolean
  /**
   * @default false
   * @description button text
   * @type boolean
   */
  text?: boolean
  /***
   * @default false
   * @description button block
   * @type boolean
   */
  block?: boolean
  /**
   * @default false
   * @description button loading
   * @type boolean
   */
  loading?: boolean
  /**
   * @default false
   * @description button is circle
   * @type boolean
   */
  circle?: boolean
  /**
   * @default false
   * @description button is round
   * @type boolean
   */
  round?: boolean
  /**
   * @default undefined
   * @description button click event
   * @type (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  /**
   * @default null
   * @description button icon
   * @type ReactNode
   */
  icon?: ReactNode
}
