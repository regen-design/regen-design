import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const List = (props: IconProps) => {
  return (
    <Icon name="list" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M7,6H23a1,1,0,0,0,0-2H7A1,1,0,0,0,7,6Z" />
      <path d="M23,11H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" />
      <path d="M23,18H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" />
      <circle cx="2" cy="5" r="2" />
      <circle cx="2" cy="12" r="2" />
      <circle cx="2" cy="19" r="2" />
    </Icon>
  )
}
List.displayName = 'List'
export default List
