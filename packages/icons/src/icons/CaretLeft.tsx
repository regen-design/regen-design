import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const CaretLeft = (props: IconProps) => {
  return (
    <Icon name="caret-left" {...props}>
      <path d="M13.29,18.59,7.71,13a1,1,0,0,1,0-1.41L13.29,6A1,1,0,0,1,15,6.71V17.88A1,1,0,0,1,13.29,18.59Z" />
    </Icon>
  )
}
CaretLeft.displayName = 'CaretLeft'
export default CaretLeft
