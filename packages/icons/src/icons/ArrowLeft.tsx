import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const ArrowLeft = (props: IconProps) => {
  return (
    <Icon name="arrow-left" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M.88,14.09,4.75,18a1,1,0,0,0,1.42,0h0a1,1,0,0,0,0-1.42L2.61,13H23a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H2.55L6.17,7.38A1,1,0,0,0,6.17,6h0A1,1,0,0,0,4.75,6L.88,9.85A3,3,0,0,0,.88,14.09Z" />
    </Icon>
  )
}
ArrowLeft.displayName = 'ArrowLeft'
export default ArrowLeft
