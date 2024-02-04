import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const ArrowRight = (props: IconProps) => {
  return (
    <Icon name="arrow-right" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z" />
    </Icon>
  )
}
ArrowRight.displayName = 'ArrowRight'
export default ArrowRight
