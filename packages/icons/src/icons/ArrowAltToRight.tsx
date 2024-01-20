import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const ArrowAltToRight = (props: IconProps) => {
  return (
    <Icon name="arrow-alt-to-right" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M21.768,11.448c.154,.152,.232,.352,.232,.552s-.077,.4-.232,.552l-4.418,4.361c-.498,.492-1.35,.143-1.35-.552v-3.361H1c-.552,0-1-.448-1-1s.448-1,1-1h15v-3.361c0-.695,.852-1.044,1.35-.552l4.418,4.361Zm1.232-8.448c-.553,0-1,.448-1,1V20c0,.552,.447,1,1,1s1-.448,1-1V4c0-.552-.447-1-1-1Z" />
    </Icon>
  )
}
ArrowAltToRight.displayName = 'ArrowAltToRight'
export default ArrowAltToRight
