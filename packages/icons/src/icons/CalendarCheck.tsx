import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const CalendarCheck = (props: IconProps) => {
  return (
    <Icon name="calendar-check" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M19,2h-1V1c0-.552-.447-1-1-1s-1,.448-1,1v1H8V1c0-.552-.447-1-1-1s-1,.448-1,1v1h-1C2.243,2,0,4.243,0,7v12c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5ZM5,4h14c1.654,0,3,1.346,3,3v1H2v-1c0-1.654,1.346-3,3-3Zm14,18H5c-1.654,0-3-1.346-3-3V10H22v9c0,1.654-1.346,3-3,3Zm-1.168-8.848c.384,.397,.372,1.031-.025,1.414l-4.74,4.568c-.553,.553-1.307,.866-2.108,.866s-1.555-.312-2.121-.879l-2.252-2.092c-.404-.376-.428-1.009-.052-1.413,.378-.405,1.01-.427,1.413-.052l2.278,2.117c.433,.43,1.063,.402,1.439,.026l4.754-4.582c.398-.383,1.03-.371,1.414,.026Z" />
    </Icon>
  )
}
CalendarCheck.displayName = 'CalendarCheck'
export default CalendarCheck