import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const TemperatureHigh = (props: IconProps) => {
  return (
    <Icon name="temperature-high" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M11,24c-6.078.117-9.334-7.638-5-11.889V5c.211-6.609,9.791-6.6,10,0v7.111C20.335,16.363,17.077,24.117,11,24ZM11,2A3,3,0,0,0,8,5v7.537a1,1,0,0,1-.332.744A5.018,5.018,0,0,0,11,22a5.018,5.018,0,0,0,3.332-8.719A1,1,0,0,1,14,12.537V5A3,3,0,0,0,11,2Zm0,18a3.007,3.007,0,0,1-1-5.829V5a1,1,0,0,1,2,0v9.171A3.007,3.007,0,0,1,11,20Zm0-4a1,1,0,0,0,0,2A1,1,0,0,0,11,16ZM21,6a3,3,0,0,1,0-6A3,3,0,0,1,21,6Zm0-4a1,1,0,0,0,0,2A1,1,0,0,0,21,2Z" />
    </Icon>
  )
}
TemperatureHigh.displayName = 'TemperatureHigh'
export default TemperatureHigh
