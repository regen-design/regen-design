import { CommonType } from '../common'

interface TagItem<V extends string | number> {
  label: string
  value: V
}
export interface DynamicTagsProps<V extends string | number> extends CommonType {
  /**
   * @description Value in controlled mode
   */
  value?: TagItem<V>[] | V[]
  /**
   * @description Callback when component value changes
   */
  onChange?: (value: TagItem<V>[] | V[]) => void
}
