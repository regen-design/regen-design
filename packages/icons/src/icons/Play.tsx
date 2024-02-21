import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Play = (props: IconProps) => {
  return (
    <Icon name="play" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M20.494,7.968l-9.54-7A5,5,0,0,0,3,5V19a5,5,0,0,0,7.957,4.031l9.54-7a5,5,0,0,0,0-8.064Zm-1.184,6.45-9.54,7A3,3,0,0,1,5,19V5A2.948,2.948,0,0,1,6.641,2.328,3.018,3.018,0,0,1,8.006,2a2.97,2.97,0,0,1,1.764.589l9.54,7a3,3,0,0,1,0,4.836Z" />
    </Icon>
  )
}
Play.displayName = 'Play'
export default Play