import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const ArrowToLeft = (props: IconProps) => {
  return (
    <Icon name="arrow-to-left" {...props}>
      <path d="M2.015,18.015V13.5a2.5,2.5,0,0,0,.233.285l4.95,4.95a1,1,0,1,0,1.414-1.414l-4.3-4.3H22.985a1,1,0,0,0,0-2H4.308l4.3-4.3A1,1,0,0,0,7.2,5.3l-4.95,4.95a2.491,2.491,0,0,0-.233.284V6.015a1,1,0,0,0-2,0v12a1,1,0,0,0,2,0Z" />
    </Icon>
  )
}
ArrowToLeft.displayName = 'ArrowToLeft'
export default ArrowToLeft
