import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const BringForward = (props: IconProps) => {
  return (
    <Icon name="bring-forward" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M11,16H5c-2.76,0-5-2.24-5-5V5C0,2.24,2.24,0,5,0h6c2.76,0,5,2.24,5,5v6c0,2.76-2.24,5-5,5ZM5,2c-1.65,0-3,1.35-3,3v6c0,1.65,1.35,3,3,3h6c1.65,0,3-1.35,3-3V5c0-1.65-1.35-3-3-3H5ZM24,19v-6c0-2.76-2.24-5-5-5-.55,0-1,.45-1,1s.45,1,1,1c1.65,0,3,1.35,3,3v6c0,1.65-1.35,3-3,3h-6c-1.65,0-3-1.35-3-3,0-.55-.45-1-1-1s-1,.45-1,1c0,2.76,2.24,5,5,5h6c2.76,0,5-2.24,5-5Z" />
    </Icon>
  )
}
BringForward.displayName = 'BringForward'
export default BringForward
