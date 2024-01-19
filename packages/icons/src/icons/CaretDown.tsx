import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const CaretDown = (props: IconProps) => {
  return (
    <Icon name="caret-down" {...props}>
      <path d="M6.41,9H17.59a1,1,0,0,1,.7,1.71l-5.58,5.58a1,1,0,0,1-1.42,0L5.71,10.71A1,1,0,0,1,6.41,9Z" />
    </Icon>
  )
}
CaretDown.displayName = 'CaretDown'
export default CaretDown
