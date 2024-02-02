import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const AngleUp = (props: IconProps) => {
  return (
    <Icon name="angle-up" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M23.71,16.29,15.54,8.12a5,5,0,0,0-7.08,0L.29,16.29a1,1,0,0,0,1.42,1.42L9.88,9.54a3,3,0,0,1,4.24,0l8.17,8.17a1,1,0,0,0,1.42,0A1,1,0,0,0,23.71,16.29Z" />
    </Icon>
  )
}
AngleUp.displayName = 'AngleUp'
export default AngleUp
