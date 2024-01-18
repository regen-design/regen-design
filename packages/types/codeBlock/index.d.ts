import { CommonType } from '../common'
import { ReactNode } from 'react'

export interface CodeBlockProps extends CommonType {
  /**
   * @default Title
   * @description CodeBlock title
   * @type string
   */
  title?: string
  /**
   * @default ""
   * @description CodeBlock description
   * @type string
   */
  description?: string
  /**
   * @default null
   * @description CodeBlock children
   * @type ReactNode
   */
  children: ReactNode
  /**
   * @default ""
   * @description CodeBlock code
   * @type string
   */
  code?: string
}
