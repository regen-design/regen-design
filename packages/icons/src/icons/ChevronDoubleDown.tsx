import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const ChevronDoubleDown = (props: IconProps) => {
  return (
    <Icon name="chevron-double-down" {...props} svgViewBox={`0 0 24 24`}>
      <g>
        <path d="M.305,12.293a1,1,0,0,1,1.414,0l8.172,8.171a3,3,0,0,0,4.242,0l8.172-8.171a1,1,0,0,1,1.414,1.414l-8.172,8.171a5,5,0,0,1-7.07,0L.305,13.707a1,1,0,0,1,0-1.414Z" />
        <path d="M.305,2.293a1,1,0,0,1,1.414,0l9.586,9.586a1,1,0,0,0,1.414,0l9.586-9.586a1,1,0,0,1,1.414,1.414l-9.586,9.586a3,3,0,0,1-4.242,0L.305,3.707a1,1,0,0,1,0-1.414Z" />
      </g>
    </Icon>
  )
}
ChevronDoubleDown.displayName = 'ChevronDoubleDown'
export default ChevronDoubleDown
