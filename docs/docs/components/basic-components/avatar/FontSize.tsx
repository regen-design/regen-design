import { Avatar, Input, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [value, setValue] = useState('Regen')
  return (
    <Space alignItems={'flex-end'}>
      <Avatar>{value}</Avatar>
      <Avatar rounded>{value}</Avatar>
      <Input value={value} onChange={setValue} />
    </Space>
  )
}
