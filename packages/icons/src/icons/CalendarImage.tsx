import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const CalendarImage = (props: IconProps) => {
  return (
    <Icon name="calendar-image" {...props} svgViewBox={`0 0 24 24`}>
      <path d="m19,2h-1v-1c0-.553-.448-1-1-1s-1,.447-1,1v1h-8v-1c0-.553-.448-1-1-1s-1,.447-1,1v1h-1C2.243,2,0,4.243,0,7v12c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5Zm-14,2h14c1.654,0,3,1.346,3,3v1H2v-1c0-1.654,1.346-3,3-3Zm-3,6h20v.589c-.015.013-6.025,6.021-6.025,6.021-.521.521-1.429.521-1.951,0l-.634-.635c-1.277-1.277-3.503-1.277-4.78,0l-5.417,5.417c-.724-.548-1.193-1.417-1.193-2.393v-9Zm17,12H5.414l4.611-4.61c.521-.521,1.429-.521,1.951,0l.634.635c1.277,1.277,3.503,1.277,4.78,0l4.61-4.61v5.586c0,1.654-1.346,3-3,3ZM4,13.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Z" />
    </Icon>
  )
}
CalendarImage.displayName = 'CalendarImage'
export default CalendarImage
