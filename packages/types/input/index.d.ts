import { CommonType, Size } from '../common'
import { InputHTMLAttributes, ReactNode } from 'react'

export type InputType = 'text' | 'password' | 'textarea'

type InputTextareaAttributes = InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
export interface InputProps extends Omit<CommonType, 'children'> {
  /**
   * @description placeholder
   * @default ''
   * @type string
   */
  placeholder?: string
  /**
   * @description defaultValue
   * @default ''
   * @type string
   */
  defaultValue?: string
  /**
   * @description value
   * @default undefined
   * @type string
   */
  value?: string
  /**
   * @description disabled
   * @default false
   * @type boolean
   */
  disabled?: boolean
  /**
   * @description auto focus
   * @default undefined
   */
  autosize?: boolean | { minRows?: number; maxRows?: number }
  /**
   * @description readOnly
   * @default false
   * @type boolean
   */
  readOnly?: boolean
  /**
   * @description only number
   * @default false
   * @type boolean
   */
  onlyNumber?: boolean
  /**
   * @description trim
   * @default false
   * @type boolean
   */
  trim?: boolean
  /**
   * @description type
   * @default text
   * @type InputType
   */
  type?: InputType
  /**
   * @description size
   * @default default
   * @type Size
   */
  size?: Size
  /**
   * @description rounded corners
   * @default false
   * @type boolean
   */
  rounded?: boolean
  /**
   * @description prefix node
   * @default undefined
   * @type ReactNode
   */
  prefix?: ReactNode
  /**
   * @description suffix node
   * @default undefined
   * @type ReactNode
   */
  suffix?: ReactNode
  /**
   * @description  show password on event
   * @default click
   * @type
   */
  showPasswordOn?: 'click' | 'mousedown'
  /**
   * @description show password icon
   * @default true
   * @type boolean
   */
  showPassword?: boolean
  /**
   * @description password visible icon
   * @default undefined
   * @type ReactNode
   */
  passwordVisibleIcon?: ReactNode
  /**
   * @description password invisible icon
   * @default undefined
   * @type ReactNode
   */
  passwordInvisibleIcon?: ReactNode
  /**
   * @description show count
   * @default false
   * @type boolean
   */
  showCount?: boolean
  /**
   * @description clearable
   * @default false
   * @type boolean
   */
  clearable?: boolean
  /**
   * @description Get the real length of a string - by correctly counting astral symbols and ignoring ansi escape codes
   * @default false
   * @type boolean
   */
  realLength?: boolean
  /**
   * @description maxLength
   * @default undefined
   * @type number
   */
  maxLength?: number
  /**
   * @description onChange
   * @default undefined
   * @type (value: string) => void
   */
  onChange?: (value: string) => void
  /**
   * @description onFocus
   * @default undefined
   * @type InputTextareaAttributes['onFocus']
   */
  onFocus?: InputTextareaAttributes['onFocus']
  /**
   * @description onBlur
   * @default undefined
   * @type InputTextareaAttributes['onBlur']
   */
  onBlur?: InputTextareaAttributes['onBlur']
  /**
   * @description onPressEnter
   * @default undefined
   * @type KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>
   */
  onPressEnter?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>
  /**
   * @description onClear
   * @default undefined
   * @type () => void
   */
  onClear?: () => void
  /**
   * @description onInput
   * @default undefined
   * @type InputTextareaAttributes['onInput']
   */
  onInput?: InputTextareaAttributes['onInput']
  /**
   * @description onKeyDown
   * @default undefined
   * @type InputTextareaAttributes['onKeyDown']
   */
  onKeyDown?: InputTextareaAttributes['onKeyDown']
  /**
   * @description onKeyUp
   * @default undefined
   * @type InputTextareaAttributes['onKeyUp']
   */
  onKeyUp?: InputTextareaAttributes['onKeyUp']
}
