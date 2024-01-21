import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Spinner = (props: IconProps) => {
  return (
    <Icon name="spinner" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M12,24A12,12,0,1,1,22.714,6.59a1,1,0,1,1-1.785.9,10,10,0,1,0-.011,9.038,1,1,0,0,1,1.781.908A11.955,11.955,0,0,1,12,24Z" />
    </Icon>
  )
}
Spinner.displayName = 'Spinner'
export default Spinner
