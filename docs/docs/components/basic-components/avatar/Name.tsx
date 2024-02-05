import { Avatar, Input, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [value, setValue] = useState('琚天雷')
  return (
    <Space alignItems={'flex-end'}>
      <Avatar name={value} />
      <Avatar rounded name={value} />
      <Input value={value} onChange={setValue} />
    </Space>
  )
}
