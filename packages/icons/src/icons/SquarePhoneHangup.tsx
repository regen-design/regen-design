import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const SquarePhoneHangup = (props: IconProps) => {
  return (
    <Icon name="square-phone-hangup" {...props} svgViewBox={`0 0 24 24`}>
      <path d="m18.196,10.961c.49.49.805,1.159.804,1.906l-.053,1.038c0,.605-.49,1.095-1.095,1.095l-1.56-.205c-.605,0-1.095-.49-1.095-1.095l-.148-1.578c-1.939-.868-3.968-.91-6.099,0l-.148,1.578c0,.605-.49,1.095-1.095,1.095l-1.56.205c-.605,0-1.095-.49-1.095-1.095l-.053-1.038c0-.747.314-1.416.804-1.906,2.711-2.711,9.874-2.517,12.391,0Zm5.804-5.961v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-2,0c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5Z" />
    </Icon>
  )
}
SquarePhoneHangup.displayName = 'SquarePhoneHangup'
export default SquarePhoneHangup
