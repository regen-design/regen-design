import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Checkbox = (props: IconProps) => {
  return (
    <Icon name="checkbox" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z" />
      <path d="M9.333,15.919,5.414,12A1,1,0,0,0,4,12H4a1,1,0,0,0,0,1.414l3.919,3.919a2,2,0,0,0,2.829,0L20,8.081a1,1,0,0,0,0-1.414h0a1,1,0,0,0-1.414,0Z" />
    </Icon>
  )
}
Checkbox.displayName = 'Checkbox'
export default Checkbox