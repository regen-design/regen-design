import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Search = (props: IconProps) => {
  return (
    <Icon name="search" {...props}>
      <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
    </Icon>
  )
}
Search.displayName = 'Search'
export default Search
