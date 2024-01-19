import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const CaretCircleRight = (props: IconProps) => {
  return (
    <Icon name="caret-circle-right" {...props}>
      <path d="M24,12A12,12,0,1,1,12,0,12.013,12.013,0,0,1,24,12ZM2,12A10,10,0,1,0,12,2,10.011,10.011,0,0,0,2,12Zm9.6,5.731,5.154-5.087a.9.9,0,0,0,0-1.288L11.6,6.269a.924.924,0,0,0-1.575.644V17.087A.924.924,0,0,0,11.6,17.731Z" />
    </Icon>
  )
}
CaretCircleRight.displayName = 'CaretCircleRight'
export default CaretCircleRight
