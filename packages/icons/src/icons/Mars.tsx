import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Mars = (props: IconProps) => {
  return (
    <Icon name="mars" {...props}>
      <path d="M448.249,0H341.999c-11.736,0-21.25,9.53-21.25,21.285s9.514,21.285,21.25,21.285h97.453L294.271,187.991  c-78.572-62.08-192.511-48.605-254.488,30.097S-8.742,410.916,69.83,472.996s192.511,48.605,254.488-30.097  c51.91-65.917,51.91-158.893,0-224.81L469.5,72.668v97.614c0,11.756,9.514,21.285,21.25,21.285s21.25-9.53,21.25-21.285V63.856  C512,28.589,483.458,0,448.249,0z M182.622,468.275c-76.285,0-138.126-61.943-138.126-138.354s61.841-138.354,138.126-138.354  s138.126,61.943,138.126,138.354C320.655,406.293,258.868,468.181,182.622,468.275z" />
    </Icon>
  )
}
Mars.displayName = 'Mars'
export default Mars
