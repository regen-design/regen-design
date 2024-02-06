import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Exclamation = (props: IconProps) => {
  return (
    <Icon name="exclamation" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
      <path d="M12,5a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V6A1,1,0,0,0,12,5Z" />
      <rect x="11" y="17" width="2" height="2" rx="1" />
    </Icon>
  )
}
Exclamation.displayName = 'Exclamation'
export default Exclamation
