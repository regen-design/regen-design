import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Volume = (props: IconProps) => {
  return (
    <Icon name="volume" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M20.807,4.29a1,1,0,0,0-1.415,1.415,8.913,8.913,0,0,1,0,12.59,1,1,0,0,0,1.415,1.415A10.916,10.916,0,0,0,20.807,4.29Z" />
      <path d="M18.1,7.291A1,1,0,0,0,16.68,8.706a4.662,4.662,0,0,1,0,6.588A1,1,0,0,0,18.1,16.709,6.666,6.666,0,0,0,18.1,7.291Z" />
      <path d="M13.82.2A12.054,12.054,0,0,0,6.266,5H5a5.008,5.008,0,0,0-5,5v4a5.008,5.008,0,0,0,5,5H6.266A12.059,12.059,0,0,0,13.82,23.8a.917.917,0,0,0,.181.017,1,1,0,0,0,1-1V1.186A1,1,0,0,0,13.82.2ZM13,21.535a10.083,10.083,0,0,1-5.371-4.08A1,1,0,0,0,6.792,17H5a3,3,0,0,1-3-3V10A3,3,0,0,1,5,7h1.8a1,1,0,0,0,.837-.453A10.079,10.079,0,0,1,13,2.465Z" />
    </Icon>
  )
}
Volume.displayName = 'Volume'
export default Volume
