import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const CommentAlt = (props: IconProps) => {
  return (
    <Icon name="comment-alt" {...props}>
      <path d="M20,0H4A4,4,0,0,0,0,4V16a4,4,0,0,0,4,4H6.9l4.451,3.763a1,1,0,0,0,1.292,0L17.1,20H20a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,16a2,2,0,0,1-2,2H17.1a2,2,0,0,0-1.291.473L12,21.69,8.193,18.473h0A2,2,0,0,0,6.9,18H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2Z" />
      <path d="M7,7h5a1,1,0,0,0,0-2H7A1,1,0,0,0,7,7Z" />
      <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z" />
      <path d="M17,13H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z" />
    </Icon>
  )
}
CommentAlt.displayName = 'CommentAlt'
export default CommentAlt
