import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const PriorityArrows = (props: IconProps) => {
  return (
    <Icon name="priority-arrows" {...props}>
      <path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,19c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v14Zm-10.5-7.949c-.268,0-.534-.106-.73-.317l-1.77-1.894v8.161c0,.552-.447,1-1,1s-1-.448-1-1v-8.207l-1.914,1.914c-.391.391-1.023.391-1.414,0-.391-.391-.391-1.023,0-1.414l2.561-2.561c.467-.467,1.268-.732,1.768-.732s1.3.265,1.768.732l2.463,2.636c.377.403.355,1.036-.048,1.414-.192.18-.438.269-.683.269Zm8.828,2.242c.391.391.391,1.023,0,1.414l-2.561,2.561c-.467.467-1.268.732-1.768.732s-1.3-.265-1.768-.732l-2.561-2.561c-.391-.391-.391-1.023,0-1.414.391-.391,1.023-.391,1.414,0l1.914,1.914V7c0-.552.447-1,1-1s1,.448,1,1v8.207l1.914-1.914c.391-.391,1.023-.391,1.414,0Z" />
    </Icon>
  )
}
PriorityArrows.displayName = 'PriorityArrows'
export default PriorityArrows
