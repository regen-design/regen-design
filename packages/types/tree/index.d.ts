import { CommonType } from '../common'
export interface TreeOption {
  /**
   * @description The key of the node needs to be unique. You can use key-field to modify the field name.
   * @default ''
   */
  key: string
  /**
   * @description The label of the node
   * @default ''
   */
  label: string
  /**
   * @description The children of the node
   * @default []
   */
  children?: Array<TreeOption>
  /**
   * @description The disabled of the node
   * @default false
   */
  disabled?: boolean
}
export interface TreeProps extends Omit<CommonType, 'children'> {
  /**
   * @description The data of the tree
   * @default []
   */
  data?: Array<TreeOption>
  /**
   * @description The indent padding of the tree
   * @default 24
   */
  indent?: number
}
