import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const ArrowAltSquareLeft = (props: IconProps) => {
  return (
    <Icon name="arrow-alt-square-left" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M11,11h7v2h-7v4.132l-4.629-4.236c-.494-.443-.494-1.217,0-1.66l4.629-4.236v4ZM24,3V24H0V3C0,1.346,1.346,0,3,0H21c1.654,0,3,1.346,3,3Zm-2,0c0-.551-.448-1-1-1H3c-.551,0-1,.449-1,1V22H22V3Z" />
    </Icon>
  )
}
ArrowAltSquareLeft.displayName = 'ArrowAltSquareLeft'
export default ArrowAltSquareLeft
