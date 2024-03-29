import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const ArrowAltToBottom = (props: IconProps) => {
  return (
    <Icon name="arrow-alt-to-bottom" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M12.552,21.768c-.152,.154-.352,.232-.552,.232s-.4-.077-.552-.232l-4.361-4.418c-.492-.498-.143-1.35,.552-1.35h3.361V1c0-.552,.447-1,1-1s1,.448,1,1v15h3.361c.695,0,1.044,.852,.552,1.35l-4.361,4.418Zm7.448,.232H4c-.553,0-1,.448-1,1s.447,1,1,1H20c.553,0,1-.448,1-1s-.447-1-1-1Z" />
    </Icon>
  )
}
ArrowAltToBottom.displayName = 'ArrowAltToBottom'
export default ArrowAltToBottom
