import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const CaretRight = (props: IconProps) => {
  return (
    <Icon name="caret-right" {...props}>
      <path d="M9,17.88V6.71A1,1,0,0,1,10.71,6l5.58,5.59a1,1,0,0,1,0,1.41l-5.58,5.59A1,1,0,0,1,9,17.88Z" />
    </Icon>
  )
}
CaretRight.displayName = 'CaretRight'
export default CaretRight
