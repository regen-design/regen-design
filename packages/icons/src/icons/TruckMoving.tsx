import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const TruckMoving = (props: IconProps) => {
  return (
    <Icon name="truck-moving" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M23.641,10.76,22.632,7.735A3.994,3.994,0,0,0,18.838,5H16.9A5.009,5.009,0,0,0,12,1H5A5.006,5.006,0,0,0,0,6V19.5a3.517,3.517,0,0,0,6,2.447A3.517,3.517,0,0,0,12,19.5V19h3v.5a3.5,3.5,0,0,0,7,0V18.463A4,4,0,0,0,24,15V12.974A7,7,0,0,0,23.641,10.76ZM20.735,8.368,21.612,11H17V7h1.838A2,2,0,0,1,20.735,8.368ZM2,6A3,3,0,0,1,5,3h7a3,3,0,0,1,3,3V17H2ZM3.5,21A1.5,1.5,0,0,1,2,19.5V19H5v.5A1.5,1.5,0,0,1,3.5,21ZM10,19.5a1.5,1.5,0,0,1-3,0V19h3Zm10,0a1.5,1.5,0,0,1-3,0V19h3ZM20,17H17V13h5v2A2,2,0,0,1,20,17Z" />
    </Icon>
  )
}
TruckMoving.displayName = 'TruckMoving'
export default TruckMoving
