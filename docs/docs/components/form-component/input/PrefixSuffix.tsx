import { Input, Space } from '@regen-design/components'
import { MarkerIcon, SearchIcon } from '@regen-design/icons'

export default function Demo() {
  return (
    <Space>
      <Input placeholder={'搜索'} prefix={<SearchIcon />} />
      <Input placeholder={'How Much ?'} rounded suffix={<span>元</span>} />
      <Input placeholder={'搜索'} rounded suffix={<MarkerIcon />} />
    </Space>
  )
}
