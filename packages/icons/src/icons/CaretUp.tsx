import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const CaretUp = (props: IconProps) => {
  return (
    <Icon name="caret-up" {...props}>
      <path d="M6.41,16H17.59a1,1,0,0,0,.7-1.71L12.71,8.71a1,1,0,0,0-1.42,0L5.71,14.29A1,1,0,0,0,6.41,16Z" />
    </Icon>
  )
}
CaretUp.displayName = 'CaretUp'
export default CaretUp
