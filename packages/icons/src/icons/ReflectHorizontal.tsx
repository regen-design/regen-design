import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const ReflectHorizontal = (props: IconProps) => {
  return (
    <Icon name="reflect-horizontal" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M13,1V23c0,.55-.45,1-1,1s-1-.45-1-1V1c0-.55,.45-1,1-1s1,.45,1,1Zm-4,11c0,.65-.28,1.28-.76,1.71l-5.08,4.79c-.36,.33-.81,.5-1.27,.5-.26,0-.51-.05-.76-.16-.69-.3-1.12-.96-1.12-1.72V6.88c0-.75,.43-1.41,1.12-1.72,.69-.3,1.47-.18,2.02,.33l5.11,4.81c.47,.42,.75,1.04,.75,1.69Zm-2,0s-.01-.14-.1-.22L2,7.17v9.67l4.88-4.6c.1-.09,.12-.19,.12-.24ZM24,6.88v10.25c0,.75-.43,1.41-1.12,1.72-.25,.11-.51,.16-.76,.16-.46,0-.9-.17-1.26-.5l-5.11-4.81c-.47-.42-.75-1.04-.75-1.69s.28-1.27,.76-1.71l5.08-4.79c.57-.52,1.34-.65,2.03-.34,.69,.3,1.12,.96,1.12,1.72Z" />
    </Icon>
  )
}
ReflectHorizontal.displayName = 'ReflectHorizontal'
export default ReflectHorizontal
