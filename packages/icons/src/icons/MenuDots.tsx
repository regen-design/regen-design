import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const MenuDots = (props: IconProps) => {
  return (
    <Icon name="menu-dots" {...props}>
      <circle cx="2" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="22" cy="12" r="2" />
    </Icon>
  )
}
MenuDots.displayName = 'MenuDots'
export default MenuDots
