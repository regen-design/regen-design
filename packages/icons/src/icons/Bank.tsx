import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Bank = (props: IconProps) => {
  return (
    <Icon name="bank" {...props} svgViewBox={`0 0 24 24`}>
      <path d="m24 23a1 1 0 0 1 -1 1h-22a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1zm-23.709-14.448a2.443 2.443 0 0 1 .153-2.566 4.716 4.716 0 0 1 1.668-1.5l7.501-3.904a5.174 5.174 0 0 1 4.774 0l7.5 3.907a4.716 4.716 0 0 1 1.668 1.5 2.443 2.443 0 0 1 .153 2.566 2.713 2.713 0 0 1 -2.416 1.445h-.292v8h1a1 1 0 0 1 0 2h-20a1 1 0 0 1 0-2h1v-8h-.292a2.713 2.713 0 0 1 -2.417-1.448zm4.709 9.448h3v-8h-3zm5-8v8h4v-8zm9 0h-3v8h3zm-16.937-2.375a.717.717 0 0 0 .645.375h18.584a.717.717 0 0 0 .645-.375.452.452 0 0 0 -.024-.5 2.7 2.7 0 0 0 -.949-.864l-7.5-3.907a3.176 3.176 0 0 0 -2.926 0l-7.5 3.907a2.712 2.712 0 0 0 -.949.865.452.452 0 0 0 -.026.499z" />
    </Icon>
  )
}
Bank.displayName = 'Bank'
export default Bank
