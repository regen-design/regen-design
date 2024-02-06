import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const MobileNotch = (props: IconProps) => {
  return (
    <Icon name="mobile-notch" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M15.045,0c-.027-.001-6.063-.001-6.09,0-2.736,.024-4.955,2.258-4.955,4.999v14c0,2.757,2.243,5,5,5h6c2.757,0,5-2.243,5-5V5C20,2.258,17.781,.025,15.045,0Zm2.955,18.999c0,1.654-1.346,3-3,3h-6c-1.654,0-3-1.346-3-3V5c0-1.453,1.038-2.667,2.411-2.942l.694,1.389c.169,.339,.516,.553,.895,.553h4c.379,0,.725-.214,.895-.553l.694-1.389c1.373,.274,2.411,1.489,2.411,2.942v14Zm-5,1h-2c-.552,0-1-.448-1-1h0c0-.552,.448-1,1-1h2c.552,0,1,.448,1,1h0c0,.552-.448,1-1,1Z" />
    </Icon>
  )
}
MobileNotch.displayName = 'MobileNotch'
export default MobileNotch
