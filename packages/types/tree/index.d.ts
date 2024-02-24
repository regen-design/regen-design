import { CommonType } from '../common'
export type TreeOption = TreeBaseOption & Record<string, unknown>
export interface TreeBaseOption {
  /**
   * @description The key of the node needs to be unique. You can use key-field to modify the field name.
   * @default ''
   */
  key?: string
  /**
   * @description The label of the node
   * @default ''
   */
  label?: string
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
  /**
   * @description The checkable is whether to show the checkbox
   * @default false
   */
  checkable?: boolean
  /**
   * @description The default expanded keys of the tree
   * @default []
   */
  defaultExpandedKeys?: Array<string>
  /**
   * @description The expanded keys of the tree
   * @default []
   */
  expandedKeys?: Array<string>
  /**
   * @description The default selected keys of the tree
   * @default []
   */
  defaultSelectedKeys?: Array<string>
  /**
   * @description The selected keys of the tree
   * @default []
   */
  selectedKeys?: Array<string>
  /**
   * @description The default checked keys of the tree
   * @default []
   */
  defaultCheckedKeys?: Array<string>
  /**
   * @description The checked keys of the tree
   * @default []
   */
  checkedKeys?: Array<string>
  /**
   * @description The expand-on-click-node is whether to expand the node when clicking on the node
   * @default false
   */
  expandOnClickNode?: boolean
  /**
   * @description Customize the fields of node title, key, and children
   * @default { key: 'key', label: 'label', children: 'children' }
   */
  fieldNames?: {
    key: string
    label: string
    children: string
  }
}
