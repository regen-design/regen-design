import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const AngleDoubleLeft = (props: IconProps) => {
  return (
    <Icon name="angle-double-left" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M12,24a1,1,0,0,1-.71-.29L3.12,15.54a5,5,0,0,1,0-7.08L11.29.29a1,1,0,1,1,1.42,1.42L4.54,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,12,24Z" />
      <path d="M22,24a1,1,0,0,1-.71-.29l-9.58-9.59a3,3,0,0,1,0-4.24L21.29.29a1,1,0,1,1,1.42,1.42l-9.59,9.58a1,1,0,0,0,0,1.42l9.59,9.58a1,1,0,0,1,0,1.42A1,1,0,0,1,22,24Z" />
    </Icon>
  )
}
AngleDoubleLeft.displayName = 'AngleDoubleLeft'
export default AngleDoubleLeft
