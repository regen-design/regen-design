import { Input, Space } from '@regen-design/components'
import { MarkerIcon, SearchIcon } from '@regen-design/icons'

export default function Demo() {
  return (
    <Space>
      <Input placeholder={'搜索'} prefix={<SearchIcon />} />
      <Input placeholder={'How Much ?'} round suffix={<span>元</span>} />
      <Input placeholder={'搜索'} round suffix={<MarkerIcon />} />
    </Space>
  )
}
