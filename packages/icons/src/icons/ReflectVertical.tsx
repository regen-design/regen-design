import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const ReflectVertical = (props: IconProps) => {
  return (
    <Icon name="reflect-vertical" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M24,12c0,.55-.45,1-1,1H1c-.55,0-1-.45-1-1s.45-1,1-1H23c.55,0,1,.45,1,1ZM5.5,3.15c-.52-.57-.65-1.34-.34-2.03s.96-1.12,1.72-1.12h10.25c.75,0,1.41,.43,1.72,1.12s.18,1.46-.33,2.02l-4.81,5.11c-.42,.47-1.04,.75-1.69,.75s-1.27-.28-1.71-.76L5.5,3.15Zm1.66-1.15l4.6,4.88c.19,.21,.3,.19,.46,.02l4.61-4.9H7.17Zm11.33,18.85c.52,.57,.65,1.34,.34,2.03s-.96,1.12-1.72,1.12H6.88c-.75,0-1.41-.43-1.72-1.12s-.18-1.46,.33-2.02l4.81-5.11c.84-.93,2.53-.95,3.4,.02l4.79,5.08Z" />
    </Icon>
  )
}
ReflectVertical.displayName = 'ReflectVertical'
export default ReflectVertical
