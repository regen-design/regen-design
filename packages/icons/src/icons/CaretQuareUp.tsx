import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const CaretQuareUp = (props: IconProps) => {
  return (
    <Icon name="caret-quare-up" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M5,0H19a5.006,5.006,0,0,1,5,5V19a5.006,5.006,0,0,1-5,5H5a5.006,5.006,0,0,1-5-5V5A5.006,5.006,0,0,1,5,0ZM19,22a3,3,0,0,0,3-3V5a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3Zm-1.269-8.6L12.644,8.25a.9.9,0,0,0-1.288,0L6.269,13.4a.924.924,0,0,0,.644,1.575H17.087A.924.924,0,0,0,17.731,13.4Z" />
    </Icon>
  )
}
CaretQuareUp.displayName = 'CaretQuareUp'
export default CaretQuareUp
