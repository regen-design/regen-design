import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const ArrowFromTop = (props: IconProps) => {
  return (
    <Icon name="arrow-from-top" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M17.278,17.129,13,21.407V2h5a1,1,0,0,0,0-2H6A1,1,0,0,0,6,2h5V21.421L6.707,17.129a1,1,0,1,0-1.414,1.414l4.579,4.578a3,3,0,0,0,4.242,0l4.578-4.578a1,1,0,1,0-1.414-1.414Z" />
    </Icon>
  )
}
ArrowFromTop.displayName = 'ArrowFromTop'
export default ArrowFromTop
