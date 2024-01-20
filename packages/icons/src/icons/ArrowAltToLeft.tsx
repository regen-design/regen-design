import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const ArrowAltToLeft = (props: IconProps) => {
  return (
    <Icon name="arrow-alt-to-left" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M24,12c0,.552-.448,1-1,1H8v3.361c0,.695-.852,1.044-1.35,.552L2.232,12.552c-.154-.152-.232-.352-.232-.552s.077-.4,.232-.552L6.65,7.087c.498-.492,1.35-.143,1.35,.552v3.361h15c.552,0,1,.448,1,1ZM1,3c-.552,0-1,.448-1,1V20c0,.552,.448,1,1,1s1-.448,1-1V4c0-.552-.448-1-1-1Z" />
    </Icon>
  )
}
ArrowAltToLeft.displayName = 'ArrowAltToLeft'
export default ArrowAltToLeft
