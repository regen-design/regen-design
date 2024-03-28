import { CommonType } from '../common'

interface TagItem {
  label: string
  value: string
}
export interface DynamicTagsProps extends CommonType {
  /**
   * @description Value in controlled mode
   */
  value?: TagItem[]
  /**
   * @description Callback when component value changes
   */
  onChange?: (value: TagItem<V>[] | V[]) => void
  /**
   * @description The maximum number of tags
   */
  max?: number
}
