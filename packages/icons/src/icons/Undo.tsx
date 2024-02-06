import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Undo = (props: IconProps) => {
  return (
    <Icon name="undo" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M23,24a1,1,0,0,1-1-1,6.006,6.006,0,0,0-6-6H10.17v1.586A2,2,0,0,1,6.756,20L.877,14.121a3,3,0,0,1,0-4.242L6.756,4A2,2,0,0,1,10.17,5.414V7H15a9.01,9.01,0,0,1,9,9v7A1,1,0,0,1,23,24ZM8.17,5.414,2.291,11.293a1,1,0,0,0,0,1.414L8.17,18.586V16a1,1,0,0,1,1-1H16a7.984,7.984,0,0,1,6,2.714V16a7.008,7.008,0,0,0-7-7H9.17a1,1,0,0,1-1-1Z" />
    </Icon>
  )
}
Undo.displayName = 'Undo'
export default Undo