import { CommonType } from '../common'

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
   * @default ""
   * @description CodeBlock code
   * @type string
   */
  code?: string
  /**
   * @default false
   * @description only show code
   * @type boolean
   */
  onlyCode?: boolean
  /**
   * @default false
   * @description only show view
   * @type boolean
   */
  onlyView?: boolean
}
