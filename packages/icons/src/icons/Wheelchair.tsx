import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Wheelchair = (props: IconProps) => {
  return (
    <Icon name="wheelchair" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M23,21H21.721L20.4,17.051A3,3,0,0,0,17.559,15H14a2,2,0,0,1-2-2h6a1,1,0,0,0,0-2H12V8a1.026,1.026,0,0,0-.027-.134,4,4,0,1,0-1.946,0A1.026,1.026,0,0,0,10,8v5a4,4,0,0,0,3.911,3.991,6,6,0,1,1-6.769-6.929,1,1,0,0,0-.284-1.981A8,8,0,1,0,15.931,17h1.628a1,1,0,0,1,.949.684l1.544,4.632A1,1,0,0,0,21,23h2a1,1,0,0,0,0-2ZM9,4a2,2,0,1,1,2,2A2,2,0,0,1,9,4Z" />
    </Icon>
  )
}
Wheelchair.displayName = 'Wheelchair'
export default Wheelchair
