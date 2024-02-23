import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Minus = (props: IconProps) => {
  return (
    <Icon name="minus" {...props} svgViewBox={`0 0 24 24`}>
      <rect y="11" width="24" height="2" rx="1" />
    </Icon>
  )
}
Minus.displayName = 'Minus'
export default Minus
