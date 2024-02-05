import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const StarFill = (props: IconProps) => {
  return (
    <Icon name="star-fill" {...props} svgViewBox={`0 0 1151 1024`}>
      <path d="M518.535872 35.620955L387.952021 300.38821 95.788154 342.982943c-52.39352 7.59906-73.390924 72.191072-35.395623 109.186496l211.373859 205.974527-49.993817 290.964016c-8.998887 52.593496 46.394262 91.988624 92.788525 67.391666L575.928774 879.116638l261.367676 137.38301c46.394262 24.396983 101.787412-14.79817 92.788525-67.391666l-49.993818-290.964016 211.373859-205.974527c37.995301-36.995425 16.997898-101.587436-35.395622-109.186496L763.905526 300.38821 633.321676 35.620955c-23.397106-47.194163-91.188723-47.794089-114.785804 0z" />
    </Icon>
  )
}
StarFill.displayName = 'StarFill'
export default StarFill