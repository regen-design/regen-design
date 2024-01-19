import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Add = (props: IconProps) => {
  return (
    <Icon name="add" {...props}>
      <path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" />
    </Icon>
  )
}
Add.displayName = 'Add'
export default Add
