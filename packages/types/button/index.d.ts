import { ReactNode } from 'react'
import { CommonType, Size, Type } from '../common'

export interface ButtonProps extends CommonType {
  /**
   * @default 'default'
   * @description button link
   * @type {Type}
   */
  type?: Type
  /**
   * @default 'default'
   * @description button size
   * @type {Size}
   */
  size?: Size
  /**
   * @default false
   * @description button disabled
   * @type {boolean}
   */
  disabled?: boolean
  /**
   * @default undefined
   * @description button custom color
   * @type {string}
   */
  color?: string
  /**
   * @default false
   * @description button dashed
   * @type {boolean}
   */
  dashed?: boolean
  /**
   * @default false
   * @description button text
   * @type {boolean}
   */
  text?: boolean
  /***
   * @default false
   * @description button block
   * @type {boolean}
   */
  block?: boolean
  /**
   * @default false
   * @description button loading
   * @type {boolean}
   */
  loading?: boolean
  /**
   * @default false
   * @description button is circle
   * @type {boolean}
   */
  circle?: boolean
  /**
   * @default false
   * @description button is rounded
   * @type {boolean}
   */
  rounded?: boolean
  /**
   * @default null
   * @description button icon
   * @type {ReactNode}
   */
  icon?: ReactNode
  /**
   * @default undefined
   * @description click event
   * @type {(e: MouseEvent<HTMLButtonElement>) => void}
   */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  /**
   * @default 'button'
   * @description button element type
   */
  htmlType?: 'button' | 'submit' | 'reset'
}
