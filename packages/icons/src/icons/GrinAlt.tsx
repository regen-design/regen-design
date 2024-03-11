import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const GrinAlt = (props: IconProps) => {
  return (
    <Icon name="grin-alt" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M7,9.5c.039-3.29,2.961-3.29,3,0C9.961,12.79,7.039,12.79,7,9.5ZM15.5,12c1.964-.027,1.964-4.973,0-5C13.536,7.027,13.536,11.973,15.5,12ZM24,12A12.013,12.013,0,0,1,12,24C-3.9,23.4-3.893.6,12,0A12.013,12.013,0,0,1,24,12Zm-2,0A10.011,10.011,0,0,0,12,2c-13.248.5-13.245,19.5,0,20A10.011,10.011,0,0,0,22,12Zm-5.211,2.024A15.4,15.4,0,0,1,12,15,15.4,15.4,0,0,1,7.2,14.024a1,1,0,0,0-1.052,1.518A6.836,6.836,0,0,0,12,19a6.827,6.827,0,0,0,5.842-3.458A1,1,0,0,0,16.789,14.024Z" />
    </Icon>
  )
}
GrinAlt.displayName = 'GrinAlt'
export default GrinAlt
