import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const SignalAlt2 = (props: IconProps) => {
  return (
    <Icon name="signal-alt-2" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M12,6A3,3,0,0,0,9,9V21a3,3,0,0,0,6,0V9A3,3,0,0,0,12,6Z" />
      <path d="M21,0a3,3,0,0,0-3,3V21a3,3,0,0,0,6,0V3A3,3,0,0,0,21,0Z" />
      <path d="M3,12a3,3,0,0,0-3,3v6a3,3,0,0,0,6,0V15A3,3,0,0,0,3,12Z" />
    </Icon>
  )
}
SignalAlt2.displayName = 'SignalAlt2'
export default SignalAlt2
