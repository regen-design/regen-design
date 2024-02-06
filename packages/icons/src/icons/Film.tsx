import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Film = (props: IconProps) => {
  return (
    <Icon name="film" {...props} svgViewBox={`0 0 24 24`}>
      <path d="m19 0h-14a5.006 5.006 0 0 0 -5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-14a5.006 5.006 0 0 0 -5-5zm1 11h2v2h-2zm0-2v-2h2v2zm-2 2h-12v-9h12zm-14 2h-2v-2h2zm0-4h-2v-2h2zm-2 6h2v2h-2zm4-2h12v9h-12zm14 2h2v2h-2zm2-10h-2v-2.816a3 3 0 0 1 2 2.816zm-18-2.816v2.816h-2a3 3 0 0 1 2-2.816zm-2 16.816h2v2.816a3 3 0 0 1 -2-2.816zm18 2.816v-2.816h2a3 3 0 0 1 -2 2.816z" />
    </Icon>
  )
}
Film.displayName = 'Film'
export default Film
