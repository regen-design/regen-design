import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Venus = (props: IconProps) => {
  return (
    <Icon name="venus" {...props}>
      <path d="M20,8a8,8,0,1,0-9,7.931V19H9a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V21h2a1,1,0,0,0,0-2H13V15.931A8.008,8.008,0,0,0,20,8ZM6,8a6,6,0,1,1,6,6A6.006,6.006,0,0,1,6,8Z" />
    </Icon>
  )
}
Venus.displayName = 'Venus'
export default Venus
