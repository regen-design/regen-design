import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const CallIncoming = (props: IconProps) => {
  return (
    <Icon name="call-incoming" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M14.98,7.023v-4a1,1,0,0,1,2,0V5.634C17.61,5,21.681.908,22.273.316A1,1,0,1,1,23.687,1.73c-.592.592-4.642,4.665-5.268,5.293H20.98a1,1,0,0,1,0,2h-4A2,2,0,0,1,14.98,7.023Zm8.095,9.739a3.1,3.1,0,0,1,0,4.378l-.912,1.05c-8.191,7.838-28.119-12.084-20.4-20.3l1.15-1A3.081,3.081,0,0,1,7.24.929c.031.03,1.883,2.438,1.883,2.438a3.109,3.109,0,0,1-.006,4.282L7.959,9.105A12.784,12.784,0,0,0,14.89,16.05l1.465-1.165a3.1,3.1,0,0,1,4.28-.006S23.044,16.732,23.075,16.762ZM21.7,18.216s-2.393-1.842-2.424-1.872a1.1,1.1,0,0,0-1.549,0c-.027.026-2.044,1.634-2.044,1.634a1,1,0,0,1-.979.152A15.009,15.009,0,0,1,5.879,9.319a1,1,0,0,1,.145-1S7.632,6.305,7.659,6.279a1.1,1.1,0,0,0,0-1.549c-.03-.03-1.872-2.425-1.872-2.425a1.1,1.1,0,0,0-1.51.039l-1.15,1C-2.515,10.127,14.757,26.441,20.7,20.827l.912-1.051A1.12,1.12,0,0,0,21.7,18.216Z" />
    </Icon>
  )
}
CallIncoming.displayName = 'CallIncoming'
export default CallIncoming