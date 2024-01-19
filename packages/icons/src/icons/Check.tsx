import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Check = (props: IconProps) => {
  return (
    <Icon name="check" {...props}>
      <g>
        <path d="M163.865,436.934c-14.406,0.006-28.222-5.72-38.4-15.915L9.369,304.966c-12.492-12.496-12.492-32.752,0-45.248l0,0   c12.496-12.492,32.752-12.492,45.248,0l109.248,109.248L452.889,79.942c12.496-12.492,32.752-12.492,45.248,0l0,0   c12.492,12.496,12.492,32.752,0,45.248L202.265,421.019C192.087,431.214,178.271,436.94,163.865,436.934z" />
      </g>
    </Icon>
  )
}
Check.displayName = 'Check'
export default Check
