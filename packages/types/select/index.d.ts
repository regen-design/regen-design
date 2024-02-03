import { CommonType, Size } from '../common'
import { ReactNode } from 'react'

export interface SelectProps extends Omit<CommonType, 'children'> {
  /**
   * @description value of the select
   * @type string
   * @default ''
   */
  value?: string
  /**
   * @description onChange event of the select
   * @type (value: string) => void
   * @default undefined
   */
  onChange?: (value: string) => void
  /**
   * @description options of the select
   * @type { label: ReactNode; value: string;disabled?: boolean }[]
   * @default []
   */
  options?: { label: ReactNode; value: string; disabled?: boolean }[]
  /**
   * @description Whether to hide the menu when clicking item
   * @type boolean
   * @default true
   */
  hideMenuOnClick?: boolean
  /**
   * @description disabled of the select
   * @type boolean
   * @default false
   */
  disabled?: boolean
  /**
   * @description placeholder of the select
   * @type string
   * @default '请选择'
   */
  placeholder?: string
  /**
   * @description size of the select
   * @type Size
   * @default default
   */
  size?: Size
  /**
   * @description clearable of the select
   * @type boolean
   * @default false
   */
  clearable?: boolean
  /**
   * @description clear icon of the select
   * @type ReactNode
   * @default undefined
   */
  clearIcon?: ReactNode
  /**
   * @description filterable of the select
   * @type boolean
   * @default false
   */
  filterable?: boolean
}
