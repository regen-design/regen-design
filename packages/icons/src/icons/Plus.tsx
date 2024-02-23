import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Plus = (props: IconProps) => {
  return (
    <Icon name="plus" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z" />
    </Icon>
  )
}
Plus.displayName = 'Plus'
export default Plus
