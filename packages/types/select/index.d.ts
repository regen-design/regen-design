import { CommonType } from '../common'
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
   * @type { label: ReactNode; value: string }[]
   * @default []
   */
  options?: { label: ReactNode; value: string }[]
  /**
   * @description Whether to hide the menu when clicking item
   * @type boolean
   * @default true
   */
  hideMenuOnClick?: boolean
}
