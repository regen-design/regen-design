import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const SearchAlt = (props: IconProps) => {
  return (
    <Icon name="search-alt" {...props} svgViewBox={`0 0 24 24`}>
      <path d="m16 6a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2zm7.707 17.707a1 1 0 0 1 -1.414 0l-2.407-2.407a4.457 4.457 0 0 1 -2.386.7 4.5 4.5 0 1 1 4.5-4.5 4.457 4.457 0 0 1 -.7 2.386l2.407 2.407a1 1 0 0 1 0 1.414zm-6.207-3.707a2.5 2.5 0 1 0 -2.5-2.5 2.5 2.5 0 0 0 2.5 2.5zm-4.5 2h-6a3 3 0 0 1 -3-3v-14a3 3 0 0 1 3-3h12a1 1 0 0 1 1 1v8a1 1 0 0 0 2 0v-8a3 3 0 0 0 -3-3h-12a5.006 5.006 0 0 0 -5 5v14a5.006 5.006 0 0 0 5 5h6a1 1 0 0 0 0-2z" />
    </Icon>
  )
}
SearchAlt.displayName = 'SearchAlt'
export default SearchAlt
