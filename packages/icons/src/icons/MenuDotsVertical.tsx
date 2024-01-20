import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const MenuDotsVertical = (props: IconProps) => {
  return (
    <Icon name="menu-dots-vertical" {...props} svgViewBox={`0 0 24 24`}>
      <circle cx="12" cy="2" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="22" r="2" />
    </Icon>
  )
}
MenuDotsVertical.displayName = 'MenuDotsVertical'
export default MenuDotsVertical
