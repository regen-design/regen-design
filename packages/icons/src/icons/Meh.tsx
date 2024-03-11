import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Meh = (props: IconProps) => {
  return (
    <Icon name="meh" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm5,14a1,1,0,0,0-1-1H8a1,1,0,0,0,0,2h8A1,1,0,0,0,17,16ZM6,10c0,1,.895,1,2,1s2,0,2-1a2,2,0,0,0-4,0Zm8,0c0,1,.895,1,2,1s2,0,2-1a2,2,0,0,0-4,0Z" />
    </Icon>
  )
}
Meh.displayName = 'Meh'
export default Meh
