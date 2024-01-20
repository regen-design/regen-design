import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const AngleRight = (props: IconProps) => {
  return (
    <Icon name="angle-right" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z" />
    </Icon>
  )
}
AngleRight.displayName = 'AngleRight'
export default AngleRight
