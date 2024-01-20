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
}
