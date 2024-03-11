import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Sad = (props: IconProps) => {
  return (
    <Icon name="sad" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm5.746,15.667a1,1,0,0,0-.08-1.413A9.454,9.454,0,0,0,12,14a9.454,9.454,0,0,0-5.666,2.254,1,1,0,0,0,1.33,1.494A7.508,7.508,0,0,1,12,16a7.51,7.51,0,0,1,4.336,1.748,1,1,0,0,0,1.41-.081ZM6,10c0,1,.895,1,2,1s2,0,2-1a2,2,0,0,0-4,0Zm8,0c0,1,.895,1,2,1s2,0,2-1a2,2,0,0,0-4,0Z" />
    </Icon>
  )
}
Sad.displayName = 'Sad'
export default Sad
