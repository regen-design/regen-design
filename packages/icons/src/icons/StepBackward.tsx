import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const StepBackward = (props: IconProps) => {
  return (
    <Icon name="step-backward" {...props} svgViewBox={`0 0 24 24`}>
      <path d="m18.809.44c-1.374-.695-2.934-.566-4.204.368l-9.604,7.675V1c0-.552-.447-1-1-1s-1,.448-1,1v22c0,.552.447,1,1,1s1-.448,1-1v-7.482l9.637,7.706c.697.513,1.512.784,2.354.784.628,0,1.24-.148,1.818-.44,1.372-.696,2.19-2.029,2.19-3.567V4.007c0-1.538-.818-2.871-2.191-3.567Zm.191,19.561c0,.781-.399,1.431-1.094,1.783-.686.349-1.492.264-2.053-.145L5.816,13.611c-.519-.38-.816-.967-.816-1.611s.298-1.231.816-1.611L15.82,2.396c.359-.264.761-.397,1.17-.397.307,0,.616.075.915.226.695.353,1.095,1.002,1.095,1.783v15.993Z" />
    </Icon>
  )
}
StepBackward.displayName = 'StepBackward'
export default StepBackward
