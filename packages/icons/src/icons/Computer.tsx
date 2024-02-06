import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Computer = (props: IconProps) => {
  return (
    <Icon name="computer" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M19,1H5A5.006,5.006,0,0,0,0,6v8a5.006,5.006,0,0,0,5,5h6v2H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2H13V19h6a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,3,3v7H2V6A3,3,0,0,1,5,3ZM19,17H5a3,3,0,0,1-2.816-2H21.816A3,3,0,0,1,19,17Z" />
    </Icon>
  )
}
Computer.displayName = 'Computer'
export default Computer
