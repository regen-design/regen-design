import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const ArrowSmallLeft = (props: IconProps) => {
  return (
    <Icon name="arrow-small-left" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M19,11H9l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-4.29,4.3A2,2,0,0,0,6,12H6a2,2,0,0,0,.59,1.4l4.29,4.3a1,1,0,1,0,1.41-1.42L9,13H19a1,1,0,0,0,0-2Z" />
    </Icon>
  )
}
ArrowSmallLeft.displayName = 'ArrowSmallLeft'
export default ArrowSmallLeft
