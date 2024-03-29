import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Close = (props: IconProps) => {
  return (
    <Icon name="close" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z" />
    </Icon>
  )
}
Close.displayName = 'Close'
export default Close
