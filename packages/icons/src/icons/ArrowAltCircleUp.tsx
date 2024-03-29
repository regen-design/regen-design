import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const ArrowAltCircleUp = (props: IconProps) => {
  return (
    <Icon name="arrow-alt-circle-up" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm4.913-11.35c.492,.498,.143,1.35-.552,1.35h-3.361v5c0,.552-.448,1-1,1s-1-.448-1-1v-5h-3.361c-.695,0-1.044-.852-.552-1.35l4.361-4.418c.305-.309,.799-.309,1.104,0l4.361,4.418Z" />
    </Icon>
  )
}
ArrowAltCircleUp.displayName = 'ArrowAltCircleUp'
export default ArrowAltCircleUp
