import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Power = (props: IconProps) => {
  return (
    <Icon name="power" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M15,3.849h0a1.02,1.02,0,0,0,.629.926A9,9,0,0,1,21,13.292,9,9,0,0,1,3,13,9,9,0,0,1,8.371,4.776,1.023,1.023,0,0,0,9,3.848H9a1,1,0,0,0-1.374-.929,11,11,0,1,0,8.751,0A1,1,0,0,0,15,3.849Z" />
      <rect x="11" width="2" height="8" rx="1" />
    </Icon>
  )
}
Power.displayName = 'Power'
export default Power
