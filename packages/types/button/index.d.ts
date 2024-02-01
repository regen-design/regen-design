import { ReactNode } from 'react'
import { CommonType, Size, Type } from '../common'

export interface ButtonProps extends CommonType {
  /**
   * @default 'default'
   * @description - button type
   * @params {Type}
   * @name type
   */
  type?: Type
  /**
   * @default undefined
   * @description - button custom color
   * @params {string}
   * @name color
   */
  color?: string
  /**
   * @default 'default'
   * @description - button size
   * @params {Size}
   * @name size
   */
  size?: Size
  /**
   * @default false
   * @description - button disabled
   * @params {boolean}
   * @name disabled
   */
  disabled?: boolean
  /**
   * @default false
   * @description - button dashed
   * @params {boolean}
   * @name dashed
   */
  dashed?: boolean
  /**
   * @default false
   * @description - button text
   * @params {boolean}
   * @name text
   */
  text?: boolean
  /***
   * @default false
   * @description - button block
   * @params {boolean}
   * @name block
   */
  block?: boolean
  /**
   * @default false
   * @description - button loading
   * @params {boolean}
   * @name loading
   */
  loading?: boolean
  /**
   * @default false
   * @description - button is circle
   * @params {boolean}
   * @name circle
   */
  circle?: boolean
  /**
   * @default false
   * @description - button is rounded
   * @params {boolean}
   * @name rounded
   */
  rounded?: boolean
  /**
   * @default null
   * @description - button icon
   * @params {ReactNode}
   * @name icon
   */
  icon?: ReactNode
  /**
   * @default undefined
   * @description - click event
   * @params {(e: React.MouseEvent) => void}
   * @name onClick
   */
  onClick?: (e: MouseEvent) => void
}
