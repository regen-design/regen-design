import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const CaretSquareLeft = (props: IconProps) => {
  return (
    <Icon name="caret-square-left" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M0,12A12,12,0,1,1,12,24,12.013,12.013,0,0,1,0,12Zm22,0A10,10,0,1,0,12,22,10.011,10.011,0,0,0,22,12ZM12.4,6.269,7.25,11.356a.9.9,0,0,0,0,1.288L12.4,17.731a.924.924,0,0,0,1.575-.644V6.913A.924.924,0,0,0,12.4,6.269Z" />
    </Icon>
  )
}
CaretSquareLeft.displayName = 'CaretSquareLeft'
export default CaretSquareLeft
