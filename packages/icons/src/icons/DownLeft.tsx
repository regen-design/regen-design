import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const DownLeft = (props: IconProps) => {
  return (
    <Icon name="down-left" {...props}>
      <path d="M14,23H5s0,0,0,0c-2.2,0-4-1.79-4-4V10c0-1.23,.7-2.3,1.84-2.77s2.39-.23,3.27,.64l1.47,1.48L14.76,2.17c1.51-1.51,4.14-1.51,5.66,0l1.41,1.41c.76,.75,1.17,1.76,1.17,2.83s-.42,2.07-1.17,2.83l-7.17,7.17,1.47,1.47c.87,.88,1.12,2.13,.64,3.27-.47,1.14-1.54,1.84-2.77,1.84Zm-9-2H14s0,0,0,0c.62,0,.86-.47,.92-.62,.06-.14,.22-.65-.21-1.09l-2.18-2.18c-.39-.39-.39-1.02,0-1.41l7.88-7.88c.38-.38,.59-.88,.59-1.41s-.21-1.04-.59-1.41l-1.41-1.41c-.76-.76-2.07-.76-2.83,0l-7.88,7.88c-.39,.39-1.02,.39-1.41,0l-2.18-2.18c-.44-.43-.94-.27-1.08-.21-.14,.06-.62,.3-.62,.92v9c0,1.1,.9,2,2,2h0Z" />
    </Icon>
  )
}
DownLeft.displayName = 'DownLeft'
export default DownLeft
